class EmployeeService {
    constructor() {
        this.skillList = [
            { id: 1, name: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet..." },
            { id: 2, name: "Bananen schälen", description: "Lorem ipsum dolor sit amet..." },
            { id: 3, name: "Angular", description: "Lorem ipsum dolor sit amet..." },
            { id: 4, name: "React", description: "Lorem ipsum dolor sit amet..." }
        ];
    }

    getSkillList() {
        return this.skillList;
    }

    getSkill(id) {
        return this.skillList[id];
    }

    addSkill(name, description) {
        this.skillList.push({
            id: this.skillList.length + 1,
            name,
            description,
        });
    }
}

export default new EmployeeService();