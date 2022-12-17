import { ItoSnakeCase } from 'interfaces/IToSnakeCase';
import AnimateIn, { IAnimateIn } from './components/animations/AnimateIn';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import useIsMobile from './hooks/useIsMobile';
import useOnScreen from './hooks/useOnScreen';
import useOutsideAlerter from './hooks/useOutsideTouch';
import useWindowSize from './hooks/useWindowSize';
import { IButton, IButtonComponents } from './interfaces/IButton';
import { IgetTimeRemaining } from './interfaces/IGetTimeRemaning';
import getTimeRemaining from './utils/getTimeRemaining';
import toSnakeCase from './utils/toSnakeCase';

import {
  IItemList,
  INavbar,
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
  toSnakeCase,
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
  ItoSnakeCase,
  IgetTimeRemaining,
};
