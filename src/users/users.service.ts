import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Irufano Nano',
      username: 'irufano',
      password: 'password',
    },
    {
      id: 2,
      name: 'Batman',
      username: 'batman',
      password: 'password1',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
