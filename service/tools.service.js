import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function createProject(data) {
    return await client
        .db(`${data.projectTitle}`)
        .collection("Description")
        .insertOne(data);
}