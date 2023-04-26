import Link from 'next/link';
import { AppWrapper } from '../../components/core';
import Layout from '../../components/layout/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ data }) {
  return (
    <Layout>
      <AppWrapper>
        <h1 className='text-4xl font-semibold'>{data.title}</h1>
        <small className='text-gray-400'>{data.date}</small>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }}></div>
        <Link href='/'>&larr;Back to home</Link>
      </AppWrapper>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const data = await getPostData(params.id);

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
