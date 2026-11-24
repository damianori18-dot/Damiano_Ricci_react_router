import { useLoaderData } from "react-router";
export default function PostDetails() {
  const post = useLoaderData();
  return (
    <>
      <div className="container mt-5">
        <h1>Dettagli Post</h1>
        <h2>{post.id}</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </>
  )
}