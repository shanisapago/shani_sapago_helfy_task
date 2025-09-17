import { useRef } from "react";

function TaskForm({setTasks}){
    const title_ref=useRef()
    const description_ref=useRef()
    const priority_ref=useRef()
    const handle_Submit = async(e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const priority = e.target.priority.value
        if(title!==""&&description!==""&&priority!==""){
            if(priority==='high'||priority==='medium'||priority==='low'){
                const data ={
            "title":title,
            "description":description,
            "priority":priority
        }
        const result = await fetch('http://localhost:4000/api/tasks',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)

            })
           
           const json_task = await result.json()
            setTasks(prevTasks=>[...prevTasks,json_task])

            }
            else{
                alert("priority can be high/medium/low")
            }
            

        }
        title_ref.current.value="";
        description_ref.current.value="";
        priority_ref.current.value="";

        
    }
    return(
        <div>
            <h2>Add Task:</h2>
            <form onSubmit={handle_Submit}>
                <div>
                    <input ref={title_ref} name="title" type="text" placeholder="add task title"></input>
                </div>
                <div>
                    <input ref={description_ref} name="description" type="text" placeholder="add task description"></input>
                </div>
                <div>
                    <input ref={priority_ref} name="priority" type="text" placeholder="add task priority"></input>

                </div>
               <div>
                <button type="submit" >Add</button>
               </div>
                

            </form>

        </div>

    );

}
export default TaskForm;