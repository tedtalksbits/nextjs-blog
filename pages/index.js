import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import { AppWrapper } from '../components/core';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout home>
                <section>
                    <Link href='/posts/first-post'>Go to first post</Link>
                </section>
            </Layout>
        </>
    );
}
