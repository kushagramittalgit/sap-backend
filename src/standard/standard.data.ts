 import { Common } from "../common";
import { Standard } from "./schemas/standard.schema";
import { StandardType } from "./types/standard.type";

// // Get class by  ID
const getClassByID = async (classId: string) => {
    const connection = await Common.Mongo.getConnection();
    return await Standard.findById(classId);
  };
  
  const createUser = async (classId: StandardType) => {
    const newUser = new Standard(classId);
    const connection = await Common.Mongo.getConnection();
    return newUser.save();
  };
  
  const getUsers = async () => {
    const connection = await Common.Mongo.getConnection();
    return await Standard.find();
  };
  
  const deleteClass = async (classId: string) => {
    const connection = await Common.Mongo.getConnection();
    return await Standard.findByIdAndDelete(classId);
  };
  

  export const ClassData = {
    getClassByID,
    createUser,
    getUsers,
    deleteClass
  };
  