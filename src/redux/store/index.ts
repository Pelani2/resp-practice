import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../actions/locationSlice';
import utilsReducer from '../actions/utilsSlice';

export const store = configureStore({
    reducer: {
        location: locationReducer,
        utils: utilsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;