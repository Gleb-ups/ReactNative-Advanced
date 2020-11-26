import React from 'react';
import {Provider} from 'react-redux';
import persist from './config/store';
import All from './components/screens/All';
import {PersistGate} from 'redux-persist/integration/react';

const persistStore = persist();

const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <All />
      </PersistGate>
    </Provider>
  );
};

export default App;
