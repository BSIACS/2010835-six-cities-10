export class Host{
  public id: number;
  public name: string;
  public avatarUrl: string;
  public isPro: boolean;

  constructor(id: number, name: string, avatarUrl: string, isPro: boolean){
    this.id = id;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.isPro = isPro;
  }
}
