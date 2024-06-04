import { Accordion, Panel } from "baseui/accordion";
import React, { Component } from "react";
import { RiStackshareLine } from "react-icons/ri";
import "./CustomPanelCard.css";

class TechnologyUsed extends Component {
    render() {
        const technologyUsed = this.props.technologyUsed;
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
            <div className="technology-used">
                <Accordion overrides={accordionOverrides}>
                    <Panel title={
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <RiStackshareLine size="2em" />
                            <h4 style={{ color: theme.text, marginLeft: "10px" }} className="accordion-title">{technologyUsed.title}</h4>
                        </div>
                    } overrides={panelOverrides}>
                        {technologyUsed.technologies.map((tech, index) => {
                            return (
                                <ul>
                                    <li key={tech.name} style={{ color: theme.text }} className="responsibility-container">
                                        {<strong>{tech.name}: </strong>}{tech.data.join(", ")}
                                    </li>
                                </ul>
                            )
                        })}
                    </Panel>
                </Accordion>

            </div>
        );
    }
}

export default TechnologyUsed;