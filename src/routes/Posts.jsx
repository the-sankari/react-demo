import PostCard from "../components/PostCard";

const Posts = ({ posts }) => {
  return (
    <>
      <h2>Posts</h2>
      <div className="boxes">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
