import React from 'react';
import { IconContainer, ExpoIcon } from './styled';

const Icon = ({ iconName }) => (
  <IconContainer>
    <ExpoIcon name={iconName} />
  </IconContainer>
);

export default Icon;
