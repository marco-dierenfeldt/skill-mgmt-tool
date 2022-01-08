import { Component } from "react";
import EmployeeListViewComponent from "./employee-list-view.component";

class EmployeeOverviewComponent extends Component {

    render = () => {
        return (
            <div>
                <h3 className="title is-3">Employee Overview</h3>
                <button className="button is-primary" onClick={this.props.gotoEmployeeEdit}>
                    <span class="icon is-small">
                        <i class="fas fa-plus-circle"></i>
                    </span>
                    <span>Create new Employee</span>
                </button>
                <EmployeeListViewComponent editEmployee={this.props.gotoEmployeeEdit} />
            </div>);
    }
}

export default EmployeeOverviewComponent;