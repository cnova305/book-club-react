import { database } from '../config/firebase';
import { User } from '../types/types';

export function getNewUser():User {
    return {
        uid: '',
        firstname:'',
        lastname:'',
        email: '',
        number: '',
        username: '',
    };
}

// export async function createNewUser(): Promise<User> {
//     const newUser =  getNewUser();

//     // remove uid property when saving
// }

export default {
    getNewUser,
}