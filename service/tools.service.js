import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function createProject(data) {
    return await client
        .db(`${data.projectTitle}`)
        .collection("Description")
        .insertOne(data);
}

export async function projectTitles(data) {
    return await client
        .db("ProjectTitles")
        .collection("titles")
        .insertOne(data)
}

export async function getProjectTitles(projectTitle) {
    return await client
        .db("ProjectTitles")
        .collection("titles")            
        .findOne({projectTitle: projectTitle})
}

export async function getAllProjectTitles() {
    return await client
        .db("ProjectTitles")
        .collection("titles")            
        .find({})
        .toArray();
}