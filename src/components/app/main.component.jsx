import { Component } from "react";
import AppStateEnum from "./app-state.enum";

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
        this.setState({displayState: AppStateEnum.SKILL_OVERVIEW});
    }
    
    gotoEmployeeManagement = () => {
        this.setState({displayState: AppStateEnum.EMPLOYEE_OVERVIEW});
    }

    gotoSkillEditor = () => {
        this.setState({displayState: AppStateEnum.SKILL_EDIT});
    }
    
    gotoEmployeeEditor = () => {
        this.setState({displayState: AppStateEnum.EMPLOYEE_EDIT});
    }

    render = () => {
        var content;
        if (this.state.displayState === AppStateEnum.EMPLOYEE_OVERVIEW) {
            content = <div>EMPLOYEE_OVERVIEW</div>
        } else if (this.state.displayState === AppStateEnum.SKILL_OVERVIEW) {
            content = <div>SKILL_OVERVIEW</div>
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