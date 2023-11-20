import { commentType } from "@/types";
import { getPostComments } from "../lib/data";
import Comment from "./comment";

export default async function Comments({ post_id }: { post_id: string }) {
  const commentsData: commentType[] = await getPostComments({
    post_id: post_id,
  });

  return (
    <ul className="flex flex-col gap-2">
      {commentsData.length == 0
        ? commentsData.map((data) => {
            return <Comment comment={data} key={data.id} />;
          })
        : "no comments"}
    </ul>
  );
}
