import { Component } from "react";
import EmployeeListViewComponent from "./employee-list-view.component";

class EmployeeOverviewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {gotoEmployeeEdit: props.gotoEmployeeEdit};
    }

    render = () => {
        return (
            <div>
                <h3>Employee Overview</h3>
                <button onClick={this.state.gotoEmployeeEdit}>Create new Employee</button>
                <EmployeeListViewComponent/>
            </div>);
    }
}

export default EmployeeOverviewComponent;