import { action, makeAutoObservable, observable } from 'mobx';
import { History, Location } from 'history';

/**
 * 导航服务
 */
export class Navigation {

  @observable
  location: Location | null = null;

  history: History;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true
    });
  }

  @action
  setLocation(location) {
    this.location = location;
  }

  @action
  push(location) {
    this.history.push(location);
  }

  @action
  replace(location) {
    this.history.replace(location);
  }

  @action
  go(n) {
    this.history.go(n);
  }

  @action
  goBack() {
    this.history.goBack();
  }

  @action
  goForward() {
    this.history.goForward();
  }

}

export const navigationServices = new Navigation();

