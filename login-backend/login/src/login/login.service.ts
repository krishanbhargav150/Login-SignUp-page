import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

const dataFile: string = path.join(
  process.cwd(),
  'src',
  'data',
  'user-data.json',
);

@Injectable()
export class LoginService {
  async signUp(
    email: string,
    password: string,
  ): Promise<{ email: string; password: string }> {
    const user = { email, password };

    try {
      await fs.mkdir(path.dirname(dataFile), { recursive: true });

      let users: { email: string; password: string }[] = [];
      try {
        const existingData = await fs.readFile(dataFile, 'utf8');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsed = JSON.parse(existingData);
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          users = parsed;
        } else if (parsed && typeof parsed === 'object') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          users = [parsed];
        }
      } catch (readError: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (readError.code !== 'ENOENT') {
          throw readError;
        }
      }

      users.push(user);
      await fs.writeFile(dataFile, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
      console.error('Failed to save user data:', error);
      throw error;
    }

    return user;
  }

  async loginUser(
    email: string,
    password: string,
  ): Promise<{ email: string; password: string }> {
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const users: { email: string; password: string }[] = JSON.parse(data);

      console.log('Users:', users); // Log the users array to check its contents
      console.log('Email:', email); // Log the email parameter
      console.log('Password:', password); // Log the password parameter

      const user = users.find(
        (u) => u.email === email && u.password === password,
      );

      if (user) {
        return user;
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.error('Failed to read user data:', error);
      throw error;
    }
  }

  async getUserData(email: string): Promise<boolean> {
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const users: { email: string; password: string }[] = JSON.parse(data);
      let exist: boolean = false;

      users.forEach((user) =>
        user.email === email ? (exist = true) : (exist = false),
      );
      return exist;
    } catch (error) {
      console.error('Failed to read user data:', error);
      throw error;
    }
  }
}
