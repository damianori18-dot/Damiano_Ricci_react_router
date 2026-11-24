import { Link, useLoaderData } from "react-router";
import List from "../components/List";
export default function Posts() {
  const posts = useLoaderData();
  return (
    <>
      <h1 className="text-center crimson-text-bold color-s mt-3">Posts</h1>
      <List flexDirection="flex-column mt-3">

        {posts.map((post) => {
          return <List.Items key={post.id}>
            <h3>{post.title}</h3>
            <Link to={`/posts/${post.id}`}>Maggiori info...</Link>
          </List.Items>
        })}

      </List>
    </>
  )
}