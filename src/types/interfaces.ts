export type TPhoto = {
  id: string;
  author: string;
  url: string;
  description: string;
};

export type TAlbum = {
  id: number;
  album: string;
  photos: TPhoto[];
};
