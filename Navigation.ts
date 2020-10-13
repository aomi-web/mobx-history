import { action, observable } from 'mobx';
import { autoBind } from 'jsdk/autoBind';
import { History, Location } from 'history';

/**
 * 导航服务
 */
@autoBind
export class Navigation {

  @observable
  location: Location;

  history: History;

  @action
  setLocation(location) {
    this.location = location;
  }


  push(location) {
    this.history.push(location);
  }

  replace(location) {
    this.history.replace(location);
  }

  go(n) {
    this.history.go(n);
  }

  goBack() {
    this.history.goBack();
  }

  goForward() {
    this.history.goForward();
  }

}

export const navigationServices = new Navigation();

