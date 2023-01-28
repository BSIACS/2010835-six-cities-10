export class Review{
  public id: number;
  public userName: string;
  public date: string;
  public rating: number;
  public reviewText: string;
  public avatarUrl: string;

  constructor(id: number, userName: string, date: string, rating: number, reviewText: string, avatarUrl: string){
    this.id = id;
    this.userName = userName;
    this.date = date;
    this.rating = rating;
    this.reviewText = reviewText;
    this.avatarUrl = avatarUrl;
  }
}
