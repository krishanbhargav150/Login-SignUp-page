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
      await fs.writeFile(dataFile, JSON.stringify(user, null, 2), 'utf8');
    } catch (error) {
      console.error('Failed to save user data:', error);
      throw error;
    }

    return user;
  }
}
