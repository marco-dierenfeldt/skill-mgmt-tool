import { Component } from "react";
import EmployeeService from "../../service/employee.service";
import skillAssignmentService from "../../service/skill-assignment.service";
import SkillService from "../../service/skill.service";

class SkillAssignmentListViewComponent extends Component {
    constructor() {
        super();

        this.state = { assignments: [], enrichedAssignments: [] };
    }

    componentDidMount() {
        let assignments = skillAssignmentService.getAssignments();
        let enrichedAssignments = this.enrichedAssignments(assignments);

        this.setState({ assignments, enrichedAssignments });
    }

    enrichedAssignments = (assignments) => {
        let enrichedAssignments = []
        
        assignments.forEach((assignment) => {
            const name = EmployeeService.getName(assignment.employeeId);
            const skills = this.enrichSkills(assignment.simplifiedSkills)

            enrichedAssignments.push({id:assignment.id, name, skills});
        })

        return enrichedAssignments;
    }

    enrichSkills(simplifiedSkills) {
        const skills = [];

        simplifiedSkills.forEach((skill) => {
            const skillName = SkillService.getName(skill.skillId);
            skills.push({skillName, skillLevel:skill.skillLevel});
        });

        return skills;
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