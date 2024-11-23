import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((a) => a.course === courseId);
}
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}
export function deleteAssignment(assignmentID) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((a) => a._id !== assignmentID);
}
export function updateAssignment(assignmentID, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentID);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}  