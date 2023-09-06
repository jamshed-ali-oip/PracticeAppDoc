import { createStore } from 'redux';
import rootReducer from './rootreducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  
  
  
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  export const store = createStore(persistedReducer)
  export const persistor = persistStore(store)


export default store