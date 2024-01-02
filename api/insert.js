const dbConnect = require("./mongodb");

const insert = async () => {
    const db = await dbConnect();
    const result =  db.insert(
        [
            { name: "note 6", Brand: "vivo", Price: 32000 },
            { name: "note pro 6", Brand: "vivo", Price: 30000 },
            { name: "note pro 8", Brand: "vivo", Price: 12000 }
        ]
    );
    if (result.acknowledged) {
        console.log("data inserted")
    }
};


insert();