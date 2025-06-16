import axios from "axios";

export default async function ({
  params,
}: {
  params: {
    post: string;
  };
}) {
  const postIds = params.post;

  const response = await axios.get("api.100xdevs.com/user");

  console.log(response);
  return (
    <div>
      Hi there
      {JSON.stringify(postIds)}
    </div>
  );
}
