import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import theme from '../../config/theme';
import './Loader.css';

const Loader = () => (
  <div className="loaderWrapper">
    <CircularProgress color={theme.palette.alternateTextColor} />
  </div>
);

export default Loader;
