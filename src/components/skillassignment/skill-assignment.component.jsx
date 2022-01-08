import { Component } from "react";
import EmployeeService from "../../service/employee.service"
import SkillAssignmentService from "../../service/skill-assignment.service";
import SkillService from "../../service/skill.service"

class SkillAssignmentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { employee: {}, assignedSkills: [], employees: [], skills: [], skillGroups: [], skillLevels: [], saveDisabled: true };
    }

    componentDidMount() {
        let employees = EmployeeService.getEmployeeList();
        let skills = SkillService.getSkillList();
        let skillLevels = SkillService.getSkillLevelList();
        let skillGroups = SkillService.getSkillGroupList();
        this.DEFAULT_SKILL_LEVEL = skillLevels[0];
        this.setState({ employees, skills, skillGroups, skillLevels });
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
        let simplifiedSkills = [];

        assignedSkills.forEach((skill) => {
            simplifiedSkills.push({ skillId: skill.id, skillLevel: skill.skillLevel.id });
        })

        let assignment = {
            employeeId: employee.id,
            simplifiedSkills
        };

        SkillAssignmentService.addAssignment(assignment);
        this.props.gotoSkillAssignmentList();
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

    selectGroup = (group) => {
        console.log("selectGroup " + group.name);
        let skills = SkillService.getSkillsByGroupId(group.id);
        this.setState({ skills, currentGroup: group });
    }

    selectSkill = (skill) => {
        if (this.state.employee.name) {
            this.setState({ saveDisabled: false });
        }
        console.log("selectSkill " + skill.name);

        let skills = this.state.assignedSkills;
        skills.push(skill);
        this.setState({ assignedSkills: skills });
        this.selectSkillLevel(skill, this.DEFAULT_SKILL_LEVEL);
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
                <h4 className="title is-4">Assignments for {this.state.employee.name} {this.state.employee.surname}</h4>


                <table className="table is-hoverable">

                    <tbody>
                        {this.state.assignedSkills.map((skill) => {
                            return <tr>
                                <td>
                                    {this.getSkillGroupNameBySkill(skill)} - {skill.name} &nbsp;
                                </td>
                                <td>
                                    <select className="select">
                                        {this.state.skillLevels.map((skillLevel) => {
                                            return <option key={skillLevel.id} onClick={() => this.selectSkillLevel(skill, skillLevel)}>{skillLevel.name} {skillLevel.surname}</option>
                                        })}
                                    </select>
                                </td>
                                <td>
                                    <button className="button is-danger is-small" onClick={() => this.deleteSkill(skill)}>
                                        <span class="icon is-small">
                                            <i class="fas fa-trash-alt"></i>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        }
        return (
            <div>
                <h3 className="title is-3">Skill assignment</h3>
                <div className="columns">
                    <div className="column is-3">
                        <div className="field">
                            <label className="label">Select Employee</label>
                            <select className="select">
                                <option>please select</option>
                                {this.state.employees.map((employee) => {
                                    return <option key={employee.id} onClick={() => this.selectEmployee(employee)}>{employee.name} {employee.surname}</option>
                                })}
                            </select>
                        </div>

                    </div>
                    <div className="column is-3">
                        <div className="field">
                            <label className="label">Skillgroup</label>
                            <select className="select">
                                <option onClick={() => this.selectGroup({ id: -1, name: "all groups" })}>all</option>
                                {this.state.skillGroups.map((group) => {
                                    return <option key={group.id} onClick={() => this.selectGroup(group)}>{group.name}</option>
                                })}

                            </select>
                        </div>
                        <div className="field">
                            <label className="label">Skill</label>
                            <select className="select">
                                <option>please select</option>
                                {this.state.skills.map((skill) => {
                                    return <option key={skill.id} onClick={() => this.selectSkill(skill)}>{skill.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>

                {assignement}
                <button disabled={this.state.saveDisabled} className="button is-primary" onClick={this.saveAssignment}>
                    <span class="icon is-small">
                        <i class="fas fa-check"></i>
                    </span>
                    <span>Save</span>
                </button>
                <button className="button" onClick={this.props.gotoSkillAssignmentList}>
                    <span>Cancel</span>
                    <span class="icon is-small">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
        );
    }
}

export default SkillAssignmentComponent;