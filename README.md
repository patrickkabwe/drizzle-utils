# @kazion/drizzle-utils

This is a React package that provides a simple way to add Facebook login to your React application.

[![Release](https://github.com/patrickkabwe/drizzle-utils/actions/workflows/release.yml/badge.svg)](https://github.com/patrickkabwe/drizzle-utils/actions/workflows/release.yml)

### Installation

To install this package, run the following command in your terminal:

```bash
pnpm install @kazion/drizzle-utils
```

### Usage

To use this package in your application, follow the steps below:

#### Drizzle `or` Filter Query

```typescript
import { drizzleOrFilterQuery } from "@kazion/drizzle-utils";

// using the query builder
const [staff] = await db
  .update(staffs)
  .set(payload)
  .where(drizzleOrFilterQuery(staffs, { id }))
  .returning();

// using the query api
return db.query.staffs.findMany({
  where: drizzleOrFilterQuery(staffs, where),
});
```

#### Drizzle `and` Filter Query

```typescript
import { drizzleAndFilterQuery } from "@kazion/drizzle-utils";

// using the query builder
const [staff] = await db
  .update(staffs)
  .set(payload)
  .where(drizzleAndFilterQuery(staffs, { id }))
  .returning();

// using the query api
return db.query.staffs.findMany({
  where: drizzleAndFilterQuery(staffs, where),
});
```

### Testing

To run the tests for this package, use the following command:

```bash
pnpm test
```

### Contributing

If you want to contribute to this project, please follow the steps below:

1. Fork this repository.
2. Create a new branch: `git checkout -b your-branch-name`.
3. Make your changes and commit them: `git commit -m 'your message'`.
4. Push to the original branch: `git push origin your-branch-name`.
5. Create a pull request.

### License

This project is licensed under the MIT license.
