import { Component } from "react";
import SkillService from "../../service/skill.service";

class SkillListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state={skillList:[{id:1, name:"blah", description:"blubb"}]};
    }

    componentDidMount = () => {
        let tmpSkillList = SkillService.getSkillList();
        this.setState({skillList: tmpSkillList});
    }

    render = () => {
        return (
            <div>
                <h3>Skill List View</h3>
                <table>
                    {this.state.skillList.map((skill) => {
                        return <tr><td>{skill.name}</td><td>{skill.description}</td></tr>
                    })}
                </table>
            </div>
        );
    }
}

export default SkillListViewComponent;  