import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AnswersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Answers {
  readonly id: string;
  readonly answer1?: string | null;
  readonly answer2?: string | null;
  readonly answer3?: string | null;
  readonly answer4?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Answers, AnswersMetaData>);
  static copyOf(source: Answers, mutator: (draft: MutableModel<Answers, AnswersMetaData>) => MutableModel<Answers, AnswersMetaData> | void): Answers;
}

export declare class Options {
  readonly id: string;
  readonly option1?: string | null;
  readonly option2?: string | null;
  readonly option3?: string | null;
  readonly option4?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Options, OptionsMetaData>);
  static copyOf(source: Options, mutator: (draft: MutableModel<Options, OptionsMetaData>) => MutableModel<Options, OptionsMetaData> | void): Options;
}

export declare class Questions {
  readonly id: string;
  readonly question?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Questions, QuestionsMetaData>);
  static copyOf(source: Questions, mutator: (draft: MutableModel<Questions, QuestionsMetaData>) => MutableModel<Questions, QuestionsMetaData> | void): Questions;
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}