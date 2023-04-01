import express from "express";

const router = express.Router();

router.post("/", async function (request, response) {
    const { projectTitle, projectDescription } = request.body
})

export default router