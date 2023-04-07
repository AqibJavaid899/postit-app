import Image from "next/image";
import Link from "next/link";

interface Props {
  postId: string;
  postTitle: string;
  userName: string;
  userAvatar: string;
}

const Posts = ({ postId, postTitle, userName, userAvatar }: Props) => {
  return (
    <div className="my-8 p-8 bg-white rounded-lg">
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={userAvatar}
          alt="avatar"
        />
        <span className="font-semibold text-gray-700">{userName}</span>
      </div>

      <div className="my-8">
        <p className="break-all">{postTitle}</p>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <Link href={`/post/${postId}`}>
          <p className="font-bold text-gray-700 font-sm">Comments</p>
        </Link>
      </div>

      {/* {JSON.stringify(posts)} */}
    </div>
  );
};

export default Posts;
