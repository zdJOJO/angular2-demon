/**
 * @class
 * @define Student
*/
export class Student {

  public id: number

  constructor(
    public age: number,
    public name: string,
  ){ 
    this.id = new Date().getTime() + age
  }
}