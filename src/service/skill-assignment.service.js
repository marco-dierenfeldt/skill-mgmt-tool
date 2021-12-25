class SkillAssignmentService {
    assignments = [];

    addAssignment(assignment) {
        assignment.id = this.assignments.length;
        this.assignments.push(assignment);
    }

    getAssignments() {
        return this.assignments;
    }

}

export default new SkillAssignmentService();