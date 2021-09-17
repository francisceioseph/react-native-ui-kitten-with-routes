import {NavigationProp, RouteProp} from '@react-navigation/core';
import {Routes} from '../constants';

type TDetailsScreenParams = {
  albumId: number;
};

export type TRootStackParams = {
  [Routes.HOME]: undefined;
  [Routes.DETAILS]: TDetailsScreenParams;
};

export type TAppNavigation<T extends keyof TRootStackParams> = NavigationProp<
  TRootStackParams,
  T
>;

export type TAppRoute<T extends keyof TRootStackParams> = RouteProp<
  TRootStackParams,
  T
>;
