const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());

const task = [
  { id: 1, taskName: "sleep", isCompleted: false },
  { id: 2, taskName: "code", isCompleted: false },
];

app.get("/task", (req, res) => {
  res.status(200);
  res.json(task);
});


app.get("/task/:taskName", (req, res) => {
    const {taskName} = req.params;
    const found = task.find((ele) => {
        return ele.taskName === taskName;
    })
    if (found) {
        res.status(200);
        res.json(found);
    } else {
    res.status(404);
    res.json("this task not exists");
    }
  });
  


app.post("/create", (req, res) => {
    const {id ,taskName , isCompleted, } = req.body;
    task.push({id , taskName , isCompleted});
    res.status(201);
    res.json({id, taskName, isCompleted});
  });



app.delete("/delete", (req, res) => {
    const { id, taskName, isCompleted } = req.body;
    for (let i = 0; i < task.length; i++) {
      if (task[i].id === id) {
        task.splice(i, 1);
      }
    }
    res.json(task);
  });
  

  app.put("/Update", (req, res) => {
    const { id, taskName, isCompleted } = req.body;
    for (let i = 0; i < task.length; i++) {
      if (task[i].id === id) {
        task[i].isCompleted = true;
      }
    }
    res.json(task);
  });



app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
