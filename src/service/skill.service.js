class SkillService {
    constructor() {
        this.skillList = [
            { id: 1, skillGroupId:1, name: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet..." },
            { id: 2, skillGroupId:2, name: "Bananen schälen", description: "Lorem ipsum dolor sit amet..." },
            { id: 3, skillGroupId:5, name: "Angular", description: "Lorem ipsum dolor sit amet..." },
            { id: 4, skillGroupId:5, name: "React", description: "Lorem ipsum dolor sit amet..." }
        ];

        this.skillLevelList = [
            { id: 1, name: "No Experience", description: "Never even heard about it." },
            { id: 2, name: "Beginner", description: "Only theoretical knowledge." },
            { id: 3, name: "Confirmed", description: "Experience in projects." },
            { id: 4, name: "Advanced", description: "Can coach others." },
            { id: 5, name: "Expert", description: "Is known in the community." }
        ];

        this.skillGroupList = [
            {id:1, name:"Testmanagement"},
            {id:2, name:"Agile methods"},
            {id:3, name:"Programming Languages"},
            {id:4, name:"Technology"},
            {id:5, name:"Frameworks"}
        ];
    }

    getSkillList() {
        return this.skillList;
    }

    getSkillGroupList() {
        return this.skillGroupList;
    }

    getSkillLevelList(){
        return this.skillLevelList
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