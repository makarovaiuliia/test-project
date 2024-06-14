import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { User } from '@/types/types';
import { getUserListApi } from '@/utils/projectApi';

export const getUserList = createAsyncThunk('users/get', async () => {
    const response = await getUserListApi();
    return response;
});

interface InitialState {
    userData: User | undefined;
    userList: User[];
    isAuth: boolean;
}

const initialState: InitialState = {
    userData: undefined,
    userList: [],
    isAuth: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.userList = action.payload.data;
        });
    },
});

export const getUserSelector = (state: RootState) => state.user.userData;

export default userSlice.reducer;
