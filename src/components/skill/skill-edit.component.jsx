import { Component, React } from "react";
import SkillService from "../../service/skill.service";

class SkillEditComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gotoSkillList: props.gotoSkillList,
            id: props.id,
            name: "",
            skillGroupId: 1,
            description: "Level 1:\nLevel 2:\nLevel 3:",
            skillGroups: [{ name: "" }]
        };
    }

    componentDidMount = () => {
        if (this.props.id && typeof (this.props.id) == 'number') {
            //console.log("SkillEditComponent.componentDidMount("+this.props.id+")");
            this.editMode = true;
            let tmpSkill = SkillService.getSkill(parseInt(this.props.id));
            let tmpSkillGroups = SkillService.getSkillGroupList();
            //console.log("SkillEditComponent.componentDidMount tmpSkill:" + tmpSkill)
            this.setState({
                id: tmpSkill.id,
                name: tmpSkill.name,
                skillGroupId: tmpSkill.skillGroupId,
                description: tmpSkill.description,
                skillGroups: tmpSkillGroups
            });
        } else {
            this.editmode = false;
        }
    }

    setName = (name) => {
        this.setState({ name })
    }

    setDescription = (description) => {
        this.setState({ description })
    }

    selectSkillGroup(skillGroupId) {
        this.setState({skillGroupId})
    }

    handleSubmit = (event) => {
        if (this.editMode) {
            SkillService.updateSkill(this.state.id, this.state.name, this.state.skillGroupId, this.state.description);
        } else {
            SkillService.addSkill(this.state.name, this.state.skillGroupId, this.state.description);
        }
        this.props.gotoSkillList();
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
                <h3>Skill Edit View</h3>
                <table>
                    <tr>
                        <td>SkillGroup</td>
                        <td>
                            <select>
                                <option>please select</option>
                                {this.state.skillGroups.map((skillGroup) => {
                                    if (skillGroup.id === this.state.skillGroupId) {
                                        return <option selected="true" key={skillGroup.id} onClick={() => this.selectSkillGroup(skillGroup.id)}>{skillGroup.name}</option>
                                    } else {
                                        return <option key={skillGroup.id} onClick={() => this.selectSkillGroup(skillGroup.id)}>{skillGroup.name}</option>
                                    }
                                })}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Skillname</td>
                        <td>
                            <input
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={e => this.setName(e.target.value)}
                                required />
                        </td>
                    </tr>
                    <tr>
                        <td>Beschreibung</td>
                        <td>
                            <textarea
                                name="description"
                                type="text"
                                value={this.state.description}
                                onChange={e => this.setDescription(e.target.value)}
                                required />
                        </td>
                    </tr>
                    <tr>
                        <td></td><td align="right"><button>{this.btnTxt()}</button></td>
                    </tr>
                </table>
            </form>
        );

    }
}

export default SkillEditComponent;