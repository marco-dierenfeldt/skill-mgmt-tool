import { Component } from "react";
import EmployeeService from "../../service/employee.service";

class EmployeeListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { employeeList: [{ id: 1, name: "Rurik", surname: "Eisenfaust", unit: "TELCO-Line 9", role: "SW Architect" }] };
    }

    componentDidMount = () => {
        this.updateEmployeeList()
    }

    deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id);
        this.updateEmployeeList();
    }

    updateEmployeeList = () => {
        let tmpEmployeeList = EmployeeService.getEmployeeList();
        this.setState({ employeeList: tmpEmployeeList });
    }

    render = () => {
        return (
            <div>
                <h3>Employee List View</h3>
                <table>
                    <tbody>
                        {this.state.employeeList.map((employee) => {
                            return <tr>
                                <td>{employee.name} {employee.surname}</td>
                                <td>{employee.role}</td>
                                <td><button onClick={() => this.deleteEmployee(employee.id)}>delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeListViewComponent;