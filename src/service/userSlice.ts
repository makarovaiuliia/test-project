import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { SignInData, User } from '@/types/types';
import { getUserListApi, signInUserApi, signUpUserApi } from '@/utils/projectApi';
import { saveToken } from '@/utils/utils';

export const getUserList = createAsyncThunk('users/get', async () => {
    const response = await getUserListApi();
    return response;
});

export const signUpUser = createAsyncThunk('user/signUp', async (data: SignInData) => {
    const response = await signUpUserApi(data);
    saveToken(response.token);
    return response;
});

export const signInUser = createAsyncThunk('user/signIn', async (data: SignInData) => {
    const response = await signInUserApi(data);
    saveToken(response.token);
    return response;
});

interface InitialState {
    userData: User | undefined;
    userList: User[];
    isAuth: boolean;
    error: string;
}

const initialState: InitialState = {
    userData: undefined,
    userList: [],
    isAuth: false,
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserList.fulfilled, (state, action) => {
                state.userList = action.payload.data;
            })
            .addCase(signUpUser.fulfilled, (state) => {
                state.isAuth = true;
            })
            .addCase(signInUser.fulfilled, (state) => {
                state.isAuth = true;
            });
    },
});

export const getUserSelector = (state: RootState) => state.user.userData;
export const getErrorSelector = (state: RootState) => state.user.error;
export const getIsAuth = (state: RootState) => state.user.isAuth;

export default userSlice.reducer;
