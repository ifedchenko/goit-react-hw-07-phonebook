import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

export const ButtonLoader = ({ height, width }) => {
  return (
    <div className={css.SpinnerButton}>
      <ColorRing
        visible={true}
        height={height}
        width={width}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export const Loader = ({ height, width }) => {
  return (
    <div className={css.Spinner}>
      <ColorRing
        visible={true}
        height={height}
        width={width}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
