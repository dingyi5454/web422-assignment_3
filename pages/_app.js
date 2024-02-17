import React from 'react';
import { SWRConfig } from 'swr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout'; 

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ dedupingInterval: 5000 }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
