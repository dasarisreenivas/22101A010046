const express=require("express");
const app=express();
const port=9876;


let url="/numbers/e";

app.get(url,(req,res)=>{
    let WindowsPrevState=[];
    let WindowCurrState=[2,4,6,8];
    let numbers=[2,4,6,8];
    let length=WindowCurrState.length;
    let sum=0;
    for(let i=0;i<length;i++){
        sum+=WindowCurrState[i];
    }
    let total=sum/length;
    let ans={
        WindowsPrevState:[],
        WindowCurrState:[2,4,6,8],
        numbers:[2,4,6,8],
    }
    res.json(ans);

});

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
});