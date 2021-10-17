"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main = async () => {
    const orm = await mikroorm.init(microconfig);
    const post = orm.em.create(post, { title: 'first post' });
    await orm.em.persistandflush(post);
};
main().catch(err => {
    console.error(err);
});
//# sourceMappingURL=index.js.map