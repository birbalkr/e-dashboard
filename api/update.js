const dbConnect = require('./mongodb')

const updateData= async()=>{
    let data= await dbConnect();
    let result = await data.updateMany({ name: 'max 5' }, { $set: { name: 'note 5' } });
    
    console.warn(result);
};

updateData();