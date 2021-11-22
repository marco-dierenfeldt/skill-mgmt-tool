import { Component } from "react";
import EmployeeService from "../../service/employee.service"

class EmployeeViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state={employee:{id:1, name:"", surname:"", unit:"", role:""}};
    }

    componentDidMount = () => {
        let tmpEmployee = EmployeeService.getEmployee(1);
        this.setState({employee: tmpEmployee});
    }

    render = () => {
        return (
            <div>
                <h3>Employee View</h3>
                <table>
                <tr><td>Name:</td><td>{this.state.employee.name} {this.state.employee.surname}</td></tr>
                <tr><td>Einheit:</td><td>{this.state.employee.unit}</td></tr>
                <tr><td>Rolle:</td><td>{this.state.employee.role}</td></tr>
                </table>
            </div>
        );
    }
}

export default EmployeeViewComponent;  