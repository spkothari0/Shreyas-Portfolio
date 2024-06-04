import { Accordion, Panel } from "baseui/accordion";
import React, { Component } from "react";
import "./CustomPanelCard.css";
import "./JobResponsibilityCard.css";
import responsibilityImg from "../../assests/images/responsibility.png";

class JobResponsibilityCard extends Component {
    render() {
        const jobResponsibility = this.props.jobResponsibility;
        const theme = this.props.theme;

        const accordionOverrides = {
            Root: {
                style: {
                    backgroundColor: theme.body,
                },
            },
        };

        const panelOverrides = {
            Header: {
                style: ({
                    backgroundColor: theme.body,
                    border: `1px solid`,
                    borderRadius: `5px`,
                    borderColor: `${theme.headerColor}`,
                    fontFamily: "Google Sans Regular",
                    color: `${theme.text}`,
                    fontWeight: "bold",
                    ":hover": {
                        backgroundColor: `${theme.headerColor}`,
                        fontStyle: "italic",
                    },
                }),
                props: {
                    className: "panel-header"
                }
            },
            Content: {
                style: {
                    padding: '0 0 10px 0', // remove padding
                    backgroundColor: theme.body,
                },
            },
        };

        return (
            <div className="job-responsibility">
                <Accordion overrides={accordionOverrides}>
                    <Panel title={
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={responsibilityImg} alt="responsibility" width="30px" height="30px" />
                            {/* <MdWork size="2em" /> */}
                            <h4 style={{ color: theme.text, marginLeft: "10px" }} className="accordion-title">{jobResponsibility.title}</h4>
                        </div>
                    } overrides={panelOverrides} >
                        <ol style={{ color: theme.text }}>
                            {jobResponsibility.responsibilities.map((resp, index) => (
                                <li key={index} className="responsibility-container">
                                    <strong>{resp.name}</strong>
                                    <ul>
                                        {resp.data.map((item, subIndex) => (
                                            <li key={subIndex} style={{ color: theme.text }} className="responsibility-data">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </Panel>
                </Accordion>

            </div>
        );
    }
}

export default JobResponsibilityCard;