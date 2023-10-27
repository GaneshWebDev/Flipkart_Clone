
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feathers/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore} from 'redux-persist';
const presistConfig={
  key:'root',
  storage,
}
const presistedReducer=persistReducer(presistConfig,userReducer);

export const store = configureStore({
  reducer:{
    log1:presistedReducer,
  }
});
export const presistor=persistStore(store);
console.log(store,'store');
