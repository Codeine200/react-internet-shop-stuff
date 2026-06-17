import { createAsyncThunk } from '@reduxjs/toolkit';
import bcrypt from 'bcryptjs';
import { User } from '@/entities/user/model/types';
import {users} from "@/shared/constants/users";

type LoginRequest = {
    email: string;
    password: string;
};

export const loginThunk = createAsyncThunk<
    User,
    LoginRequest,
    { rejectValue: string }
>('auth/login', async (args, thunkApi) => {
    const user = users.find(u => u.email === args.email);

    if (!user) {
        return thunkApi.rejectWithValue('User not found');
    }

    const isValid = bcrypt.compareSync(args.password, user.passwordHash);

    if (!isValid) {
        return thunkApi.rejectWithValue('Invalid password');
    }

    return user;
});