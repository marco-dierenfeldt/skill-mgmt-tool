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
        var result = this.employeeList.find(employee => {
            return employee.id === id;
        });
        return result;
    }

    updateSEmployee(id, name, surname, unit, role) {
        var objIndex = this.employeeList.findIndex((employee => employee.id === id));

        this.employeeList[objIndex].name = name;
        this.employeeList[objIndex].surname = surname;
        this.employeeList[objIndex].unit = unit;
        this.employeeList[objIndex].role = role;
    }

    addEmployee(name, surname, unit, role){
        this.employeeList.push({
            id:this.employeeList.length+1,
            name,
            surname,
            unit,
            role
        });
    }
}

export default new EmployeeService();