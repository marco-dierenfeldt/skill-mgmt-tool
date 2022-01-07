import { Component, React } from "react";
import EmployeeService from "../../service/employee.service"

class EmployeeEditComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gotoSkillList: props.gotoEmployeeList,
            id: props.id,
            name: "",
            surname: "",
            unit: "",
            role: ""
        };
    }

    componentDidMount = () => {
        if (this.props.id && typeof (this.props.id) == 'number') {
            this.editMode = true;
            let tmpEmployee = EmployeeService.getEmployee(parseInt(this.props.id));
            this.setState({
                id: tmpEmployee.id,
                name: tmpEmployee.name,
                surname: tmpEmployee.surname,
                unit: tmpEmployee.unit,
                role: tmpEmployee.role,
                title: 'Edit existing employee'
            });
        } else {
            this.editMode = false;
            this.setState({ title: 'Add new employee' });
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
                <h3 className="title is-3" >{this.state.title}</h3>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={e => this.setName(e.target.value)}
                            required />
                    </div>
                </div><div className="field">
                    <label className="label">Surname</label>
                    <div className="control">
                        <input
                            className="input"
                            name="surname"
                            type="text"
                            value={this.state.surname}
                            onChange={e => this.setSurname(e.target.value)}
                            required />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Unit</label>
                    <div className="control">
                        <input
                            className="input"
                            name="unit"
                            type="text"
                            value={this.state.unit}
                            onChange={e => this.setUnit(e.target.value)}
                            required>
                        </input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Role</label>
                    <div className="control">
                        <input
                            className="input"
                            name="role"
                            type="text"
                            value={this.state.role}
                            onChange={e => this.setRole(e.target.value)}
                            required>
                        </input>
                    </div>
                </div>
                <button className="button is-primary" >{this.btnTxt()}</button>
            </form >
        );

    }
}

export default EmployeeEditComponent;