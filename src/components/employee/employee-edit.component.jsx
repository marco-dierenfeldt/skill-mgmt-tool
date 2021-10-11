import { Component, React } from "react";
import EmployeeService from "../../service/employee.service"

class EmployeeEditComponent extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = { id: 1, name: "Rurik", surname: "Eisenfaust", unit: "TELCO-Line 9", role: "SW Architect" };
    }

    componentDidMount = () => {
        if (this.props.id) {
            let tmpEmployee = EmployeeService.getEmployee(this.props.id);
            this.setState({ tmpEmployee });
        }
    }

    setName = (name) => {
        //console.log("name: " + name);
        this.setState({ name })
    }

    setSurname = (surname) => {
        //console.log("surname: " + surname);
        this.setState({ surname })
    }

    setUnit = (unit) => {
        //console.log("unit: " + unit);
        this.setState({ unit })
    }

    setRole = (role) => {
        //console.log("role: " + role);
        this.setState({ role })
    }

    handleSubmit = (event) => {

        //console.log('event: ' + event);
        EmployeeService.addEmployee(this.state.name,this.state.surname,this.state.unit,this.state.role);
        event.preventDefault();
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
                        <td></td><td align="right"><button>Submit</button></td>
                    </tr>
                </table>
            </form>
        );

    }
}

export default EmployeeEditComponent;