import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { MdWork } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Accessible, custom accordion + timeline layout
const ExperienceAccordion = ({ sections, theme }) => {
  const [openSections, setOpenSections] = useState(() =>
    sections.map(() => true) // default open; can set to false if collapsed view preferred
  );

  const toggleSection = (idx) => {
    setOpenSections((prev) => prev.map((o, i) => (i === idx ? !o : o)));
  };

  return (
    <div className="experience-accord">
      {sections.map((section, idx) => {
        const isOpen = openSections[idx];
        return (
          <section className="experience-section" key={section.title}>
            <button
              type="button"
              className="experience-section-toggle"
              aria-expanded={isOpen}
              onClick={() => toggleSection(idx)}
              style={{
                background: theme.body,
                borderColor: theme.headerColor,
                color: theme.text,
              }}
            >
              <span className="experience-section-title">
                <MdWork size="1.4em" style={{ marginRight: 8 }} /> {section.title}
              </span>
              <span className="experience-section-icon" aria-hidden="true">
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {isOpen && (
              <div className="experience-items" role="list">
                {section.experiences.map((experienceGroup, index) => (
                  <ExperienceCard
                    key={`exp-group-${index}`}
                    index={index}
                    totalCards={section.experiences.length}
                    experience={experienceGroup}
                    theme={theme}
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;
