import React from 'react';
import { AppGrid } from '../core/appGrid';
import Head from 'next/head';
import Navigation from '../ui/Navigation';
import Image from 'next/image';
import { AppWrapper } from '../core';
import UserInfoHeader from '../ui/UserInfoHeader';
const Layout = ({ children, home }) => {
    return (
        <>
            <Head>
                <title>Blogs</title>
                <link rel='icon' href='/favicon.ico' />
                <link rel='stylesheet' href='https://tedtalksbits.github.io/styles/styles.css'></link>
            </Head>

            <AppGrid>
                <Navigation />

                <section>
                    {home ? (
                        <UserInfoHeader
                            fullName='Tedane Blake'
                            username='@tedtalksbits'
                            avatarImage='https://pbs.twimg.com/profile_images/1617750136557391873/7zLiqQIr_400x400.png'
                            headerImage='https://pbs.twimg.com/profile_banners/484391040/1643372433/1500x500'
                            description='He/Him Full-Stack Software Engineer. #100devs All things React ⚛️ 💻'
                        />
                    ) : (
                        <UserInfoHeader
                            fullName='Tedane Blake'
                            username='@tedtalksbits'
                            avatarImage='https://pbs.twimg.com/profile_images/1617750136557391873/7zLiqQIr_400x400.png'
                            headerImage='https://pbs.twimg.com/profile_banners/484391040/1643372433/1500x500'
                            size='sm'
                        />
                    )}
                    {children}
                </section>
            </AppGrid>
        </>
    );
};

export default Layout;
