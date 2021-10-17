import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";


// Absolute path to the dirname
console.log( 'dirname: ', __dirname);
export default {
    migrations: {
        // makes sure we are using the right path
        // creates an absolute path
        path: path.join( __dirname, "./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[jt]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'lireddit',
    user: 'redditadmin',
    password: 'redditadmin',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
/**
 * as Parameters<typeof MikroORM.init>[0];
 * TLDR: Gets the type that init expects for it's parameter
 **/
// MikroORM is the function
// Getting the type of the function
// Getting te parameters of the return of typeof MikroORM