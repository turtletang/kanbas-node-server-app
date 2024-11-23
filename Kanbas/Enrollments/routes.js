import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.put("/api/enroll/:courseID/:userID", (req, res) => {
        console.log("Reached Enrollment Routes.js enroll."); // Debugging
        const { courseID, userID } = req.params;
        const status = dao.enrollUserInCourse(userID, courseID);
        res.send(status);
    });
    app.delete("/api/enroll/:courseID/:userID", (req, res) => {
        const { courseID, userID } = req.params;
        const status = dao.unenrollUserInCourse(userID, courseID);
        res.send(status);
    });
}