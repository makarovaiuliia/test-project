// api data

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

// form types

export type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type ValidFieldNames = keyof FormData;

import { z, ZodType } from 'zod';

export const SignUpSchema: ZodType<FormData> = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8, { message: 'Password is too short' }).max(20, { message: 'Password is too long' }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });
