const dbConnects = require('./mongodbs');


const deletes=async (datas)=>{
   const dbs=await dbConnects("Dropshippers");
     dbs.find(datas,(error ,response)=>{
         console.log(response);
     });
   
    
}

module.exports=deletes;