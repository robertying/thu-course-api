import { ObjectID } from "mongodb";
import Context from "../types/context";
import { QueryResolvers } from "../types/resolvers";

const queryResolvers: QueryResolvers.Resolvers<Context> = {
  courses: async (parent, args, context) => {
    const db = context.db;
    const query = args.teacher
      ? { ...args, teacher: { name: args.teacher } }
      : args;
    const r = await db.collection("courses").find(query);
    return r.toArray();
  },
  course: async (parent, args, context) => {
    const db = context.db;
    const r = await db
      .collection("courses")
      .find({ _id: new ObjectID(args.id) });
    return (await r.toArray())[0];
  }
};

export default {
  Query: queryResolvers
};
