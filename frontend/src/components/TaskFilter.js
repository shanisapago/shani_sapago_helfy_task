function TaskFilter({setFilter}){
    return(
        <div>
            <button onClick={()=>setFilter("All")}> All</button>
            <button onClick={()=>setFilter("Completed")}> Completed</button>
            <button onClick={()=>setFilter("Not Completed")}> Not Completed</button>
            
        </div>

    );

}
export default TaskFilter;