export interface ProfileModel {
  id: string;
  first_name: string | null;
  last_name: string | null;
  full_name: string | null;
  mobile: string | null;
  birth_date: Date | null;
  image_avatar: string | null;
  image_thumbnail: string | null;
  update_at: Date | null;
  create_at: Date | null;
}
