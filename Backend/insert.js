const dbConnects = require('./mongodbs');


const insert=async (datas)=>{
   const dbs=await dbConnects("Dropshippers");
     dbs.insertOne(datas,(error ,response)=>{
         console.log(response);
     });
   
}

module.exports=insert;