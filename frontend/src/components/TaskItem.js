
import '../styles/TaskItem.css'
function TaskItem({task,setTasks}){
    const handle_deleteClick=async (id)=>{
        
        const result = await fetch(`http://localhost:4000/api/tasks/${id}`,{
            method:'delete'
        })
        const res = await result.json()
        setTasks(res)


     }
     const handle_toggleClick=async (id)=>{
        
        const result = await fetch(`http://localhost:4000/api/tasks/${id}/toggle`,{
            method:'PATCH'
        })
        const res = await result.json()
        setTasks(res)


     }
    return(
        <div>
            <input className='input-box' type="text" defaultValue={task.title}></input>
            <input className='input-box' type="text" defaultValue={task.description}></input>
            <input className='input-box' type="text" defaultValue={task.createdAt}></input>
            <button>Edit</button>
            <button onClick={()=>handle_deleteClick(task.id)}>Delete</button>
            <button onClick={()=>handle_toggleClick(task.id)}> toggle</button>
        </div>

    );

}
export default TaskItem;