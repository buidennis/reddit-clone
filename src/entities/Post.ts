import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
  @PrimaryKey()
  id!: number; // string is also supported
  
  // @Property indicates a database column
  @Property({type: "date"})
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updateAt = new Date();

  @Property({type: "text"})
  title!: string;
}