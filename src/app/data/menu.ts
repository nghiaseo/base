import { MenuItem } from "../base/wp-menu/models/menuItem";

export const Menu:MenuItem[] = [
  {
    text:'item1',
    link:'/menu1',
    // expanded:true,
    children:[
      {
        text:'sub-item1',
        link:'/sub-menu1'
      },
      {
        text:'sub-item2',
        link:'/sub-menu2'
      },
    ]
  },
  {
    text:'item2',
    link:'./menu2'
  },
  {
    text:'item3',
    link:'./menu3',
    children:[
      {
        text:'sub-item1',
        link:'./sub-menu1'
      },
      {
        text:'sub-item2',
        link:'./sub-menu2'
      },
      {
        text:'sub-item3',
        link:'./sub-menu3'
      },
    ]
  },

]
