import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I am Mark. I'm a software engineer and a translator
          (English/Vietnamese). You can contact me on{" "}
          <a
            href="https://twitter.com/nnhungjs"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
