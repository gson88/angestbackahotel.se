import { ComponentClass } from 'react';
import { Record } from 'immutable';

const keys = {
  path: '',
  component: undefined
};

interface IRouteRecord {
  path: string;
  component?: ComponentClass;
}

export class RouteRecord extends Record<IRouteRecord>(keys) {}
