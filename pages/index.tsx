import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

const HomePage: NextPage = () => {
  const [message, setMessage] = React.useState("");
  const [posts, setPosts] = React.useState<any[]>([]);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  React.useEffect(() => {
    setMessage("hogehoge");
    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>The Index Page</title>
        <meta name="description" content="this is the index page" />
      </Head>
      <p>
        <Link href="/about/">
          <a>to about page</a>
        </Link>
      </p>
      <p>
        <Link href="/carousel/">
          <a>to carousel page</a>
        </Link>
      </p>
      <p>
        <Link href="/reveal/">
          <a>to reveal page</a>
        </Link>
      </p>
      <h1>Next.js practice</h1>
      <p>message: {message}</p>
      <div>
        <h2>Posts</h2>
        <div>
          {posts.map((post, index) => (
            <div key={index}>{post.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
