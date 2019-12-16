import React from 'react';
import { IntroFooter } from '../../components';

const footer = () => <IntroFooter />;

export default {
  initialRouteName: 'IntroOne',
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarComponent: footer
};
