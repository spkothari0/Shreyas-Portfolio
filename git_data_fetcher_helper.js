
const languages = {
    default: "uil:technology",
    Python: "logos-python",
    "Jupyter Notebook": "logos-jupyter",
    HTML: "logos-html-5",
    CSS: "logos-css-3",
    Scss: "vscode-icons:file-type-scss",
    JavaScript: "logos-javascript",
    TypeScript: "logos:typescript-icon",
    Express: "skill-icons:expressjs-light",
    "C#": "logos-c-sharp",
    Java: "logos-java",
    Shell: "simple-icons:shell",
    Ruby: "logos:ruby",
    PHP: "logos-php",
    Dockerfile: "simple-icons:docker",
    Rust: "logos-rust",
    React: "logos:react",
    Redux: "skill-icons:redux",
    SpringBoot: "logos:spring-icon",
    DotNet: "devicon:dotnetcore",
    Node: "logos:nodejs",
    SPARQL: "vscode-icons:file-type-sparql",
    SQL: "vscode-icons:file-type-plsql",
    MySQL: "logos:mysql",
    MongoDB: "devicon:mongodb-wordmark",
    Firebase: "logos:firebase",
    Redis : "devicon:redis",
    Swagger : "devicon:swagger",
    AuthToken: "oui:token-key",
    MailService: "simple-icons:amazonsimpleemailservice",
    AWS: "logos:aws",
    EC2: "logos:aws-ec2",
    S3: "logos:aws-s3",
    Lambda: "logos:aws-lambda",
    DynamoDB: "logos:dynamodb",
    RDS: "logos:aws-rds",
    Route53: "logos:aws-route53",
    CloudFront: "logos:aws-cloudfront",
    VPC: "logos:aws-vpc",
    IAM: "logos:aws-iam",
    SNS: "logos:aws-sns",
    SQS: "logos:aws-sqs",
    SES: "logos:aws-ses",
    ECS: "logos:aws-ecs",
    ECR: "logos:aws-ecr",
    EKS: "logos:aws-eks",
    Kafka: "logos:kafka",
    Microservices: "carbon:microservices-1",
    Gemini: "logos:google-gemini",
    LangChain: "pepicons-pop:chain-circle-filled",
};

const projectTechStack = {
    "Task-Management-Microservice": [languages.SpringBoot, languages.Microservices, languages.Kafka,languages.MySQL, languages.AuthToken, languages.Swagger, languages.Redis],
    "Text-Summarization-Using-LangChain-Gemini": ["LLM", languages.Python, languages.LangChain, languages.Gemini],
    "ShareFoodBite": [languages.React, languages.Redux, languages.Node, languages.Express, languages.MongoDB, languages.Firebase, languages.Scss],
    "spring-boot-advanced-template" : [languages.SpringBoot, languages.AuthToken, languages.Redis, languages.MySQL, languages.Swagger, languages.MailService ],
    "University-Portal": ["Java Swing", languages.MySQL],
    "news-app": [languages.React, languages.Redux],
};


module.exports = { languages, projectTechStack };

