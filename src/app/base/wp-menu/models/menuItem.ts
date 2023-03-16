export interface MenuItem{
  icon?:string,
  text:string,
  link:string,
  children?:MenuItem[],
  class?:string,
  expanded?:boolean
}
