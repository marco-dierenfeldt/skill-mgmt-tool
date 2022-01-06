import { Component } from "react";
import SkillService from "../../service/skill.service";

class SkillListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { skillList: [], skillGroupList: [] };
    }

    componentDidMount = () => {
        let tmpSkillGroupList = SkillService.getSkillGroupList();

        this.setState({ skillGroupList: tmpSkillGroupList });
        this.updateSkillList();
    }

    getGroupName = (groupId) => {
        return SkillService.getGroupName(groupId);
    }

    deleteSkill = (id) => {
        SkillService.deleteSkill(id);
        this.updateSkillList();
    }

    updateSkillList = () => {
        let tmpSkillList = SkillService.getSkillList();
        this.setState({ skillList: tmpSkillList });
    }

    render = () => {
        return (
            <div>
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
                            return <tr key={skill.id + 342}>
                                <td>{skill.name}</td>
                                <td>{this.getGroupName(skill.skillGroupId)}</td>
                                <td>{skill.description}</td>
                                <td>
                                    <button className="button is-small" onClick={() => this.props.editSkill(skill.id)} alt="edit">
                                        <span class="icon is-small">
                                            <i class="fas fa-pencil-alt"></i>
                                        </span>
                                    </button>
                                </td>
                                <td>
                                    <button className="button is-danger is-small" onClick={() => this.deleteSkill(skill.id)} alt="delete">
                                        <span class="icon is-small">
                                            <i class="fas fa-trash-alt"></i>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SkillListViewComponent;  