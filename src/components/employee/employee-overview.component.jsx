import { Component } from "react";
import EmployeeListViewComponent from "./employee-list-view.component";

class EmployeeOverviewComponent extends Component {
    
    render = () => {
        return (
            <div>
                <h3 className="title is-3">Employee Overview</h3>
                <button className="button is-primary" onClick={this.props.gotoEmployeeEdit}>Create new Employee</button>
                <EmployeeListViewComponent editEmployee={this.props.gotoEmployeeEdit}/>
            </div>);
    }
}

export default EmployeeOverviewComponent;