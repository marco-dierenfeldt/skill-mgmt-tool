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
        let tmpSkillGroups = SkillService.getSkillGroupList();
        if (this.props.id && typeof (this.props.id) == 'number') {
            //console.log("SkillEditComponent.componentDidMount(" + this.props.id + ")");
            this.editMode = true;
            let tmpSkill = SkillService.getSkill(parseInt(this.props.id));
            //console.log("SkillEditComponent.componentDidMount tmpSkill:" + tmpSkill)
            this.setState({
                id: tmpSkill.id,
                name: tmpSkill.name,
                skillGroupId: tmpSkill.skillGroupId,
                description: tmpSkill.description,
                skillGroups: tmpSkillGroups,
                title: 'Edit existing skill'
            });
        } else {
            this.editmode = false;
            this.setState({ id: -1, skillGroups: tmpSkillGroups, title: 'Add new skill' })
        }
    }

    setName = (name) => {
        this.setState({ name })
    }

    setDescription = (description) => {
        this.setState({ description })
    }

    selectSkillGroup(skillGroupId) {
        this.setState({ skillGroupId })
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
                <h3 className="title is-3">{this.state.title}</h3>

                <div className="field">
                    <label className="label" >SkillGroup</label>
                    <div className="select">
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
                    </div>
                </div>
                <div className="field">
                    <label className="label">Skillname</label>
                    <div className="control">
                        <input
                            name="name"
                            className="input"
                            type="text"
                            value={this.state.name}
                            onChange={e => this.setName(e.target.value)}
                            required />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Beschreibung</label>
                    <div className="control">
                        <textarea
                            name="description"
                            className="textarea"
                            type="text"
                            value={this.state.description}
                            onChange={e => this.setDescription(e.target.value)}
                            required />
                    </div>
                </div>
                <button className="button is-primary">{this.btnTxt()}</button>


            </form>
        );

    }
}

export default SkillEditComponent;