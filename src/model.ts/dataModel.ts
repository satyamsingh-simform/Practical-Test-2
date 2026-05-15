export interface Data{
  id:number,
  scrumbleWord:string,
  correctWord:string,
  difficulty:string,
  hint?:string,
}

export type Gdata={
  diffWordArr:number[];
  diffcultLevel:string|undefined;
  categoryOption:Data[];
  scrumbleWord:string;
  scoreTracker:number;
  clear:number;
  lifeTracker:number;
  sec:number;
}