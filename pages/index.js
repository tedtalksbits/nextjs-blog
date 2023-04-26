import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import { AppWrapper } from '../components/core';
import { getSortedPostsData } from '../lib/posts';
export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout home>
        <section className='p-9 bg-gray-100'>
          <h1 className='text-4xl font-bold text-gray-700'>Blog Posts</h1>
          <ul className='list-none mt-5'>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className='text-gray-400'>{date}</small>
                <small></small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
