import React from 'react';
import { Text } from 'react-native';


import {
  AnimationView,
  Container,
  DescriptionView,
  IntroText,
  IntroTitle
} from './styled';


const Intro = ({ sourceOfAnimation, title, body }) => (
  <Container>
    <AnimationView>
      <Text>{sourceOfAnimation}</Text>
    </AnimationView>
    <DescriptionView>
      <IntroTitle>{title}</IntroTitle>
      <IntroText>{body}</IntroText>
    </DescriptionView>
  </Container>
);

export default Intro;
