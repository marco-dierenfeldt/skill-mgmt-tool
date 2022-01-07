import { Component } from "react";
import SkillOverviewComponent from "../skill/skill-overview.component";
import SkillEditComponent from "../skill/skill-edit.component";
import AppStateEnum from "./app-state.enum";
import EmployeeOverviewComponent from "../employee/employee-overview.component";
import EmployeeEditComponent from "../employee/employee-edit.component";
import SkillAssignmentComponent from "../skillassignment/skill-assignment.component";
import SkillAssignmentListViewComponent from "../skillassignment/skill-assignment-list-view.component";

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { displayState: AppStateEnum.APP_START };

        this.gotoSkillManagement = this.gotoSkillManagement.bind(this);
        this.gotoEmployeeManagement = this.gotoEmployeeManagement.bind(this);
        this.gotoSkillEditor = this.gotoSkillEditor.bind(this);
        this.gotoSkillAssignment = this.gotoSkillAssignment.bind(this);
        this.gotoEmployeeEditor = this.gotoEmployeeEditor.bind(this);
    }

    gotoSkillManagement = () => {
        this.setState({ displayState: AppStateEnum.SKILL_OVERVIEW });
    }

    gotoSkillEditor = (skillID) => {
        if (skillID) {
            this.setState({ displayState: AppStateEnum.SKILL_EDIT, id: skillID })
        } else {
            this.setState({ displayState: AppStateEnum.SKILL_NEW, id: null });
        }
    }

    gotoSkillAssignment = () => {
        this.setState({ displayState: AppStateEnum.SKILL_ASSIGNMENT });
    }

    gotoSkillAssignmentList = () => {
        this.setState({ displayState: AppStateEnum.SKILL_ASSIGNMENT_LIST });
    }

    gotoEmployeeManagement = () => {
        this.setState({ displayState: AppStateEnum.EMPLOYEE_OVERVIEW });
    }

    gotoEmployeeEditor = (employeeID) => {
        console.log("MainComponent.gotoEmployeeEditor()")
        if (employeeID) {
            this.setState({ displayState: AppStateEnum.EMPLOYEE_EDIT, id: employeeID });
        } else {
            this.setState({ displayState: AppStateEnum.EMPLOYEE_NEW });
        }
    }

    render = () => {
        var content;
        if (this.state.displayState === AppStateEnum.EMPLOYEE_OVERVIEW) {
            content = <EmployeeOverviewComponent gotoEmployeeEdit={this.gotoEmployeeEditor} />
        } else if (this.state.displayState === AppStateEnum.SKILL_OVERVIEW) {
            content = <SkillOverviewComponent gotoSkillEdit={this.gotoSkillEditor} />
        } else if (this.state.displayState === AppStateEnum.SKILL_EDIT) {
            content = <SkillEditComponent gotoSkillList={this.gotoSkillManagement} id={this.state.id} />
        } else if (this.state.displayState === AppStateEnum.SKILL_NEW) {
            content = <SkillEditComponent gotoSkillList={this.gotoSkillManagement} />
        } else if (this.state.displayState === AppStateEnum.SKILL_ASSIGNMENT) {
            content = <SkillAssignmentComponent gotoSkillAssignmentList={this.gotoSkillAssignmentList} />
        } else if (this.state.displayState === AppStateEnum.SKILL_ASSIGNMENT_LIST) {
            content = <SkillAssignmentListViewComponent />
        } else if (this.state.displayState === AppStateEnum.EMPLOYEE_EDIT) {
            content = <EmployeeEditComponent gotoEmployeeList={this.gotoEmployeeManagement} id={this.state.id} />
        } else if (this.state.displayState === AppStateEnum.EMPLOYEE_NEW) {
            content = <EmployeeEditComponent gotoEmployeeList={this.gotoEmployeeManagement} />
        } else {
            content = <div></div>
        }
        return (
            <div>
                <section className="hero is-link">
                    <div className="hero-body">
                        <div class="container">
                            <h1 className="title">
                                Skills App
                            </h1>
                            <h2 className="subtitle">
                                ...manage skills of employees
                            </h2>
                        </div>
                    </div>
                </section>
                <nav className="navbar" role="navigation" aria-label="main navigation">

                    <div className="navbar-menu is-active">
                        <div className="navbar-start">
                            <a href="#" className="navbar-item" onClick={this.gotoSkillManagement}>Skills</a>&nbsp;
                            <a href="#" className="navbar-item" onClick={this.gotoEmployeeManagement}>Employees</a>&nbsp;
                            <a href="#" className="navbar-item" onClick={this.gotoSkillAssignment}>Skill assignment</a>
                        </div>
                    </div>
                </nav>
                <hr />
                <div className="container is-fluid">
                    {content}
                </div>
            </div>
        );
    }
}

export default MainComponent;