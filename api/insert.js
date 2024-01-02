const dbConnect = require('./mongodb')

const insert= async()=>{
    let data = await dbConnect();
    let result = await data.insertMany(
        [
            { name: "max 61", Brand: "vivo", Price: 32000 },
            { name: "max pro 6", Brand: "vivo", Price: 30000 },
            { name: "note pro 8", Brand: "vivo", Price: 12000 },
        ]
    );
    if (result.acknowledged) {
        console.log("data inserted")
    }
    console.warn(result);
};
insert();