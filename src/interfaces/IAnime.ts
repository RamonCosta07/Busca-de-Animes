export default interface IAnime {
    data: {
      id: string;
      attributes: {
        canonicalTitle: string;
        posterImage: {
          small: string;
        };
      };
    }[];
  }  