
import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import config from 'src/config';

import { Layout } from 'react-mdl';

import NavBar from './NavBarContainer';
import Footer from './Footer';

const AppLayout = ({ children }) => (
  <Layout fixedHeader>
    <Helmet {...config.app.head} />
    <NavBar />
    {children}
    <Footer />
  </Layout>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

AppLayout.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default AppLayout;
