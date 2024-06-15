import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { SignInData, User } from '@/types/types';
import { getUserListApi, signInUserApi, signUpUserApi } from '@/utils/projectApi';
import { removeLikes, saveLikes, saveToken } from '@/utils/utils';

export const getUserList = createAsyncThunk('users/get', async (page: number) => {
    const response = await getUserListApi(page);
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
    total: number;
    liked: number[];
}

const initialState: InitialState = {
    userData: undefined,
    userList: [],
    isAuth: false,
    total: 0,
    liked: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            if (!action.payload) {
                removeLikes();
            }
        },
        setLike(state, action: PayloadAction<number>) {
            state.liked = [...state.liked, action.payload];
            saveLikes(state.liked);
        },
        removeLike(state, action: PayloadAction<number>) {
            state.liked = state.liked.filter((like) => like !== action.payload);
            saveLikes(state.liked);
        },
        setLikes(state, action: PayloadAction<number[]>) {
            state.liked = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserList.fulfilled, (state, action) => {
                state.total = action.payload.total;
                if (action.payload.page === 1) {
                    state.userList = action.payload.data;
                } else {
                    state.userList = [...state.userList, ...action.payload.data];
                }
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
export const getUserListSelector = (state: RootState) => state.user.userList;
export const getIsAuth = (state: RootState) => state.user.isAuth;
export const getIsLiked = (state: RootState) => state.user.liked;

export const { setIsAuth, setLike, removeLike, setLikes } = userSlice.actions;

export default userSlice.reducer;
