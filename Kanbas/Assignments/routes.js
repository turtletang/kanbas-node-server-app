import * as dao from "./dao.js";


export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const status = await dao.deleteAssignment(assignmentID);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const assignmentUpdates = req.body;
        const newAssignment = await dao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(newAssignment);
      });
}