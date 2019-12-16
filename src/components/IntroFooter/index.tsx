import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container } from './styled';
import Icon from '../Icon';


const IntroFooter = ({ navigation }) => {
  const goHome = () => {
    navigation.navigate('Home');
  }
  const indexOfCurrentScreen = navigation.state.index;
  const nameOfScreen = index => navigation.state.routes[index].routeName;
  const navigateToNextScreen = () => indexOfCurrentScreen !== 2 ? navigation.navigate(nameOfScreen(indexOfCurrentScreen + 1))
: navigation.navigate('Home');
  return (
    <Container>
      <TouchableOpacity onPress={goHome}>
        <Icon iconName="home" />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNextScreen}>
        <Icon iconName={indexOfCurrentScreen === 2 ? 'check' : 'arrowright'} />
      </TouchableOpacity>
    </Container>
  );
};


export default withNavigation(IntroFooter);
