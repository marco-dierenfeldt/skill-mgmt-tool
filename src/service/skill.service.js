class SkillService {
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
        var result = this.skillList.find(skill => {
            return skill.id === id
        })
        return result;
    }

    updateSkill(id, name, description) {
        var objIndex = this.skillList.findIndex((obj => obj.id === id));

        this.skillList[objIndex].name = name;
        this.skillList[objIndex].description = description;
    }

    addSkill(name, description) {
        this.skillList.push({
            id: this.skillList.length + 1,
            name,
            description,
        });
    }

    deleteSkill(id) {
        var objIndex = this.skillList.findIndex((obj => obj.id === id));
        this.skillList.splice(objIndex,1)
    }
};

export default new SkillService();