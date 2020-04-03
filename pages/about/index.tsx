import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import * as React from "react";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The About page</title>
        <meta name="description" content="this is the about page" />
      </Head>
      <h1>This is About page</h1>
      <p>
        <Link href="/">
          <a>return to top</a>
        </Link>
      </p>
    </div>
  );
};

export default About;
