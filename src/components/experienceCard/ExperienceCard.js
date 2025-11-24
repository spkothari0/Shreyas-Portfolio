import React, { Component } from 'react';
import './ExperienceCard.css';
import { Fade } from "react-reveal";
import JobResponsibilityCard from './JobResponsibilityCard';
import TechnologyUsed from './TechnologyUsedCard';

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div>
        {experience.map((experience, index) => (
          <div key={`experience-${index}`} className="experience-list-item" style={{ marginTop: (index === 0 ? 30 : 50) }}>
            {/* Company Image */}
            <Fade left duration={2000} distance="40px">
              <div className="experience-card-logo-div">
                <img
                  className="experience-card-logo"
                  src={require(`../../assests/images/${experience["logo_path"]}`)}
                  alt=""
                />
              </div>
            </Fade>
            {/* Experience Card Data */}
            <Fade right duration={2000} distance="40px">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="arrow-left" style={{ borderRight: `10px solid ${theme.body}` }}></div>
                <div className="experience-card" style={{ background: `${theme.body}` }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="experience-card-title" style={{ color: theme.text }}>{experience["title"]}</h3>
                      <p className="experience-card-company" style={{ color: theme.text }}>
                        <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer" style={{color:theme.text}}>
                          {experience["company"]}
                        </a>
                      </p>
                    </div>
                    <div>
                      <div className="experience-card-heading-right">
                        <p className="experience-card-duration" style={{ color: theme.secondaryText }}>{experience["duration"]}</p>
                        <p className="experience-card-location" style={{ color: theme.secondaryText }}>{experience["location"]}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20, color: theme.text }}>
                    <div className="repo-description" />
                    {experience["description"]}
                  </div>
                    <details className='job-information'>
                      <summary style={{cursor:"pointer", fontFamily:"Google Sans Medium", color: theme.text}}>
                        Responsibilities & Technologies
                      </summary>
                      {experience.jobResponsibility && <JobResponsibilityCard jobResponsibility={experience.jobResponsibility} theme={theme} />}
                      {experience.technologyUsed && <TechnologyUsed technologyUsed={experience.technologyUsed} theme={theme} />}
                    </details>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceCard;
