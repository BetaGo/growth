import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    padding-bottom: 4vw;
  }
`;

const Poetry = styled.div`
  text-align: center;
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <Poetry>
                <p>我希望</p>
                <p>每一个时刻</p>
                <p>都像蜡笔一样美丽</p>
                <p>我希望</p>
                <p>能在心爱的白纸上画画</p>
                <p>画出笨拙的自由</p>
                <p>画下一只永远不会流泪的眼睛</p>
                <p>
                  ——{' '}
                  <a
                    href="https://baike.baidu.com/item/%E9%A1%BE%E5%9F%8E"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    顾城
                  </a>
                </p>
              </Poetry>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
