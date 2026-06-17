import type {User} from "@/entities/users/model/types.ts";
import bcrypt from 'bcryptjs';

const rawUsers: User[] = [
    {
        id: 1,
        email: 'admin@test.com',
        password: '123456',
        isAvatar: true,
    },
    {
        id: 2,
        email: 'user@test.com',
        password: 'qwerty',
        isAvatar: true,
    },
];

export const users: User[] = rawUsers.map((user): User => {
    const passwordHash = bcrypt.hashSync(user.password, 10);

    return {
        ...user,
        password: passwordHash,
    };
});