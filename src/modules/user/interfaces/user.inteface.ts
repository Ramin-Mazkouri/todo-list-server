import { ProfileModel } from './profile.interfaces';

export interface UserModel {
  id: string;
  username: string | null;
  isActive: boolean | null;
  verification: boolean | null;
  role: 'user' | 'admin' | null;
  google_id: string | null;
  update_at: Date | null;
  create_at: Date | null;
  profile?: ProfileModel | null;
}
