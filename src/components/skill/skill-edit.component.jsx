import { Component, React } from "react";
import SkillService from "../../service/skill.service";

class SkillEditComponent extends Component {

    constructor(props) {
        super(props);
        //this.props = props;
        this.state = { id: 1, name: "blah", description: "blubb" };
    }

    componentDidMount = () => {
        console.log("componentDidMount id: " + this.props.id);
        if (this.props.id) {
            this.editMode = true;
            let tmpSkill = SkillService.getSkill(parseInt(this.props.id));
            console.log("tmpSkill: " + tmpSkill);
            this.setState(tmpSkill);
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

    handleSubmit = (event) => {
        if (this.editMode) {
            SkillService.updateSkill(this.state.id, this.state.name, this.state.description);
        } else {
            SkillService.addSkill(this.state.name, this.state.description);
        }
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