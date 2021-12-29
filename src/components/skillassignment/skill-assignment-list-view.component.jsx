import { Component } from "react";
import EmployeeService from "../../service/employee.service";
import EnricherService from "../../service/enricher.service";
import skillAssignmentService from "../../service/skill-assignment.service";
import SkillService from "../../service/skill.service";

class SkillAssignmentListViewComponent extends Component {
    constructor() {
        super();

        this.state = { assignments: [], enrichedAssignments: [] };
    }

    componentDidMount() {
        let assignments = skillAssignmentService.getAssignments();
        let enrichedAssignments = EnricherService.enrichAssignments(assignments);

        this.setState({ assignments, enrichedAssignments });
    }

    deleteAssignment = (id) => {
        skillAssignmentService.deleteAssignment(id);
        const enrichedAssignments = this.state.enrichedAssignments;
        const idx = enrichedAssignments.findIndex((assignment) => assignment.id === id);
        enrichedAssignments.splice(idx, 1);

        this.setState({enrichedAssignments});
    }

    render() {
        return (<div>
            <h3>SKillAssignmentListViewComponent</h3>
            <table>
                {this.state.enrichedAssignments.map((assignment) => {
                    return <tr>
                        <td>{assignment.name}:</td>
                        <td>{assignment.skills.map((skill) => skill.skillName + '(' + skill.skillLevel + ') ')}</td>
                        <td><button>edit</button> &nbsp; <button onClick={()=> this.deleteAssignment(assignment.id)}>delete</button></td>
                    </tr>
                })}
            </table>
        </div>
        )
    }
}

export default SkillAssignmentListViewComponent;