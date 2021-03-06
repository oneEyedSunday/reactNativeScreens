import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import options from './options';
import { IntroOne, IntroTwo, IntroThree, Home } from '../../screens';


const AppIntroTab = createMaterialTopTabNavigator(
  { IntroOne, IntroTwo, IntroThree },
  options
);

export default AppIntroTab;
