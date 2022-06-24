export interface User {
    uid: string;
    firstname: string;
    lastname: string;
    email: string;
    number: string;
    username: string;

}

export interface Book {
    title: string;
    author: string;
    genre: string;
    user: User;
    year: string;
}
