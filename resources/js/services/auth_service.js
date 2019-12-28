import {http, httpFile, httpFileAuth} from "./http_service";

export function register(user) {
    return http().post('/auth/register', user)
}
