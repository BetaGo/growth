import * as React from 'react';
import Helmet from 'react-helmet';

import favicon from '../../src/favicon.ico';

// @ts-ignore
interface IndexProps {
  className?: string;
}

const IndexLayout: React.FC<IndexProps> = (props) => {
  return (
    <div className={props.className}>
      <Helmet>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>
      {props.children}
    </div>
  );
};

export default IndexLayout;
