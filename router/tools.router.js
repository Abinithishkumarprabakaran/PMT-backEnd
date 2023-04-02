import express from "express";
import { createProject } from "../service/tools.service.js";

const router = express.Router();

router.post("/projectCreation", async function (request, response) {
    const data = request.body
    console.log(data)
    const res = await createProject(data)

    response.send(res)
})

export default router