import { type SQL, and, eq, or } from "drizzle-orm";
import type { PgColumn } from "drizzle-orm/pg-core";

export type Filter<T> = Record<keyof T, string>;

export const drizzleOrFilterQuery = <T>(table: T, filter?: Filter<T>) => {
  if (!filter) return;

  let sql: SQL<unknown> | undefined = undefined;

  for (const [key, value] of Object.entries(filter)) {
    const _key = table[key as keyof T] as PgColumn;
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

export const drizzleAndFilterQuery = <T>(table: T, filter?: Filter<T>) => {
  if (!filter) return;

  let sql: SQL<unknown> | undefined = undefined;

  for (const [key, value] of Object.entries(filter)) {
    const _key = table[key as keyof T] as PgColumn;
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
