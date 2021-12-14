import { Component } from "react";
import EmployeeService from "../../service/employee.service"
import SkillService from "../../service/skill.service"

class SkillAssignmentComponent extends Component {
    constructor() {
        super();

        this.state = { employee: {}, assignedSkills: [], employees: [], skills: [], skillGroups: [], skillLevels:[] };
    }

    componentDidMount() {
        let employees = EmployeeService.getEmployeeList();
        let skills = SkillService.getSkillList();
        let skillLevels = SkillService.getSkillLevelList();
        let skillGroups = SkillService.getSkillGroupList();
        this.setState({ employees, skills, skillGroups, skillLevels });
    }

    selectSkill = (skill) => {
        console.log("selectSkill " + skill.name);

        let skills = this.state.assignedSkills;
        skills.push(skill);
        this.setState({ assignedSkills: skills });
    }

    selectGroup = (group) => {
        console.log("selectGroup " + group.name);
        let skills = SkillService.getSkillsByGroupId(group.id);
        this.setState({skills, currentGroup: group });
    }

    getSkillGroupNameBySkill(skill) {
        let tmpGroup = this.state.skillGroups.find((group) => {
            return group.id === skill.skillGroupId;
        })

        if (tmpGroup && tmpGroup.name ){
            return tmpGroup.name
        } else {
            return "";
        }
    }

    selectEmployee = (employee) => {
        console.log("selectEmployee " + employee.name);

        this.setState({ employee });
    }

    render() {
        let assignement;
        if (this.state.employee.name) {
            assignement = <div>
                <h4>Assignment</h4>
                {this.state.employee.name} {this.state.employee.surname}
                <ul>
                    {this.state.assignedSkills.map((skill) => {
                        return <li>{skill.name}</li>
                    })}
                </ul>
            </div>
        }
        return (
            <div>
                <h3>SkillAssignment</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4>Select Employee</h4>
                                <label>Filter: </label><br />
                                <input type="text"></input><br />
                                <select>
                                    <option>please select</option>
                                    {this.state.employees.map((employee) => {
                                        return <option key={employee.id} onClick={() => this.selectEmployee(employee)}>{employee.name} {employee.surname}</option>
                                    })}
                                </select>
                            </td>
                            <td>
                                <h4>Select Skills</h4>
                                <label>Filter: </label><br />
                                <input type="text"></input><br />
                                <select>
                                    <option>please select</option>
                                    {this.state.skillGroups.map((group) => {
                                        return <option key={group.id} onClick={() => this.selectGroup(group)}>{group.name}</option>
                                    })}
                                    <option onClick={() => this.selectGroup({id:-1, name:"all groups"})}>select all</option>
                                </select>
                                <select>
                                    <option>please select</option>
                                    {this.state.skills.map((skill) => {
                                        return <option key={skill.id} onClick={() => this.selectSkill(skill)}>{skill.name}</option>
                                    })}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {assignement}
            </div>
        );
    }
}

export default SkillAssignmentComponent;