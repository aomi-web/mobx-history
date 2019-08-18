import { observe } from 'mobx';
import { navigationServices } from './Navigation';

export function syncHistory(history) {
  // init
  navigationServices.history = history;

  history.unsubscribe = history.listen(navigationServices.setLocation);
  navigationServices.setLocation(history.location);

  history.subscribe = (listener) => {
    const onStoreChange = () => {
      const rawLocation = {...navigationServices.location};
      listener(rawLocation, history.action);
    };

    // Listen for changes to location state in store
    const unsubscribeFromStore = observe(navigationServices, 'location', onStoreChange);

    listener(navigationServices.location, history.action);

    return unsubscribeFromStore;
  };

  return history;
}
