import React from 'react';
import { SpinningIcon } from '~components/views/icons';

const SplashScreen = () => {
  return (
    <div className="SplashScreen flex items-center justify-center h-full w-full">
      <div>
        <SpinningIcon icon="fa-spinner" className="fa-4x" />
      </div>
    </div>
  );
};

SplashScreen.propTypes = {};

export default SplashScreen;
