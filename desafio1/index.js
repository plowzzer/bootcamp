const express = require("express");
const server = express();

server.use(express.json());

const projects = [];
let requestsCount = 0;

// Middleware Requests
server.use((req, res, next) => {
  requestsCount++;
  console.log(
    `Method: ${req.method} - path: ${req.path} - Requests: ${requestsCount}`
  );
  return next();
});

// Middleware
function checkProjectId(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p, id == id);

  if (!project) {
    return res.status(400).json({ error: `Project ${id} not found` });
  }
  return next();
}

server.get("/projects/", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", checkProjectId, (req, res) => {
  const { id } = req.params;
  projects.forEach(project => {
    if (project.id === id) {
      return res.json(project);
    }
  });
  return;
});

server.post("/projects/", (req, res) => {
  const { id, title, tasks } = req.body;

  projects.push({
    id,
    title,
    tasks
  });

  return res.json(projects);
});

server.put("/projects/:id", checkProjectId, (req, res) => {
  const { id } = req.params;
  const { title, tasks } = req.body;

  const project = projects.find(p => p.id == id);
  project.title = title;
  project.tasks = tasks;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectId, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.find(p => p.id == id);
  projects.splice(projectIndex, 1);

  return res.send();
});

server.post("/projects/:id/tasks", checkProjectId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);
