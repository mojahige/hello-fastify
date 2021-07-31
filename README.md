# Hello fastify

## fastify
- https://www.fastify.io/
- https://github.com/fastify/fastify

なんかかっこいい。

### fastify REST API Example

https://github.com/prisma/prisma-examples/tree/bf1968aae02e614400a5c8185b90ac6db2fb3a2b/typescript/rest-fastify

## Start

Install dependencies 👍

```
yarn install
```

Create database

```
prisma migrate dev --name init
```

Seed the database

```
yarn prisma db seed --preview-feature
```

Start server

```
yarn dev
```