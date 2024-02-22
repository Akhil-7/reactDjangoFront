import React from 'react'
import './TodoList.css'
function TodoList(props) {
  return (
    <div className='items'>
        <h3 className='listItem'>{props.todo}</h3>
        <div className="icons">
            <input type="button" className='iconBtn' title='Edit' value="📝" />
            <input type="button" className='iconBtn' title='Delete' value="❌" />
        </div>
    </div>
  )
}

export default TodoList