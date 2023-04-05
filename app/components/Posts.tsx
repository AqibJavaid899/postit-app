import { PostsType } from "../types/Posts";

interface Props {
  posts: PostsType[] | undefined;
}

const Posts = ({ posts }: Props) => {
  return <div>{JSON.stringify(posts)}</div>;
};

export default Posts;
