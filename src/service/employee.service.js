class EmployeeService {
    constructor() {
        this.employeeList = [
            {id:1, name:"Rurik", surname:"Eisenfaust", unit:"TELCO-Line 9", role:"SW Architect"},
            {id:2, name:"Osborn", surname:"Goldbarren", unit:"TELCO-Line 9", role:"Senior Developer"},
            {id:3, name:"Lumiel", surname:"Silberblatt", unit:"TELCO-Line 9", role:"Junior Developer"}
        ];
    }

    getEmployeeList() {
        return this.employeeList;
    }

    getEmployee(id) {
        return this.employeeList[id];
    }

}

export default new EmployeeService();