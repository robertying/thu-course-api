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

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    /** 返回满足条件的课程数组 */
    courses?: CoursesResolver<(Maybe<CourseResult>)[], TypeParent, Context>;
    /** 返回对应 id 的课程 */
    course?: CourseResolver<Maybe<CourseResult>, TypeParent, Context>;
  }

  export type CoursesResolver<
    R = (Maybe<CourseResult>)[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CoursesArgs>;
  export interface CoursesArgs {
    type?: Maybe<CourseType>;

    No?: Maybe<string>;

    index?: Maybe<string>;

    name?: Maybe<string>;

    teacher?: Maybe<string>;

    department?: Maybe<string>;
  }

  export type CourseResolver<
    R = Maybe<CourseResult>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CourseArgs>;
  export interface CourseArgs {
    id: string;
  }
}
/** 一级选课课程 */
export namespace PrimaryCourseResolvers {
  export interface Resolvers<Context = {}, TypeParent = PrimaryCourse> {
    /** 课程类型 */
    type?: TypeResolver<CourseType, TypeParent, Context>;
    /** ID */
    id?: IdResolver<string, TypeParent, Context>;
    /** 课程号 */
    No?: NoResolver<string, TypeParent, Context>;
    /** 课序号 */
    index?: IndexResolver<string, TypeParent, Context>;
    /** 课程名 */
    name?: NameResolver<string, TypeParent, Context>;
    /** 主讲教师 */
    teacher?: TeacherResolver<Teacher, TypeParent, Context>;
    /** 开课院系 */
    department?: DepartmentResolver<string, TypeParent, Context>;
    /** 学分 */
    credit?: CreditResolver<number, TypeParent, Context>;
    /** 本科生课容量 */
    undergraduateCapacity?: UndergraduateCapacityResolver<
      number,
      TypeParent,
      Context
    >;
    /** 研究生课容量 */
    graduateCapacity?: GraduateCapacityResolver<number, TypeParent, Context>;
    /** 上课时间 */
    classTime?: ClassTimeResolver<string, TypeParent, Context>;
    /** 选课文字说明 */
    registrationDescription?: RegistrationDescriptionResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;
    /** 课程特色 */
    features?: FeaturesResolver<Maybe<string>, TypeParent, Context>;
    /** 年级 */
    grade?: GradeResolver<Maybe<string>, TypeParent, Context>;
    /** 是否二级选课 */
    secondaryRequired?: SecondaryRequiredResolver<boolean, TypeParent, Context>;
    /** 重修是否占容量 */
    standaloneRehearsal?: StandaloneRehearsalResolver<
      boolean,
      TypeParent,
      Context
    >;
    /** 是否选课时限制 */
    registrationRestriction?: RegistrationRestrictionResolver<
      boolean,
      TypeParent,
      Context
    >;
    /** 本科文化素质课组 */
    culturalQualityCategory?: CulturalQualityCategoryResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;
  }

  export type TypeResolver<
    R = CourseType,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = string,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NoResolver<
    R = string,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IndexResolver<
    R = string,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TeacherResolver<
    R = Teacher,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DepartmentResolver<
    R = string,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CreditResolver<
    R = number,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UndergraduateCapacityResolver<
    R = number,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type GraduateCapacityResolver<
    R = number,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ClassTimeResolver<
    R = string,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type RegistrationDescriptionResolver<
    R = Maybe<string>,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type FeaturesResolver<
    R = Maybe<string>,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type GradeResolver<
    R = Maybe<string>,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SecondaryRequiredResolver<
    R = boolean,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StandaloneRehearsalResolver<
    R = boolean,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type RegistrationRestrictionResolver<
    R = boolean,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CulturalQualityCategoryResolver<
    R = Maybe<string>,
    Parent = PrimaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}
/** 教师 */
export namespace TeacherResolvers {
  export interface Resolvers<Context = {}, TypeParent = Teacher> {
    /** 姓名 */
    name?: NameResolver<string, TypeParent, Context>;
    /** 院系 */
    department?: DepartmentResolver<Maybe<string>, TypeParent, Context>;
  }

  export type NameResolver<
    R = string,
    Parent = Teacher,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DepartmentResolver<
    R = Maybe<string>,
    Parent = Teacher,
    Context = {}
  > = Resolver<R, Parent, Context>;
}
/** 二级选课课程 */
export namespace SecondaryCourseResolvers {
  export interface Resolvers<Context = {}, TypeParent = SecondaryCourse> {
    /** 课程类型 */
    type?: TypeResolver<CourseType, TypeParent, Context>;
    /** ID */
    id?: IdResolver<string, TypeParent, Context>;
    /** 课程号 */
    No?: NoResolver<string, TypeParent, Context>;
    /** 课序号 */
    index?: IndexResolver<string, TypeParent, Context>;
    /** 课程名 */
    name?: NameResolver<string, TypeParent, Context>;
    /** 主讲教师 */
    teacher?: TeacherResolver<Teacher, TypeParent, Context>;
    /** 开课院系 */
    department?: DepartmentResolver<string, TypeParent, Context>;
    /** 二级课序号 */
    secondaryIndex?: SecondaryIndexResolver<Maybe<string>, TypeParent, Context>;
    /** 排课模式 */
    arrangementMode?: ArrangementModeResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;
    /** 选课模式 */
    registrationMode?: RegistrationModeResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;
    /** 项目组数 */
    projectCount?: ProjectCountResolver<Maybe<number>, TypeParent, Context>;
    /** 必修项目数 */
    compulsoryProjectCount?: CompulsoryProjectCountResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;
  }

  export type TypeResolver<
    R = CourseType,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = string,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NoResolver<
    R = string,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IndexResolver<
    R = string,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TeacherResolver<
    R = Teacher,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DepartmentResolver<
    R = string,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SecondaryIndexResolver<
    R = Maybe<string>,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ArrangementModeResolver<
    R = Maybe<string>,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type RegistrationModeResolver<
    R = Maybe<string>,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ProjectCountResolver<
    R = Maybe<number>,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CompulsoryProjectCountResolver<
    R = Maybe<number>,
    Parent = SecondaryCourse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    /** 新增一级选课课程 */
    addPrimaryCourses?: AddPrimaryCoursesResolver<
      Maybe<CourseMutationResponse>,
      TypeParent,
      Context
    >;
    /** 新增二级选课课程 */
    addSecondaryCourses?: AddSecondaryCoursesResolver<
      Maybe<CourseMutationResponse>,
      TypeParent,
      Context
    >;
    /** 删除课程 */
    removeCourses?: RemoveCoursesResolver<
      Maybe<CourseMutationResponse>,
      TypeParent,
      Context
    >;
    /** 更新一级选课课程 */
    updatePrimaryCourse?: UpdatePrimaryCourseResolver<
      Maybe<CourseMutationResponse>,
      TypeParent,
      Context
    >;
    /** 更新二级选课课程 */
    updateSecondaryCourse?: UpdateSecondaryCourseResolver<
      Maybe<CourseMutationResponse>,
      TypeParent,
      Context
    >;
  }

  export type AddPrimaryCoursesResolver<
    R = Maybe<CourseMutationResponse>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, AddPrimaryCoursesArgs>;
  export interface AddPrimaryCoursesArgs {
    courses: AddPrimaryCourseInput[];
  }

  export type AddSecondaryCoursesResolver<
    R = Maybe<CourseMutationResponse>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, AddSecondaryCoursesArgs>;
  export interface AddSecondaryCoursesArgs {
    courses: AddSecondaryCourseInput[];
  }

  export type RemoveCoursesResolver<
    R = Maybe<CourseMutationResponse>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, RemoveCoursesArgs>;
  export interface RemoveCoursesArgs {
    ids: string[];
  }

  export type UpdatePrimaryCourseResolver<
    R = Maybe<CourseMutationResponse>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdatePrimaryCourseArgs>;
  export interface UpdatePrimaryCourseArgs {
    id: string;

    update: UpdatePrimaryCourseInput;
  }

  export type UpdateSecondaryCourseResolver<
    R = Maybe<CourseMutationResponse>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateSecondaryCourseArgs>;
  export interface UpdateSecondaryCourseArgs {
    id: string;

    update: UpdateSecondaryCourseInput;
  }
}
/** 修改课程的响应结果 */
export namespace CourseMutationResponseResolvers {
  export interface Resolvers<
    Context = {},
    TypeParent = CourseMutationResponse
  > {
    /** 是否修改成功 */
    success?: SuccessResolver<boolean, TypeParent, Context>;
    /** 附加信息，包含可能的错误提示 */
    message?: MessageResolver<Maybe<string>, TypeParent, Context>;
    /** 返回修改后的课程数组，也可能不返回任何结果 */
    courses?: CoursesResolver<
      Maybe<(Maybe<CourseResult>)[]>,
      TypeParent,
      Context
    >;
  }

  export type SuccessResolver<
    R = boolean,
    Parent = CourseMutationResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = Maybe<string>,
    Parent = CourseMutationResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CoursesResolver<
    R = Maybe<(Maybe<CourseResult>)[]>,
    Parent = CourseMutationResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

/** 返回的课程结果 */
export namespace CourseResultResolvers {
  export interface Resolvers {
    __resolveType: ResolveType;
  }
  export type ResolveType<
    R = "PrimaryCourse" | "SecondaryCourse",
    Parent = PrimaryCourse | SecondaryCourse,
    Context = {}
  > = TypeResolveFn<R, Parent, Context>;
}

export type UnionDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  UnionDirectiveArgs,
  {}
>;
export interface UnionDirectiveArgs {
  discriminatorField?: Maybe<string>;
}

export type AbstractEntityDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  AbstractEntityDirectiveArgs,
  {}
>;
export interface AbstractEntityDirectiveArgs {
  discriminatorField: string;
}

export type EntityDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  EntityDirectiveArgs,
  {}
>;
export interface EntityDirectiveArgs {
  embedded?: Maybe<boolean>;

  additionalFields?: Maybe<(Maybe<AdditionalEntityFields>)[]>;
}

export type ColumnDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  ColumnDirectiveArgs,
  {}
>;
export interface ColumnDirectiveArgs {
  name?: Maybe<string>;

  overrideType?: Maybe<string>;

  overrideIsArray?: Maybe<boolean>;
}

export type IdDirectiveResolver<Result> = DirectiveResolverFn<Result, {}, {}>;
export type LinkDirectiveResolver<Result> = DirectiveResolverFn<Result, {}, {}>;
export type EmbeddedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  {},
  {}
>;
export type MapDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  MapDirectiveArgs,
  {}
>;
export interface MapDirectiveArgs {
  path: string;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers.Resolvers<Context>;
  PrimaryCourse?: PrimaryCourseResolvers.Resolvers<Context>;
  Teacher?: TeacherResolvers.Resolvers<Context>;
  SecondaryCourse?: SecondaryCourseResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  CourseMutationResponse?: CourseMutationResponseResolvers.Resolvers<Context>;
  CourseResult?: CourseResultResolvers.Resolvers;
}

export interface IDirectiveResolvers<Result> {
  union?: UnionDirectiveResolver<Result>;
  abstractEntity?: AbstractEntityDirectiveResolver<Result>;
  entity?: EntityDirectiveResolver<Result>;
  column?: ColumnDirectiveResolver<Result>;
  id?: IdDirectiveResolver<Result>;
  link?: LinkDirectiveResolver<Result>;
  embedded?: EmbeddedDirectiveResolver<Result>;
  map?: MapDirectiveResolver<Result>;
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
