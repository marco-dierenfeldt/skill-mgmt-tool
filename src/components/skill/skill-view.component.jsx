import { Component } from "react";
import skillService from "../../service/skill.service";

class SkillViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state={skill:{id:1, name:"blah", description:"blubb"}};
    }

    componentDidMount = () => {
        let tmpSkill = skillService.getSkill(1);
        this.setState({skill: tmpSkill});
    }

    render = () => {
        return (
            <div>
                <h3>Skill View</h3>
                <table>
                <tr><td>Name:</td><td>{this.state.skill.name}</td></tr>
                <tr><td>Beschreibung:</td><td>{this.state.skill.description}</td></tr>
                </table>
            </div>
        );
    }
}

export default SkillViewComponent;  