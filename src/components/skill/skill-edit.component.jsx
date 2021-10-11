import { Component, React } from "react";
import SkillService from "../../service/skill.service";

class SkillEditComponent extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = { id: 1, name: "blah", description: "blubb" };
    }

    componentDidMount = () => {
        if (this.props.id) {
            this.editMode = true;
            let tmpSkill = SkillService.getEmployee(this.props.id);
            this.setState({ tmpSkill });
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
        SkillService.addSkill(this.state.name, this.state.description);
        event.preventDefault();
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
                            <input
                                name="description"
                                type="text"
                                value={this.state.description}
                                onChange={e => this.setDescription(e.target.value)}
                                required />
                        </td>
                    </tr>
                    <tr>
                        <td></td><td align="right"><button>Submit</button></td>
                    </tr>
                </table>
            </form>
        );

    }
}

export default SkillEditComponent;