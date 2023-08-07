import TodoItem from "./todoItem"
import { useState } from "react"

export default function TodoList(){

  const colorTags = ['y','b','g','o','s','p','r']
  const [ List, SetList] = useState([
              {id:'0',context:"do love"},
              {id:'1',context:"do love"},
              {id:'2',context:"do love"},
              {id:'3',context:"do love"},
              {id:'4',context:"do love"},
              {id:'5',context:"do love"},
              {id:'6',context:"do love"},
              {id:'7',context:"do love"},
              {id:'8',context:"do love"},
            ])
  const [ tn, SetTn ] = useState(Math.floor(Math.random()* colorTags.length))    
  
  // removeItem
    function removeItem(id) {
      SetList(List.filter((i) => i.id != id))
  }
 
    return (<div className='w-full h-full z-1 '>
        { List.map((i) => {
            return <TodoItem key={i.id} props={{tn,colorTags,}} removeItem={removeItem} item={i}/>
          }
        )}
      </div>)
}