import React from 'react';
import PropTypes from 'prop-types';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function DefaultLayout({ component }) {
  return (
    <React.Fragment>
      <Header />
      {component}
      <Footer />
    </React.Fragment>
  );
}

DefaultLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};
