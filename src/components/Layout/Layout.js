import Header from '@/components/Header/Header';
import Preloader from '@/components/Preloader';
import { useRootContext } from '@/context/context';
import useScroll from '@/hooks/useScroll';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Funding from '../Funding/Funding';
import MobileMenu from '../MobileMenu/MobileMenu';
import Search from '../Search/Search';
import SiteFooter from '../SiteFooter/SiteFooter';

const Layout = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);
  const { menuStatus } = useRootContext();
  const { scrollTop } = useScroll(70);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Removed pageTitle causing an error */}
        {/* Warning: A title element received an array with more than 1 element as children. In browsers
         title Elements can only have Text Nodes as children. If the children being rendered output
          more than a single text node in aggregate the browser will display markup and comments
         as text in the title and hydration will likely fail and fall back to client rendering */}
        {/* <title>{pageTitle} Rights2LIFE</title> */}

        <title>Rights2LIFE</title>
      </Head>
      <Preloader loading={loading} />
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className="page-wrapper"
      >
        <Header pageTitle={pageTitle} />
        {children}
        <SiteFooter />
      </main>
      {menuStatus && <MobileMenu />}
      <Search />
      {scrollTop && (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          style={{ cursor: 'pointer' }}
          className="scroll-to-target scroll-to-top fadeIn animated"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layout;
