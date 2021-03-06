import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Foot from '../Foot';
import Head from '../Head';
import './Layout.css';

const Layout = ({ children, pathname }) => (
  <div className="appContentWrapper">
    <div className="appHeader">
      { (pathname !== '/login') && <Head /> }
    </div>
    <div className="appContent">
      {children}
    </div>
    {
      (pathname === '/') && (
      <Link to="/share">
        <FloatingActionButton backgroundColor="#000" className="item-list-button">
          <ContentAdd />
        </FloatingActionButton>
      </Link>)
    }
    <footer className="appFooter">
      <Foot />
    </footer>
  </div>
  );

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired
};

function mapStateToProps(store) {
  return {
    pathname: store.router.location.pathname
  };
}

export default connect(mapStateToProps)(Layout);
