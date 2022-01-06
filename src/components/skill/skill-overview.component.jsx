import { Component } from "react";
import SkillListViewComponent from "./skill-list-view.component"

class SkillOverviewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { gotoSkillEdit: props.gotoSkillEdit }
    }

    editSkill = (id) => {
        console.log("SkillOverview.editSkill(" + id + ")")
        this.props.gotoSkillEdit(id);
    }

    render = () => {
        return (
            <div><h3 className="title is-3">Skill Overview</h3>
                <button className="button is-primary" onClick={this.state.gotoSkillEdit}>Add Skill</button>
                <SkillListViewComponent editSkill={this.editSkill} />
            </div>
        );
    }
}

export default SkillOverviewComponent;