'use client'

import { Provider } from './(state)/Provider';
import Layout from './(Layout)/Layout';

const AppLayout = () => {


  return (
    <Provider>
      <Layout>
      </Layout>
    </Provider>
  );
}

export default AppLayout;
