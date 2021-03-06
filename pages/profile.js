import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Profile() {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>Profile - {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
