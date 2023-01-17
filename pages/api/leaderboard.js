import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("testing_leaderboard_fetch");
    const leaderboard = db.collection("leaderboard");
    // switch the methods
    switch (req.method) {
        case "GET": {
            const allPosts = await leaderboard.find({}).sort({"points":-1}).toArray();
            return res.json({ status: 200, data: allPosts });
        }

        case 'POST': {
            return addUser(req, res);
        }
    }
}

async function getLeaderboard(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let data = await db
            .collection('leaderboard')
            .find({})
            .sort({})
            .toArray();
        console.log(data);
        // return the posts
        // return res.json({
        //     message: JSON.stringify(data),
        //     success: true,
        // });
    } catch (error) {
        console.log("error");
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function addUser(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('leaderboard').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}