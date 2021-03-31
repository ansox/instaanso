/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

// High Order Component
export default function websitePageHOC(PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper
        {...pageWrapperProps}
        {...props.pageWrapperProps}
      >
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
