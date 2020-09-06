import { ObjectType, Field } from "type-graphql";
import { Entity, Column, BaseEntity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { Post } from "./Posts";

@ObjectType()
@Entity()
export class Upvote extends BaseEntity {
  @Field()
  @Column({ type: "int" })
  value: number;

  @Field()
  @PrimaryColumn()
  userId: Number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.upvotes)
  user: User;

  @Field()
  @PrimaryColumn()
  postId: Number;

  @Field(() => Post)
  @ManyToOne(() => Post, (posts) => posts.upvotes)
  post: Post;
}
