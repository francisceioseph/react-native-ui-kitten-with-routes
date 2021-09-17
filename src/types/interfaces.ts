export type TPhoto = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  description: string;
};

export type TAlbum = {
  id: number;
  album: string;
  photos: TPhoto[];
};
