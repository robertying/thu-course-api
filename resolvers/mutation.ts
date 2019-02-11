import * as assert from "assert";
import { ObjectID } from "mongodb";
import { CourseType } from "../types/common";
import Context from "../types/context";
import { MutationResolvers } from "../types/resolvers";

const mutationResolvers: MutationResolvers.Resolvers<Context> = {
  addPrimaryCourses: async (parent, args, context) => {
    const db = context.db;
    const docs = args.courses.map(course => {
      return { ...course, type: CourseType.Primary };
    });
    const r = await db.collection("courses").insertMany(docs);

    try {
      assert.strictEqual(r.insertedCount, args.courses.length);
      return {
        success: true,
        courses: r.ops.map(op => {
          op.id = op._id;
          return op;
        })
      };
    } catch (err) {
      return {
        success: false,
        message: err.message
      };
    }
  },
  addSecondaryCourses: async (parent, args, context) => {
    const db = context.db;
    const docs = args.courses.map(course => {
      return { ...course, type: CourseType.Secondary };
    });
    const r = await db.collection("courses").insertMany(docs);

    try {
      assert.strictEqual(r.insertedCount, args.courses.length);
      return {
        success: true,
        courses: r.ops.map(op => {
          op.id = op._id;
          return op;
        })
      };
    } catch (err) {
      return {
        success: false,
        message: err.message
      };
    }
  },
  removeCourses: async (parent, args, context) => {
    const db = context.db;
    const ids = args.ids.map(id => new ObjectID(id));
    const r = await db.collection("courses").deleteMany({ _id: { $in: ids } });

    return {
      success: true,
      message: `Deleted ${r.deletedCount} course(s)`
    };
  },
  updatePrimaryCourse: async (parent, args, context) => {
    const db = context.db;
    const update = args.update.teacher
      ? { ...args.update, teacher: { name: args.update.teacher } }
      : args.update;
    const r = await db
      .collection("courses")
      .findOneAndUpdate({ _id: new ObjectID(args.id) }, update);

    try {
      assert.strictEqual(r.ok, 1);
      return {
        success: true,
        courses: [r.value]
      };
    } catch (err) {
      return {
        success: false,
        message: err.message
      };
    }
  },
  updateSecondaryCourse: async (parent, args, context) => {
    const db = context.db;
    const update = args.update.teacher
      ? { ...args.update, teacher: { name: args.update.teacher } }
      : args.update;
    const r = await db
      .collection("courses")
      .findOneAndUpdate({ _id: new ObjectID(args.id) }, update);

    try {
      assert.strictEqual(r.ok, 1);
      return {
        success: true,
        courses: [r.value]
      };
    } catch (err) {
      return {
        success: false,
        message: err.message
      };
    }
  }
};

export default {
  Mutation: mutationResolvers
};
