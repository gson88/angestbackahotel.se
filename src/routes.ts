import { RouteRecord } from '~/data/RouteRecord';
import CabinsContainer from '~/components/containers/CabinsContainer/CabinsContainer';
import AdventuresContainer from '~/components/containers/AdventuresContainer/AdventuresContainer';

export default {
  cabins: new RouteRecord({
    path: '/cabins',
    component: CabinsContainer
  }),
  adventures: new RouteRecord({
    path: '/adventures',
    component: AdventuresContainer
  }),
  restaurant: new RouteRecord({
    path: '/restaurant'
  })
};
