import { Component } from "react";
import EnricherService from "../../service/enricher.service";
import skillAssignmentService from "../../service/skill-assignment.service";
import SkillService from "../../service/skill.service";

class SkillAssignmentListViewComponent extends Component {
    constructor() {
        super();

        this.state = { assignments: [], enrichedAssignments: [], skills: [], skillGroups: [] };
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
            <h3 className="title is-3">Skill Assignment List</h3>
            <button className="button is-primary" onClick={() => this.props.gotoEditAssignment(-1)}>
                <span class="icon is-small">
                    <i class="fas fa-plus-circle"></i>
                </span>
                <span>New Assignment</span>
            </button>
            <table className="table is-hoverable">
                <thead>
                    <th>
                        <label className="label">Name filter:</label><input className="input" type="text" id="nameFilter"></input></th>
                    <th>
                        <label className="label">SkillFilter:</label>
                        <select className="select">
                            <option>select Group</option>
                            {this.state.skillGroups.map((group) => {
                                return <option key={group.id}>{group.name}</option>
                            })}
                            <option>select all</option>
                        </select>
                        &nbsp;
                        <select className="select">
                            <option>all</option>
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
                            <td>
                                <div className="buttons has-addons">
                                    <button className="button is-small" onClick={() => this.props.gotoEditAssignment(assignment.id)} alt="edit">
                                        <span class="icon is-small">
                                            <i class="fas fa-pencil-alt"></i>
                                        </span>
                                    </button>

                                    <button className="button is-danger is-small" onClick={() => this.deleteAssignment(assignment.id)} alt="delete">
                                        <span class="icon is-small">
                                            <i class="fas fa-trash-alt"></i>
                                        </span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}

export default SkillAssignmentListViewComponent;