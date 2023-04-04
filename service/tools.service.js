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

export async function getProjectById(id) {
    return await client
        .db("ProjectTitles")
        .collection("titles")            
        .findOne({_id: new ObjectId(id)})
}

export async function updateProjectById(id, data) {
    return await client
        .db("ProjectTitles")
        .collection("titles")            
        .updateOne({_id: new ObjectId(id)}, { $set: data })

}

export async function createTask(projectAvailable, data) {
    return await client
        .db(`${projectAvailable.projectTitle}`)
        .collection("Tasks")
        .insertOne(data);
}