export class Movie {
}
export interface Movie {
    id: number;
    name: string;
    description: string;
    imgPath: string;
    duration: number;
    genre: string[];
    language: string;
    mpaaRating: {
      type: string;
      label: string;
    };
    userRating: string;
}