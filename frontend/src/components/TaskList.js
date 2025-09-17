import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";

function TaskList({tasks,setTasks,filter,setFilter}){
    function filter_task(task){
        console.log("filter"+filter)
        console.log("task= "+task.title)
        console.log("task com "+task.completed)
        if(filter=="All")
            return true;
        if(filter=="Completed")
        {
            console.log("completed")
            return task.completed;
        }
        console.log("not completed return "+!task.completed)
        return !task.completed;
    }
    
    return(
        <div>
            <h2>Tasks List:</h2>
            <TaskFilter setFilter={setFilter}/>
            <table>
                
                <tbody>
                    {tasks.filter(task=>filter_task(task)).map(task=><TaskItem task={task} setTasks={setTasks}/>)}
                </tbody>
            </table>
            
        </div>

    );

}
export default TaskList;