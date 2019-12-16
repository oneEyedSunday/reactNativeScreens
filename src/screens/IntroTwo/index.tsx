import React from 'react';
import { Intro } from '../../components';


declare function require(name:string);

const IntroTwo = () => (
  <Intro
    sourceOfAnimation={require('../../animations/map.json')}
    title="Title Two"
    body="Lorem Ipsum"/>
);

export default IntroTwo;
