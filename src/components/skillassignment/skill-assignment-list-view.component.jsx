import { Component } from "react";
import skillAssignmentService from "../../service/skill-assignment.service";

class SkillAssignmentListViewComponent extends Component {
    constructor() {
        super();

        this.state = { assignments: [] };
    }

    componentDidMount() {
        let assignments = skillAssignmentService.getAssignments();
        this.setState({ assignments });
    }

    render() {
        return (<div>
            <h3>SKillAssignmentListViewComponent</h3>
            <table>
                {this.state.assignments.map((assignment) => {
                    return <tr>
                        <td>{assignment.employee.name} {assignment.employee.surname}:</td>
                        <td>{assignment.assignedSkills.map((skill) => skill.name + '(' + skill.skillLevel.id + ') ')}</td>
                        <td><button>edit</button> &nbsp; <button>delete</button></td>
                    </tr>
                })}
            </table>
        </div>
        )
    }
}

export default SkillAssignmentListViewComponent;