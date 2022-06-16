import { database } from '../config/firebase';
import * as firebase from "firebase/app"; 

import { User, Book } from '../types/types';

export type DatabaseCollection = 
    | 'users'
    | 'books';


export type DatabaseDoocument = User | Book;

// export const userDoc = (uid: string) => database.collection('users').doc(uid)