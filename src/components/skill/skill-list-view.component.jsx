import { Component } from "react";
import SkillService from "../../service/skill.service";

class SkillListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state={skillList:[],skillGroupList:[]};
    }

    componentDidMount = () => {
        let tmpSkillGroupList = SkillService.getSkillGroupList();
        
        this.setState({skillGroupList:tmpSkillGroupList});
        this.updateSkillList();
    }

    getGroupname = (groupId) => {
        let skillGroup = this.state.skillGroupList.find((obj) => obj.id === groupId);

        return skillGroup.name;
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
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Group</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.skillList.map((skill) => {
                        return <tr key={skill.id+342}>
                            <td>{skill.name}</td>
                            <td>{this.getGroupname(skill.skillGroupId)}</td>
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