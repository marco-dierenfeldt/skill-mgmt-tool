import { Component, React } from "react";
import EmployeeService from "../../service/employee.service"

class EmployeeEditComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            gotoSkillList: props.gotoEmployeeList,
            id: props.id,
            name: "Rurik", 
            surname: "Eisenfaust", 
            unit: "TELCO-Line 9", 
            role: "SW Architect" };
    }

    componentDidMount = () => {
        if (this.props.id && typeof(this.props.id) == 'number') {
            this.editMode = true;
            let tmpEmployee = EmployeeService.getEmployee(parseInt(this.props.id));
            this.setState({id: tmpEmployee.id, name: tmpEmployee.name, surname: tmpEmployee.surname, unit: tmpEmployee.unit, role: tmpEmployee.role});
        } else {
            this.editMode = false;
        }
    }

    setName = (name) => {
        this.setState({ name })
    }

    setSurname = (surname) => {
        this.setState({ surname })
    }

    setUnit = (unit) => {
        this.setState({ unit })
    }

    setRole = (role) => {
        this.setState({ role })
    }

    handleSubmit = (event) => {
        if (this.editMode) { 
            EmployeeService.updateSEmployee(this.state.id, this.state.name, this.state.name, this.state.unit, this.state.role);
        } else {
            EmployeeService.addEmployee(this.state.name, this.state.surname, this.state.unit, this.state.role);
        }
        this.props.gotoEmployeeList();
        event.preventDefault();
    }

    btnTxt = () => {
        if (this.editMode) {
            return 'Update';
         } else {
             return 'Submit';
         }
    }

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Employee Edit View</h3>
                <table>
                    <tr>
                        <td>Vorname</td>
                        <td>
                            <input
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={e => this.setName(e.target.value)}
                                required />
                        </td>
                    </tr>
                    <tr>
                        <td>Nachname</td>
                        <td>
                            <input
                                name="surname"
                                type="text"
                                value={this.state.surname}
                                onChange={e => this.setSurname(e.target.value)}
                                required />
                        </td>
                    </tr>

                    <tr>
                        <td>Einheit</td>
                        <td>
                            <input
                                name="unit"
                                type="text"
                                value={this.state.unit}
                                onChange={e => this.setUnit(e.target.value)}
                                required>
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td>Rolle</td>
                        <td>
                            <input
                                name="role"
                                type="text"
                                value={this.state.role}
                                onChange={e => this.setRole(e.target.value)}
                                required>
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td></td><td align="right"><button>{this.btnTxt()}</button></td>
                    </tr>
                </table>
            </form>
        );

    }
}

export default EmployeeEditComponent;