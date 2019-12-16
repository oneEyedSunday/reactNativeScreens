import React from 'react';
import { Intro } from '../../components';


declare function require(name:string);

const IntroThree = () => (
  <Intro
    sourceOfAnimation={require('../../animations/health.json')}
    title="Title Three"
    body="Lorem Ipsum"/>
);

export default IntroThree;
