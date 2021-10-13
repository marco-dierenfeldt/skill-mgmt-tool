import { Component } from "react";
import SkillService from "../../service/skill.service";

class SkillListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state={skillList:[]};
    }

    componentDidMount = () => {
        this.updateSkillList();
    }

    deleteSkill = (id) => {
        SkillService.deleteSkill(id);
        this.updateSkillList();
    }

    updateSkillList = () =>{
        let tmpSkillList = SkillService.getSkillList();
        this.setState({skillList: tmpSkillList});
    }

    render = () => {
        return (
            <div>
                <h3>Skill List View</h3>
                <table>
                    <tbody>
                    {this.state.skillList.map((skill) => {
                        return <tr key={skill.id+342}>
                            <td>{skill.name}</td>
                            <td>{skill.description}</td>
                            <td><button onClick={() => this.deleteSkill(skill.id)}>delete</button></td>
                            <td><button onClick={() => this.props.editSkill(skill.id)}>edit</button></td>
                            </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SkillListViewComponent;  