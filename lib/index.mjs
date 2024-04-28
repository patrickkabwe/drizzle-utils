// src/operators.ts
import { and, eq, or } from "drizzle-orm";
var drizzleOrFilterQuery = (table, filter) => {
  if (!filter)
    return;
  let sql = void 0;
  for (const [key, value] of Object.entries(filter)) {
    const _key = table[key];
    if (value) {
      if (!sql) {
        sql = eq(_key, value);
      } else {
        sql = or(sql, eq(_key, value));
      }
    }
  }
  return sql;
};
var drizzleAndFilterQuery = (table, filter) => {
  if (!filter)
    return;
  let sql = void 0;
  for (const [key, value] of Object.entries(filter)) {
    const _key = table[key];
    if (value) {
      if (!sql) {
        sql = eq(_key, value);
      } else {
        sql = and(sql, eq(_key, value));
      }
    }
  }
  return sql;
};
export {
  drizzleAndFilterQuery,
  drizzleOrFilterQuery
};
