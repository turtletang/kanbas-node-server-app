import * as dao from "./dao.js";


export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentID", (req, res) => {
        const { assignmentID } = req.params;
        const status = dao.deleteAssignment(assignmentID);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentID", (req, res) => {
        const { assignmentID } = req.params;
        const assignmentUpdates = req.body;
        const newAssignment = dao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(newAssignment);
      });
}