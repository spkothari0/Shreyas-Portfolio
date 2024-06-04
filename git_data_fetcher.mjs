import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
import { languages, projectTechStack } from "./git_data_fetcher_helper.js";


dotenv.config();

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};


const query_pinned_projects = {
  query: `
	query { 
	  user(login: "${openSource.githubUserName}") { 
	    pinnedItems(first: 6, types: REPOSITORY) {
	      totalCount
	      nodes{
	        ... on Repository{
	          id
		          name
		          createdAt,
		          url,
		          description,
		          isFork,
		          languages(first:10){
		            nodes{
		              name
		            }
		          }
	        }
	      }
		  }
	  }
	}
	`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};


function getLanguageKeys(values) {
  return values.map(value => {
    for (let key in languages) {
      if (languages[key] === value) {
        return key;
      }
    }
    return null; // Return null if no key is found for the given value
  });
}

function getLanguageIcon(language) {
  if (language in languages) {
    return {
      name: language,
      iconifyClass: languages[language],
    };
  }
  return {
    name: language,
    iconifyClass: languages.default,
  };
}

const getAdditionalTechStack = (projectname) => {
  console.log("Starting getAdditionalTechStack for", projectname);
  let technologyList = [];
  let techUsed = projectTechStack[projectname] || [];

  if (techUsed.length === 0) {
    console.log("No additional tech stack found for", projectname, ". Please add the project in git_data_fetcher_helper.js");
    return technologyList;
  }

  getLanguageKeys(techUsed).forEach(element => {
    technologyList.push(getLanguageIcon(element));
  });
  return technologyList;
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pinned_projects),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const projects = data["data"]["user"]["pinnedItems"]["nodes"];
    var newProjects = { data: [] };

    // iterate over the projects and extract the required data
    for (var i = 0; i < projects.length; i++) {
      var obj = projects[i];
      var langobjs = obj["languages"]["nodes"];
      var newLangobjs = getAdditionalTechStack(obj["name"]);

      // iterate over the languages in projects and add the iconify class
      for (var j = 0; j < langobjs.length; j++) {
        if (langobjs[j]["name"] in languages) {
          newLangobjs.push(getLanguageIcon(langobjs[j]["name"]));
        }
      }
      obj["languages"] = newLangobjs;
      newProjects["data"].push(obj);
      // console.log("newLangobjs:", newLangobjs);
    }

    console.log("Fetching the Pinned Projects Data.\n");
    fs.writeFile(
      "./src/shared/opensource/projects.json",
      JSON.stringify(newProjects),
      function (err) {
        if (err) {
          console.log(
            "Error occured in pinned projects 1",
            JSON.stringify(err)
          );
        }
      }
    );
  })
  .catch((error) =>
    console.log("Error occured in pinned projects 2", JSON.stringify(error))
  );
