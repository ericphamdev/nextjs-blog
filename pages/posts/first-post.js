import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Next.js Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
