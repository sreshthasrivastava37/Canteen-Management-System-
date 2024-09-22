const { MongoClient }= require('mongodb')
const bcrypt =require('bcrypt')
const {generateAccessToken,verifyAccessToken}  = require('./jwtToken')
const home= async(req,res)=>{
return res.send("welcome")
}

const signup= async(req,res)=>{
    try {
       const client = await MongoClient.connect('mongodb://localhost:27017/')
        const coll = client.db('canteen_ordering').collection('signUp');
        const oldUser = await coll.findOne({email:req.body.email})
        console.log(oldUser)
        if(oldUser){
         return res.send("User Already Exists");
        }
        const data = req.body;
        data.password = await bcrypt.hash(data.password,5)
        await coll.insertOne(data);
        client.close();
       return res.send("Signup Ok Now u can Login")
      } catch (error) {
        res.send("Internal Server Error");
      }
}


const signIn = async (req,res)=>{
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('canteen_ordering').collection('signUp');
    const result = await coll.findOne({email:req.body.email})
    client.close();
    if(result){
      const isvaliduser = await bcrypt.compare(req.body.password,result.password);
      if(isvaliduser){
        const token = await generateAccessToken(req.body.email);
        return res.json({valid:1,token});
      }
      else
        return res.json({valid:0});
    }
    else{
      return res.json({valid:0})
    }
  } catch (error) {
    return res.send("Internal Server Error");
  }

}

const addItems = async (req, res) =>  {
  try {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }

    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('canteen_ordering').collection('Menu_Items');
    const data = req.body;
    data.foodimg = req.file.filename;
    if (!data.foodname || !data.description || !data.price) {
      return res.status(400).send({ message: 'Invalid input data' });
    }
    // data.startdate = new Date(data.startdate).toLocaleString();
    await coll.insertOne(data);
    client.close();
    res.send("inserted");
  } catch (error) {
    res.send("internal server error");
  }
}

    const Allitem = async(req,res)=>{
      try{
          const client = await MongoClient.connect('mongodb://localhost:27017/');
          const coll = client.db('canteen_ordering').collection('Menu_Items');
         
          const result = await coll.find().toArray();
         
          client.close();
          return res.status(200).send(result)
          
          }catch(err){
              res.send("internal server error");
          }
      }
  




const searchFood = async (req,res)=>{
  const client = await MongoClient.connect('mongodb://localhost:27017/');
  const coll = client.db('canteen_ordering').collection('Menu_Items');
  const result = await coll.find({foodname:req.body.foodname})
  data =await result.toArray();
  console.log(data)
res.json(data);
}


   
    
module.exports={home,signup,signIn,addItems,searchFood,Allitem}