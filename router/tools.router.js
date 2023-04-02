import express from "express";
import { createProject, projectTitles, getProjectTitles, getAllProjectTitles } from "../service/tools.service.js";

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

router.get("/dashboard", async function (request, response) {

    const res = await getAllProjectTitles()

    response.send(res)
})

export default router