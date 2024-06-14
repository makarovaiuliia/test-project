import { UserListResponse } from '@/types/types';

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
