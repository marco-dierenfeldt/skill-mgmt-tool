import { Component } from "react";
import EmployeeService from "../../service/employee.service"
import SkillAssignmentService from "../../service/skill-assignment.service";
import SkillService from "../../service/skill.service"

class SkillAssignmentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { employee: {}, assignedSkills: [], employees: [], skills: [], skillGroups: [], skillLevels: [] };
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

    deleteSkill = (skill) => {
        let tmpSkills = this.state.assignedSkills;
        let idx = tmpSkills.findIndex((tmpSkill) => tmpSkill.id === skill.id);

        tmpSkills.splice(idx, 1);
        this.setState({ assignedSkills: tmpSkills });
    }

    saveAssignment = () => {
        let employee = this.state.employee;
        let assignedSkills = this.state.assignedSkills;

        let assignment = {
            employee,
            assignedSkills
        };

        SkillAssignmentService.addAssignment(assignment);
        this.props.gotoSkillAssignmentList();
    }

    selectGroup = (group) => {
        console.log("selectGroup " + group.name);
        let skills = SkillService.getSkillsByGroupId(group.id);
        this.setState({ skills, currentGroup: group });
    }

    getSkillGroupNameBySkill(skill) {
        let tmpGroup = this.state.skillGroups.find((group) => {
            return group.id === skill.skillGroupId;
        })

        if (tmpGroup && tmpGroup.name) {
            return tmpGroup.name
        } else {
            return "";
        }
    }

    selectEmployee = (employee) => {
        console.log("selectEmployee " + employee.name);

        this.setState({ employee });
    }

    selectSkillLevel(skill, skillLevel) {
        console.log("skill, skillLevel: " + skill.name + " " + skillLevel.name)

        let currentSkills = this.state.assignedSkills;
        let skillIdx = currentSkills.findIndex((tmpSkill) => tmpSkill.id === skill.id)

        currentSkills[skillIdx].skillLevel = skillLevel;

        this.setState({ assignedSkills: currentSkills });
    }

    render() {
        let assignement;
        if (this.state.employee.name) {
            assignement = <div>
                <h4>Assignment</h4>
                {this.state.employee.name} {this.state.employee.surname}
                <ul>
                    {this.state.assignedSkills.map((skill) => {
                        return <li>
                            {this.getSkillGroupNameBySkill(skill)} - {skill.name} &nbsp;
                            <select>
                                <option>please select</option>
                                {this.state.skillLevels.map((skillLevel) => {
                                    return <option key={skillLevel.id} onClick={() => this.selectSkillLevel(skill, skillLevel)}>{skillLevel.name} {skillLevel.surname}</option>
                                })}
                            </select><button onClick={() => this.deleteSkill(skill)}>delete</button>
                        </li>
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
                                <select>
                                    <option>please select</option>
                                    {this.state.employees.map((employee) => {
                                        return <option key={employee.id} onClick={() => this.selectEmployee(employee)}>{employee.name} {employee.surname}</option>
                                    })}
                                </select>
                            </td>
                            <td>
                                <h4>Select Skills</h4>
                                <select>
                                    <option>please select</option>
                                    {this.state.skillGroups.map((group) => {
                                        return <option key={group.id} onClick={() => this.selectGroup(group)}>{group.name}</option>
                                    })}
                                    <option onClick={() => this.selectGroup({ id: -1, name: "all groups" })}>select all</option>
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
                <button onClick={this.saveAssignment}>save</button>
            </div>
        );
    }
}

export default SkillAssignmentComponent;