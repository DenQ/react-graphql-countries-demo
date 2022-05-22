import React from 'react';
import { Grid } from 'react-loader-spinner';

const Spinner: React.FC = () => (
  <Grid
    ariaLabel="loading-indicator"
    color="#1976d2"
    wrapperStyle={{
      display: 'block',
      position: 'relative',
      top: '40%',
    }}
  />
);

export default Spinner;
