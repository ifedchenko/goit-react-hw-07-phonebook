import React from 'react';
import PropTypes from 'prop-types';

import { ContainerBlock } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Container;