import express from 'express'
const router = express.Router();
const tasks = [];
router.get('/tasks',(req,res)=>{
    
    res.send(tasks)
});
router.post('/tasks',(req,res)=>{
    let last_id = 0;
    if(tasks.length>0)
        last_id = tasks[tasks.length -1].id;
    let new_id = last_id + 1;
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    const task = {
        'id':new_id,
        'title':req.body.title,
        'description':req.body.description,
        'completed':false,
        'createdAt':`${day}/${month}/${year}`,
        'priority':req.body.priority
            
    }
    tasks.push(task);
        
    res.send(JSON.stringify(task));

});
router.put('/tasks/:id',(req,res)=>{
    const id = Number(req.params.id);
    for(let i=0;i<tasks.length;i++)
    {
        if(tasks[i].id===id)
        {
            tasks[i].title=req.body.title;
            tasks[i].description=req.body.description;
            tasks[i].priority=req.body.priority;
            
        }
    }
    res.send(tasks)
    
});
router.delete('/tasks/:id',(req,res)=>{
    const id = Number(req.params.id);
    for(let i=0;i<tasks.length;i++)
    {
        if(tasks[i].id===id)
            tasks.splice(i,1);
    }
    res.send(tasks);
    
});
router.patch('/tasks/:id/toggle',(req,res)=>{
    const id = Number(req.params.id);
    for(let i=0;i<tasks.length;i++)
    {
        if(tasks[i].id===id)
            tasks[i].completed=!tasks[i].completed;
    }
    res.send(tasks);
    
});
export default router;