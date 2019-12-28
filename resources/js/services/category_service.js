import {http, httpFile} from "./http_service";

export async function loadMore(nextPage) {
    return http().get(`/categories?page=${nextPage}`);
}

export function createCategory(data) {
    return httpFile().post('/categories', data)
}
export function loadCategories() {
    return http().get('/categories')
}

export function deleteCategory(id) {
    return http().delete(`/categories/${id}`);
}

export function updateCategory(data, id) {
    return httpFile().post(`/categories/${id}`, data);
}
