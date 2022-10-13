import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import AnimateIn, { IAnimateIn } from './components/animations/AnimateIn';
import getTimeRemaining from './utils/getTimeRemaining';
import { IButton, IButtonComponents } from './interfaces/IButton';
import { IgetTimeRemaining } from './interfaces/IGetTimeRemaning';
import useOutsideAlerter from './hooks/useOutsideTouch';
import useWindowSize from './hooks/useWindowSize';
import useIsMobile from './hooks/useIsMobile';
import useOnScreen from './hooks/useOnScreen';

import {
  INavbar,
  IItemList,
  IProfileList,
  IUserProfileList,
} from './interfaces/INavbar';

export {
  Button,
  Navbar,
  AnimateIn,
  getTimeRemaining,
  useOutsideAlerter,
  useWindowSize,
  useIsMobile,
  useOnScreen,
};
export type {
  IButton,
  IButtonComponents,
  INavbar,
  IItemList,
  IProfileList,
  IUserProfileList,
  IAnimateIn,
  IgetTimeRemaining,
};
