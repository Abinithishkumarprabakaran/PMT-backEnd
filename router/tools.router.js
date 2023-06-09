import express from "express";
import { createProject, 
    projectTitles, 
    getProjectTitles, 
    getAllProjectTitles, 
    getProjectById,
    updateProjectById,
    createTask } from "../service/tools.service.js";

const router = express.Router();

router.post("/projectCreation", async function (request, response) {
    const {projectTitle, projectDescription} = request.body

    const ProjectFromDB = await getProjectTitles(projectTitle);
    console.log(ProjectFromDB)

    if(ProjectFromDB) {
        response.status(404).send({message: "Project Already Exists"})
    }
    else{
        const res = await projectTitles(request.body)
        response.send(res)
    }
})

router.get("/showprojects", async function (request, response) {

    const res = await getAllProjectTitles()

    response.send(res)
})

router.get("/showprojects/:id", async function (request, response) {
    const {id} = request.params

    const result = await getProjectById(id)

    result ? response.send(result) : response.status(404).send({message: "Project Not Found"})
})

router.put("/updateProject/:id", async function (request, response) {

    const { id } = request.params
    const data = request.body
    
    const result = await updateProjectById(id, data)

    response.send(result)
})

router.post("/taskCreation/:id", async function (request, response) {

    const { id } = request.params

    const data = request.body

    const projectAvailable = await getProjectById(id)

    if(!projectAvailable){
        response.status(404).send({ message: "Create a Project"})
    }
    else {
        // const { projectTitle } = projectAvailable
        projectAvailable.projectTitle = projectAvailable.projectTitle.replace(/\s/g, "");
    
        const result =  await createTask(projectAvailable, data)
        response.send(result)
    }
})

export default router