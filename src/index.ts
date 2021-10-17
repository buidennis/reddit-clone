import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await mikroorm.init(microconfig);
    const post = orm.em.create(post, {title: 'first post'});

    // insert posts into db
    await orm.em.persistandflush(post);

};

main().catch(err => {
    console.error(err);
});