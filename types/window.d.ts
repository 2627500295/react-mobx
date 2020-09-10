declare const __BROWSER__: string;
declare const __SERVER__: string;

interface Window {
  browserHistory: any;
  store: any;
  __PRELOADED_STATE__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any; //typeof compose; - TODO: Find out whyt this didn't work
}
