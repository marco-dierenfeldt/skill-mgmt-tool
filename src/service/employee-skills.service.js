class EmployeeSkillsService {
    constructor() {
        this.employeeSkillsList = [
            {employeeId:1, employeeSkills:[{skillId:1, skillLevelId:2}, {skillId:3, skillLeveId:2}]}
        ];
    }

    getEmployeeSkillsByEmployee(employeeId) {
        return this.employeeSkillsList[0];
    }

    saveEmployeeSkills(employeeSkills){
        var objIndex = this.employeeSkillsList.findIndex((obj => obj.employeeId === employeeSkills.employeeId));

        if(objIndex) {
            this.employeeSkillsList.splice(objIndex,1);
        } 

        this.employeeSkillsList.push(employeeSkills);
    }
}

export default new EmployeeSkillsService();