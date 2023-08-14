import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

export const AddButtonLoader = () => {
  return (
    <div className={css.SpinnerButton}>
      <ColorRing
        visible={true}
        height="16"
        width="16"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export const DeleteButtonLoader = () => {
  return (
    <div className={css.SpinnerButton}>
      <ColorRing
        visible={true}
        height="16"
        width="16"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export const Loader = () => {
  return (
    <div className={css.Spinner}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
