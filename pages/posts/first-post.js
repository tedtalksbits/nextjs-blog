import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Layout from '../../components/layout/layout';

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post 🔎</title>
                <link rel='icon' href='/favicon.ico' />
                <Script
                    src='https://connect.facebook.net/en_US/sdk.js'
                    strategy='lazyOnload'
                    onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
                />
            </Head>
            <div>FirstPost</div>
            <Link href='/'>Back to home</Link>
        </Layout>
    );
};

export default FirstPost;
