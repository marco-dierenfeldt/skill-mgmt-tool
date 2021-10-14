import { Component } from "react";
import SkillOverviewComponent from "../skill/skill-overview.component";
import SkillEditComponent from "../skill/skill-edit.component";
import AppStateEnum from "./app-state.enum";
import EmployeeOverviewComponent from "../employee/employee-overview.component";
import EmployeeEditComponent from "../employee/employee-edit.component";

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { displayState: AppStateEnum.APP_START };

        this.gotoSkillManagement = this.gotoSkillManagement.bind(this);
        this.gotoEmployeeManagement = this.gotoEmployeeManagement.bind(this);
        this.gotoSkillEditor = this.gotoSkillEditor.bind(this);
        this.gotoEmployeeEditor = this.gotoEmployeeEditor.bind(this);
    }

    gotoSkillManagement = () => {
        this.setState({ displayState: AppStateEnum.SKILL_OVERVIEW });
    }

    gotoEmployeeManagement = () => {
        this.setState({ displayState: AppStateEnum.EMPLOYEE_OVERVIEW });
    }

    gotoSkillEditor = (skillID) => {
        if (skillID) {
            this.setState({ displayState: AppStateEnum.SKILL_EDIT, id: skillID })
        } else {
            this.setState({ displayState: AppStateEnum.SKILL_NEW, id: null });
        }
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
        } else if (this.state.displayState === AppStateEnum.EMPLOYEE_EDIT) {
            content = <EmployeeEditComponent gotoEmployeeList={this.gotoEmployeeManagement} id={this.state.id} />
        } else if (this.state.displayState === AppStateEnum.EMPLOYEE_NEW) {
            content = <EmployeeEditComponent gotoEmployeeList={this.gotoEmployeeManagement} />
        } else {
            content = <div>APP_START</div>
        }
        return (
            <div>
                <h3>Main App Component</h3>
                <button onClick={this.gotoSkillManagement}>Skill management</button>&nbsp;
                <button onClick={this.gotoEmployeeManagement}>Employee management</button>
                {content}
            </div>
        );
    }
}

export default MainComponent;