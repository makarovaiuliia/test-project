export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ServerResponse<T> {
    data: T;
}

export interface UserListResponse extends ServerResponse<User[]> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}

export interface SignInData {
    email: string;
    password: string;
}

export interface UserInfo {
    name: string;
    job: string;
}

export interface SignInResponse {
    token: string;
}

export interface SignUpResponse extends SignInResponse {
    id: string;
}
