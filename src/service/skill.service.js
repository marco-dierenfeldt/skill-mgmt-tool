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
            //console.log(skill);
            return skill.id === id
        })
        //console.log("SkillService result: " + result);
        return result;
    }

    updateSkill(id, name, description) {
        var objIndex = this.skillList.findIndex((obj => obj.id === id));

        //Log object to Console.
        console.log("Before update: ", this.skillList[objIndex])

        //Update object's name property.
        this.skillList[objIndex].name = name;
        this.skillList[objIndex].description = description;

        //Log object to console again.
        console.log("After update: ", this.skillList[objIndex])
    }

    addSkill(name, description) {
        this.skillList.push({
            id: this.skillList.length + 1,
            name,
            description,
        });
    }
}

export default new SkillService();