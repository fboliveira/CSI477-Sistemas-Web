import api from "./api";

const Authentication = () => {

    console.log('[Authentication] Validating...');

    const token = window.localStorage.getItem('token') || undefined;

    if ( token == undefined ) {
        console.log('[Authentication] Denied!');
        return false;
    }

    const header = window.localStorage.getItem('header');

    api.defaults.headers.common['Authorization'] = `Bearer ${header} ${token}`;

    console.log('[Authentication] Granted!');
    return true;

}

export { Authentication }