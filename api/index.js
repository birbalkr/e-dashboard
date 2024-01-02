
const dbConnect = require("./mongodb");

// both are same Code

// 1
// dbConnect().then((rep)=>{
//     rep.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })

// 2.
const main = async ()=> {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();
