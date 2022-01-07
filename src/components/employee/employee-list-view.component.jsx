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

    editEmployee = (id) => {
        this.props.editEmployee(id);
    }

    updateEmployeeList = () => {
        let tmpEmployeeList = EmployeeService.getEmployeeList();
        this.setState({ employeeList: tmpEmployeeList });
    }

    render = () => {
        return (
            <div>
                <table className="table is-hoverable">
                    <thead>
                        <th>name</th>
                        <th>role</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.state.employeeList.map((employee) => {
                            return <tr>
                                <td>{employee.name} {employee.surname}</td>
                                <td>{employee.role}</td>
                                <td>
                                <div className="buttons has-addons"> 
                                    <button className="button is-small" onClick={() => this.editEmployee(employee.id)}>
                                    <span class="icon is-small">
                                            <i class="fas fa-pencil-alt"></i>
                                        </span>
                                    </button>
                                    <button className="button is-small is-danger"onClick={() => this.deleteEmployee(employee.id)}>
                                    <span class="icon is-small">
                                            <i class="fas fa-trash-alt"></i>
                                        </span>
                                    </button>
                                    </div>
                                </td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeListViewComponent;