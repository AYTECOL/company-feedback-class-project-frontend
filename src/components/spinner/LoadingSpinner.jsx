import React from 'react';
import { Oval } from 'react-loader-spinner';
import './style.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner-container">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#1676be"
          secondaryColor="#fff"
          strokeWidth="4"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;