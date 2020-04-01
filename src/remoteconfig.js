import firebase from './firebase';

const remoteConfig = firebase.remoteConfig();
remoteConfig.settings = {
  minimumFetchIntervalMillis: 6000,
  fetchTimeoutMillis: 60000
};

remoteConfig.defaultConfig = {
  background_img:
    'https://preview.redd.it/3aeg40i6gxv31.png?width=2482&format=png&auto=webp&s=43ae1ade14d39f8cec64c9301bd313a6a23df2c3'
};

export default remoteConfig;
