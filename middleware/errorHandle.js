export const errorHandler= (err,req,res,next)=>{
    const statusCode=res.statusCode;
    if(statusCode===400)
    {
        res.json({"title":"Missing Fields","message":"Required Fields Missing"});
    }
}