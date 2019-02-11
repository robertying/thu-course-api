// tslint:disable
import { Maybe, PrimaryCourse, SecondaryCourse } from "./common";
import { ObjectID } from "mongodb";

export interface PrimaryCourseDbObject {
  type: string;
  No: string;
  index: string;
  name: string;
  teacher: TeacherDbObject;
  department: string;
  credit: number;
  undergraduateCapacity: number;
  graduateCapacity: number;
  classTime: string;
  registrationDescription: Maybe<string>;
  features: Maybe<string>;
  grade: Maybe<string>;
  secondaryRequired: boolean;
  standaloneRehearsal: boolean;
  registrationRestriction: boolean;
  culturalQualityCategory: Maybe<string>;
  _id?: ObjectID;
}

export interface TeacherDbObject {
  name: string;
}

export interface SecondaryCourseDbObject {
  type: string;
  No: string;
  index: string;
  name: string;
  teacher: TeacherDbObject;
  department: string;
  secondaryIndex: Maybe<string>;
  arrangementMode: Maybe<string>;
  registrationMode: Maybe<string>;
  projectCount: Maybe<number>;
  compulsoryProjectCount: Maybe<number>;
  _id?: ObjectID;
}
/** 返回的课程结果 */
export type CourseResult = PrimaryCourse | SecondaryCourse;
