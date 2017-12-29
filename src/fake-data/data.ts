
import { Student } from "../app/student/student";
import { MyComment } from "../app/comment/comment";

export const STUDENTS: Student[] = [
  new Student(12, '建国'),
  new Student(5, '建华'),
  new Student(10, '小刚'),
  new Student(20, '大明')
];

export const COMMENTS: MyComment[] = [
  new MyComment('建国', new Date(), "为什么会这样"),
  new MyComment('建华', new Date(), "雷了雷了"),
  new MyComment('小刚', new Date(), "明天吃饭了！"),
  new MyComment('大明', new Date(), "猴赛雷啊")
];