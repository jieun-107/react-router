import { useParams } from "react-router";

export default function Post() {
  const { id } = useParams();
  return (
    <>
      <h1>Post: {id}</h1>
    </>
  );
}
