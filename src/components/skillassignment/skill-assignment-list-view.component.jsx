import { Component } from "react";
import EnricherService from "../../service/enricher.service";
import skillAssignmentService from "../../service/skill-assignment.service";
import SkillService from "../../service/skill.service";

class SkillAssignmentListViewComponent extends Component {
    constructor() {
        super();

        this.state = { assignments: [], enrichedAssignments: [], skills:[], skillGroups: [] };
    }

    componentDidMount() {
        let assignments = skillAssignmentService.getAssignments();
        let enrichedAssignments = EnricherService.enrichAssignments(assignments);
        let skillGroups = SkillService.getSkillGroupList();
        let skills = SkillService.getSkillList();
        this.setState({ assignments, enrichedAssignments, skills, skillGroups });
    }

    deleteAssignment = (id) => {
        skillAssignmentService.deleteAssignment(id);
        const enrichedAssignments = this.state.enrichedAssignments;
        const idx = enrichedAssignments.findIndex((assignment) => assignment.id === id);
        enrichedAssignments.splice(idx, 1);

        this.setState({ enrichedAssignments });
    }

    render() {
        return (<div>
            <h3>SKillAssignmentListViewComponent</h3>
            <table>
                <thead>
                    <th>Name filter:<br/><input type="text" id="nameFilter"></input></th>
                    <th>
                        SkillFilter:<br/>
                        <select>
                            <option>select filter</option>
                            {this.state.skillGroups.map((group) => {
                                return <option key={group.id}>{group.name}</option>
                            })}
                            <option>select all</option>
                        </select>
                        <select>
                            <option>select filter</option>
                            {this.state.skills.map((skill) => {
                                return <option key={skill.id} >{skill.name}</option>
                            })}
                        </select>
                    </th>
                    <th></th>
                </thead>
                <tbody>
                    {this.state.enrichedAssignments.map((assignment) => {
                        return <tr>
                            <td>{assignment.name}:</td>
                            <td>{assignment.skills.map((skill) => skill.skillName + '(' + skill.skillLevel + ') ')}</td>
                            <td><button>edit</button> &nbsp; <button onClick={() => this.deleteAssignment(assignment.id)}>delete</button></td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>
        )
    }
}

export default SkillAssignmentListViewComponent;