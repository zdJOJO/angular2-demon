
export class MyComment {

  public id: number

  constructor(
    public author: string,
    public pubtime: Date,
    public content: string
  ){
    this.id = new Date().getTime() + Math.ceil(Math.random() * 1000);
   }
} 