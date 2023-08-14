import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './authReducer';
import { contactsReducer } from './contactsReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// Робота з редаксом:
// 1. Встановити бібліотеку redux та react-redux
// 2. Сконфігурувати "store"
// 3. Зв'язати наш "store" з React додатком, через <Provider store={store}>
// 4. Створити редьюсер з початковим стейтом і
//    підключити цей редьюсер до "store" за допомогою "combineReducers"
// 5. Описати для кожної дії в редьюсері свій обробник/кейс/протокол
// 6. Підписатися на стейт безпосередньо в середині компоненти, за допомогою
//    "useSelector"
// 7. Отримати логістичну функцію "dispatch" за допомогою хука "useDispatch()"
// 8. Задіспатчити екшин(Надіслати інструкцію до редьюсеру) dispatch({ type: 'categories/setCategoryList', payload: catList })
// NOTE: Action - це об'єкт, в якого має бути обов'язкове поле type,
//       ще може бути payload - він не обов'язковий.
//       Редьюсер - це чиста функція, яка приймає в себе "state" та "action"
//       і повертає змінений стан.
//       dispatch - це логістична функція, яка приймає в себе "action"
//       і доставляє його до редьюсеру.

// {
//   contacts: [],
//   filter: ""
// }
