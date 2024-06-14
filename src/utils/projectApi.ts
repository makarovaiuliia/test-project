import { SignInData, SignInResponse, SignUpResponse, UserInfo, UserListResponse, UserResponse } from '@/types/types';

const URL = import.meta.env.VITE_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
    res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getUserList = async () => {
    const response = await fetch(`${URL}/users`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = checkResponse<UserListResponse>(response);
    return data;
};

export const getUserById = async (id: string) => {
    const response = await fetch(`${URL}/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = checkResponse<UserResponse>(response);
    return data;
};

export const deleteUser = async (id: string) => {
    const response = await fetch(`${URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = checkResponse<unknown>(response);
    return data;
};

export const createUser = async (body: UserInfo) => {
    const response = await fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const data = checkResponse<UserInfo>(response);
    return data;
};

export const updateUser = async (id: string, body: UserInfo) => {
    const response = await fetch(`${URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const data = checkResponse<UserInfo>(response);
    return data;
};

export const signUpUser = async (body: SignInData) => {
    const response = await fetch(`${URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const data = checkResponse<SignUpResponse>(response);
    return data;
};

export const signInUser = async (body: SignInData) => {
    const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const data = checkResponse<SignInResponse>(response);
    return data;
};
