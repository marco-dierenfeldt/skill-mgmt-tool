class SkillAssignmentService {
    assignments = [
        {"employeeId":2,"simplifiedSkills":[{"skillId":3,"skillLevel":2},{"skillId":1,"skillLevel":4}],"id":0},
        {"employeeId":1,"simplifiedSkills":[{"skillId":3,"skillLevel":2}],"id":0},
        {"employeeId":3,"simplifiedSkills":[{"skillId":3,"skillLevel":2}],"id":0}
    ];

    addAssignment(assignment) {
        assignment.id = this.assignments.length;
        this.assignments.push(assignment);
    }

    getAssignments() {
        return this.assignments;
    }

    deleteAssignment(id) {
        const idx = this.assignments.findIndex((assignment) => assignment.id === id);
        this.assignments.splice(idx,1);
    }

}

export default new SkillAssignmentService();