const dbConnects = require('./mongodbs');


const read =async (data) => {
        const dbs =await dbConnects("Dropshippers");
        let finders={}
            if(data.contenttype==="single"){
                finders=dbs.findOne({
                     username: data.username,
                     password:data.password
                 });
              }else{
                finders=dbs.find({}).toArray();
              } 
        
    return finders;
}

module.exports = read;