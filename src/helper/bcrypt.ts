import * as bcrypt from 'bcrypt';

export const hashedPassword = async (password: string) =>
  await bcrypt.hash(password, 12);

export const comparePassword = async (data: { pass1: string; pass2: string }) =>
  bcrypt.compareSync(data.pass1, data.pass2);
