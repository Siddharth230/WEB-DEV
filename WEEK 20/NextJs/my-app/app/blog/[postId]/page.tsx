import axios from "axios";

export default async function BlogPage({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const postId = (await params).postId;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = response.data;

  return (
    <div>
      Blog page - <b>{postId}</b>
      <br />
      Title -{post.title}
      <br />
      Description - {post.body}
    </div>
  );
}
