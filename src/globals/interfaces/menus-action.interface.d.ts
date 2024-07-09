export interface MenusActionInterface {
    id?: string;
    name: string;
    path: string;
    action: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
}
