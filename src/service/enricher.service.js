import EmployeeService from "./employee.service";
import SkillService from "./skill.service";

class EnricherService {
    enrichAssignments = (assignments) => {
        let enrichedAssignments = []
        
        assignments.forEach((assignment) => {
            const name = EmployeeService.getName(assignment.employeeId);
            const skills = this.enrichSkills(assignment.simplifiedSkills)

            enrichedAssignments.push({id:assignment.id, name, skills});
        })

        return enrichedAssignments;
    }

    enrichSkills(simplifiedSkills) {
        const skills = [];

        simplifiedSkills.forEach((skill) => {
            const skillName = SkillService.getName(skill.skillId);
            skills.push({skillName, skillLevel:skill.skillLevel});
        });

        return skills;
    }
}

export default new EnricherService();