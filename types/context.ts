import { Db } from "mongodb";

// tslint:disable-next-line: interface-name
export default interface Context {
  db: Db;
}
