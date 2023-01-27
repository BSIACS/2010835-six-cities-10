export class Review{
  public id: number;
  public authorName: string;
  public date: Date;
  public rating: number;
  public textContent: string;

  constructor(id: number, authorName: string, date: Date, rating: number, textContent: string){
    this.id = id;
    this.authorName = authorName;
    this.date = date;
    this.rating = rating;
    this.textContent = textContent;
  }
}
