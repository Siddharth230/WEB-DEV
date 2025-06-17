import axios from "axios";

export default async function Profile() {
  // const res = await axios.get("http://localhost:3000/api/profile", {
  //   headers: {
  //     authorization: localStorage.getItem("token"),
  //   },
  // });

  const profilePicture = "https://cat.png";

  return <div>{profilePicture}</div>;
}
