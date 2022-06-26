// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Answers, Options, Questions, User } = initSchema(schema);

export {
  Answers,
  Options,
  Questions,
  User
};