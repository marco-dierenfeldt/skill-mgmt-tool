import { Component } from "react";
import EmployeeListViewComponent from "./employee-list-view.component";

class EmployeeOverviewComponent extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div>
                <h3>Employee Overview</h3>
                <button onClick={this.props.gotoEmployeeEdit}>Create new Employee</button>
                <EmployeeListViewComponent editEmployee={this.props.gotoEmployeeEdit}/>
            </div>);
    }
}

export default EmployeeOverviewComponent;