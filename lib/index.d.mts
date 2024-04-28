import { SQL } from 'drizzle-orm';

type Filter<T> = Record<keyof T, string>;
declare const drizzleOrFilterQuery: <T>(table: T, filter?: Filter<T>) => SQL<unknown> | undefined;
declare const drizzleAndFilterQuery: <T>(table: T, filter?: Filter<T>) => SQL<unknown> | undefined;

export { type Filter, drizzleAndFilterQuery, drizzleOrFilterQuery };
