import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    // Connection to the Database
    const orm = await MikroORM.init(microConfig);

    // Generate migrations with current schema differences
    // Default: Migrations executed inside transactions and wrapped in master transaction
    //          If one migration fails, rollback occurs
    // Overwrite Default: Implementing the isTransactional(): boolean method.

    // Initialization: Initial migration can be created only if there are no migrations previously generated or executed.
    // npx mikro-orm migration:create --initial
    orm.getMigrator().up;

    // Post -> Create & Insert into the PostgresSQL Database
    // const post = orm.em.create(Post, {title: 'first post'});
    // await orm.em.persistAndFlush(post);

    // const posts = await orm.em.find(Post, {});
    // console.log(posts);

};

main().catch(err => {
    console.error(err);
});