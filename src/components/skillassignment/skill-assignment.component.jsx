import { Component } from "react";
import EmployeeService from "../../service/employee.service"
import SkillService from "../../service/skill.service"

class SkillAssignmentComponent extends Component {
    constructor() {
        super();

        this.state = { employee: {}, assignedSkills: [], employees: [], skills: [] };
    }

    componentDidMount() {
        let employees = EmployeeService.getEmployeeList();
        let skills = SkillService.getSkillList();

        this.setState({ employees, skills });
    }

    selectSkill = (skill) => {
        console.log("selectSkill " + skill.name);

        let skills = this.state.assignedSkills;
        skills.push(skill);
        this.setState({assignedSkills: skills});
    }

    selectEmployee = (employee) => {
        console.log("selectEmployee " + employee.name);

        this.setState({employee});
    }

    render() {
        let assignement;
        if(this.state.employee.name){
            assignement = <div>
                <h4>Assignment</h4>
                {this.state.employee.name} {this.state.employee.surname}
                <ul>
                    {this.state.assignedSkills.map((skill) =>{
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