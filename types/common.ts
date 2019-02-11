// tslint:disable
export type Maybe<T> = T | null;

/** 新增一级选课课程的输入 */
export interface AddPrimaryCourseInput {
  /** 课程号 */
  No: string;
  /** 课序号 */
  index: string;
  /** 课程名 */
  name: string;
  /** 主讲教师 */
  teacher: TeacherInput;
  /** 开课院系 */
  department: string;
  /** 学分 */
  credit: number;
  /** 本科生课容量 */
  undergraduateCapacity?: Maybe<number>;
  /** 研究生课容量 */
  graduateCapacity?: Maybe<number>;
  /** 上课时间 */
  classTime?: Maybe<string>;
  /** 选课文字说明 */
  registrationDescription?: Maybe<string>;
  /** 课程特色 */
  features?: Maybe<string>;
  /** 年级 */
  grade?: Maybe<string>;
  /** 是否二级选课 */
  secondaryRequired: boolean;
  /** 重修是否占容量 */
  standaloneRehearsal: boolean;
  /** 是否选课时限制 */
  registrationRestriction: boolean;
  /** 本科文化素质课组 */
  culturalQualityCategory?: Maybe<string>;
}
/** 教师输入 */
export interface TeacherInput {
  /** 姓名 */
  name: string;
  /** 院系 */
  department?: Maybe<string>;
}
/** 新增二级选课课程的输入 */
export interface AddSecondaryCourseInput {
  /** 课程号 */
  No: string;
  /** 课序号 */
  index: string;
  /** 课程名 */
  name: string;
  /** 主讲教师 */
  teacher: TeacherInput;
  /** 开课院系 */
  department: string;
  /** 二级课序号 */
  secondaryIndex?: Maybe<string>;
  /** 排课模式 */
  arrangementMode?: Maybe<string>;
  /** 选课模式 */
  registrationMode?: Maybe<string>;
  /** 项目组数 */
  projectCount?: Maybe<number>;
  /** 必修项目数 */
  compulsoryProjectCount?: Maybe<number>;
}
/** 更新一级选课课程的输入 */
export interface UpdatePrimaryCourseInput {
  /** 课程号 */
  No?: Maybe<string>;
  /** 课序号 */
  index?: Maybe<string>;
  /** 课程名 */
  name?: Maybe<string>;
  /** 主讲教师 */
  teacher: TeacherInput;
  /** 开课院系 */
  department?: Maybe<string>;
  /** 学分 */
  credit?: Maybe<number>;
  /** 本科生课容量 */
  undergraduateCapacity?: Maybe<number>;
  /** 研究生课容量 */
  graduateCapacity?: Maybe<number>;
  /** 上课时间 */
  classTime?: Maybe<string>;
  /** 选课文字说明 */
  registrationDescription?: Maybe<string>;
  /** 课程特色 */
  features?: Maybe<string>;
  /** 年级 */
  grade?: Maybe<string>;
  /** 是否二级选课 */
  secondaryRequired?: Maybe<boolean>;
  /** 重修是否占容量 */
  standaloneRehearsal?: Maybe<boolean>;
  /** 是否选课时限制 */
  registrationRestriction?: Maybe<boolean>;
  /** 本科文化素质课组 */
  culturalQualityCategory?: Maybe<string>;
}
/** 更新二级选课课程的输入 */
export interface UpdateSecondaryCourseInput {
  /** 课程号 */
  No?: Maybe<string>;
  /** 课序号 */
  index?: Maybe<string>;
  /** 课程名 */
  name?: Maybe<string>;
  /** 主讲教师 */
  teacher: TeacherInput;
  /** 开课院系 */
  department?: Maybe<string>;
  /** 二级课序号 */
  secondaryIndex?: Maybe<string>;
  /** 排课模式 */
  arrangementMode?: Maybe<string>;
  /** 选课模式 */
  registrationMode?: Maybe<string>;
  /** 项目组数 */
  projectCount?: Maybe<number>;
  /** 必修项目数 */
  compulsoryProjectCount?: Maybe<number>;
}

export interface AdditionalEntityFields {
  path?: Maybe<string>;

  type?: Maybe<string>;
}
/** 课程类型 */
export enum CourseType {
  Primary = "PRIMARY",
  Secondary = "SECONDARY"
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** 返回满足条件的课程数组 */
  courses: (Maybe<CourseResult>)[];
  /** 返回对应 id 的课程 */
  course?: Maybe<CourseResult>;
}

/** 一级选课课程 */
export interface PrimaryCourse {
  /** 课程类型 */
  type: CourseType;
  /** ID */
  id: string;
  /** 课程号 */
  No: string;
  /** 课序号 */
  index: string;
  /** 课程名 */
  name: string;
  /** 主讲教师 */
  teacher: Teacher;
  /** 开课院系 */
  department: string;
  /** 学分 */
  credit: number;
  /** 本科生课容量 */
  undergraduateCapacity: number;
  /** 研究生课容量 */
  graduateCapacity: number;
  /** 上课时间 */
  classTime: string;
  /** 选课文字说明 */
  registrationDescription?: Maybe<string>;
  /** 课程特色 */
  features?: Maybe<string>;
  /** 年级 */
  grade?: Maybe<string>;
  /** 是否二级选课 */
  secondaryRequired: boolean;
  /** 重修是否占容量 */
  standaloneRehearsal: boolean;
  /** 是否选课时限制 */
  registrationRestriction: boolean;
  /** 本科文化素质课组 */
  culturalQualityCategory?: Maybe<string>;
}

/** 教师 */
export interface Teacher {
  /** 姓名 */
  name: string;
  /** 院系 */
  department?: Maybe<string>;
}

/** 二级选课课程 */
export interface SecondaryCourse {
  /** 课程类型 */
  type: CourseType;
  /** ID */
  id: string;
  /** 课程号 */
  No: string;
  /** 课序号 */
  index: string;
  /** 课程名 */
  name: string;
  /** 主讲教师 */
  teacher: Teacher;
  /** 开课院系 */
  department: string;
  /** 二级课序号 */
  secondaryIndex?: Maybe<string>;
  /** 排课模式 */
  arrangementMode?: Maybe<string>;
  /** 选课模式 */
  registrationMode?: Maybe<string>;
  /** 项目组数 */
  projectCount?: Maybe<number>;
  /** 必修项目数 */
  compulsoryProjectCount?: Maybe<number>;
}

export interface Mutation {
  /** 新增一级选课课程 */
  addPrimaryCourses?: Maybe<CourseMutationResponse>;
  /** 新增二级选课课程 */
  addSecondaryCourses?: Maybe<CourseMutationResponse>;
  /** 删除课程 */
  removeCourses?: Maybe<CourseMutationResponse>;
  /** 更新一级选课课程 */
  updatePrimaryCourse?: Maybe<CourseMutationResponse>;
  /** 更新二级选课课程 */
  updateSecondaryCourse?: Maybe<CourseMutationResponse>;
}

/** 修改课程的响应结果 */
export interface CourseMutationResponse {
  /** 是否修改成功 */
  success: boolean;
  /** 附加信息，包含可能的错误提示 */
  message?: Maybe<string>;
  /** 返回修改后的课程数组，也可能不返回任何结果 */
  courses?: Maybe<(Maybe<CourseResult>)[]>;
}

// ====================================================
// Arguments
// ====================================================

export interface CoursesQueryArgs {
  type?: Maybe<CourseType>;

  No?: Maybe<string>;

  index?: Maybe<string>;

  name?: Maybe<string>;

  teacher?: Maybe<string>;

  department?: Maybe<string>;
}
export interface CourseQueryArgs {
  id: string;
}
export interface AddPrimaryCoursesMutationArgs {
  courses: AddPrimaryCourseInput[];
}
export interface AddSecondaryCoursesMutationArgs {
  courses: AddSecondaryCourseInput[];
}
export interface RemoveCoursesMutationArgs {
  ids: string[];
}
export interface UpdatePrimaryCourseMutationArgs {
  id: string;

  update: UpdatePrimaryCourseInput;
}
export interface UpdateSecondaryCourseMutationArgs {
  id: string;

  update: UpdateSecondaryCourseInput;
}

// ====================================================
// Unions
// ====================================================

/** 返回的课程结果 */
export type CourseResult = PrimaryCourse | SecondaryCourse;
