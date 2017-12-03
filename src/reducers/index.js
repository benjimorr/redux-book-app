import { combineReducers } from 'redux';
import BooksReducer from './books.js';
import ActiveBook from './active_book.js';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
