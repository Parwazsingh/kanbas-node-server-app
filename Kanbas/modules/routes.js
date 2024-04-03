import db from "../Database/index.js";



function ModuleRoutes(app) {


  var lessons = [{
    "_id": "L2001",
    "name": "LEARNING OBJECTIVES",
    "description": "A brief history of rocketry and space exploration.",
    "module": "M101"
  },
  {
    "_id": "L2002",
    "name": "Learn how to create user interfaces with HTML",
    "description": "Basic principles of rocket propulsion.",
    "module": "M101"
  },
  {
    "_id": "L203",
    "name": "Keep working on assignment 1",
    "description": "Overview of different types of rocket engines.",
    "module": "M101"
  },
  {
    "_id": "L204",
    "name": "Deploy the assignment to Netlify",
    "description": "Overview of different types of rocket engines.",
    "module": "M101"
  },
  {
    "_id": "L205",
    "name": "READING",
    "description": "Overview of different types of rocket engines.",
    "module": "M101"
  },
  {
    "_id": "L206",
    "name": "Full Stack Developer - Chapter 1 - Introduction",
    "description": "Overview of different types of rocket engines.",
    "module": "M101"
  },
  {
    "_id": "L207",
    "name": "Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML",
    "description": "Overview of different types of rocket engines.",
    "module": "M101"
  }];

    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
          (m) => m._id === mid);
        db.modules[moduleIndex] = {
          ...db.modules[moduleIndex],
          ...req.body
        };
        res.sendStatus(204);
      });
    
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
      });
    
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
          lessons: lessons
        };
        db.modules.push(newModule);
        res.send(newModule);
      });    
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules
      .filter((m) => m.course === cid);
    res.send(modules);
  });
}
export default ModuleRoutes;