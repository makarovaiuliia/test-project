import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { SignInData, User } from '@/types/types';
import { getUserListApi, signUpUserApi } from '@/utils/projectApi';

export const getUserList = createAsyncThunk('users/get', async () => {
    const response = await getUserListApi();
    return response;
});

export const signUpUser = createAsyncThunk('user/signUp', async (data: SignInData) => {
    const response = await signUpUserApi(data);
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
            .addCase(signUpUser.rejected, (state) => {
                state.error = 'Something went wrong';
            });
    },
});

export const getUserSelector = (state: RootState) => state.user.userData;
export const getErrorSelector = (state: RootState) => state.user.error;

export default userSlice.reducer;
