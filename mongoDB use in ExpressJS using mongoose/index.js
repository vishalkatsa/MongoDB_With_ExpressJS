const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/youtube";
/////////////////////////////// Create (Crud) ///////////////////////////////
// connection creation with MongoDb
mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Not Connected", error);
  });

// schema
// A Mongoose schema defines the structure of the document , 
// default values , validates, etc.,
const playlistSchema = mongoose.Schema({
  name: {
    type: String,
    required : true
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type:Date,
    default:Date.now
  }
})

// model ,, model use for CRUD Opration ,
// model ,, Creating  collections and Crud Opration
                          // Collections always type singular + first latter Capital 
const Playlist = mongoose.model("Playlist",playlistSchema)


// 1. document create or insert
                              // singel document insert or create
// const createDocument = async () =>{
//   try {
//     const reactPlaylist = new Playlist({
//       name: "Nodes JS",
//       ctype: "BackEND",
//       videos: 50,
//       author: "Vishal",
//       active: true,
      
//     });
//     const result = await reactPlaylist.save();
//     // console.log(result);
//   } catch (error) {
//     console.log("Document Creation faild" , error);
//   }
// }
// createDocument();

// 2. document create or insert
                              // multiple document insert or create

const createDocument = async () =>{
  try {
    const Playlist1 = new Playlist({
      name: "mongodb ",
      ctype: "database",
      videos: 50,
      author: "Vishal",
      active: true,
      
    }); 
    const Playlist2 = new Playlist({
      name: "Express js ",
      ctype: "BackEND",
      videos: 50,
      author: "Vishal",
      active: true,
      
    });
    const Playlist3 = new Playlist({
      name: "css",
      ctype: "front End",
      videos: 50,
      author: "Vishal",
      active: true,
      
    });
    const result = await Playlist.insertMany([Playlist1 , Playlist2 ,Playlist3]);
    // console.log(result);
  } catch (error) {
    console.log("Document Creation faild" , error);
  }
}
// createDocument();
/////////////////////////////// Read (Crud) ///////////////////////////////



//////// Read (Search) MongoDB Document /////
// 1 All data Find

// const getDocument = async () =>{
// const result = await  Playlist.find();
// console.log(result);
// }
// getDocument()

// 2 custem data Find

//  const getDocument = async () =>{
//   const result = await  Playlist.find({name: "mongodb "})
  
//   console.log(result);
//   }
//   getDocument()

// 3 custem data with only value Find

  // const getDocument = async () =>{
  //   const result = await  Playlist.find({name: "mongodb "})
  //   .select({name:1});  // name 1 means name value
  //   console.log(result);
  //   }
  //   getDocument()

// 3 Limit data with only value Find

// const getDocument = async () =>{
//   try {
//     const result = await  Playlist.find({name: "mongodb "})
//     .select({name:1})// name 1 means name value
//     .limit(1);  // limit start from top (means start)
//     console.log(result);
    
//   } catch (error) {
//     console.log("Find or search faild " , error);
//   }
// }
//   getDocument()

//////////////////// MongoDB Query Operators/////////////////////

// 1. Comparison value Find

// const getDocument = async () =>{
//   try {
//     const result = await  Playlist.find({videos: {$gte :50}})
//     .select({name:1})// name 1 means name value
    
//     console.log(result);
    
//   } catch (error) {
//     console.log("Find or search faild " , error);
//   }
// }
//   getDocument()

// Comparison ( $in )  value Find 

  // const getDocument = async () =>{
  //   try {
  //     const result = await  Playlist.find({ctype: {$in :["BackEND" , 'database']}}) // $nin
  //     .select({name:1})// name 1 means name value
      
  //     console.log(result);
      
  //   } catch (error) {
  //     console.log("Find or search faild " , error);
  //   }
  // }
  //   getDocument()

// 2. MongoDB Logical Operators
// $or any query match than show result 
// const getDocument = async () =>{
//   try {
//     const result = await  Playlist.find({$or : [{ctype : "BackEND"}
//   ,{author : "Vishal"}]}) // $nin
//     .select({name:1})// name 1 means name value
    
//     console.log(result);
    
//   } catch (error) {
//     console.log("Find or search faild " , error);
//   }
// }
//   getDocument()

// $and both query match show result
// const getDocument = async () =>{
//   try {
//     const result = await  Playlist.find({$and : [{ctype : "BackEND"}
//   ,{author : "Vishal"}]}) // $nin
//     .select({name:1})// name 1 means name value
    
//     console.log(result);
    
//   } catch (error) {
//     console.log("Find or search faild " , error);
//   }
// }
//   getDocument()

// countDocuments

// const getDocument = async () =>{
//   try {
//     const result = await  Playlist.find({author : "Vishal"}) // $nin
//     .select({name:1})// name 1 means name value
//     .countDocuments()
//     console.log(result);
    
//   } catch (error) {
//     console.log("Find or search faild " , error);
//   }
// }
//   getDocument()

////////// sort //////////
// const getDocument = async () =>{
//     try {
//       const result = await  Playlist.find({author : "Vishal"}) // $nin
//       .select({name:1})// name 1 means name value
//       .sort({name : 1}) // asanig and disanig order
//       console.log(result);
      
//     } catch (error) {
//       console.log("Find or search faild " , error);
//     }
//   }
//     getDocument()

/////////////////////////////// Update (Crud) ///////////////////////////////

///// Update Document /////
// 1. updateone()
// const UpdateDocument = async (_id) =>{
//   try {
//     const result = await Playlist.updateOne({_id},{
//       $set : {
//         name : "CSS"
//       }
//     });
//     console.log(result);
//   } catch (error) {
//     console.log('update error' ,error );
//   }
// }
// UpdateDocument('6549d016c12e3373a9fbd338')

// 2. findByIdAndUpdate()  (console show old update data)

// const UpdateDocument = async (_id) =>{
//   try {
//     const result = await Playlist.findByIdAndUpdate({_id},{
//       $set : {
//         name : "CSS 1"
//       }
//     });
//     console.log(result);
//   } catch (error) {
//     console.log('update error' ,error );
//   }
// }
// UpdateDocument('6549d016c12e3373a9fbd338')

// 3a. findByIdAndUpdate()  (console show new update data)

// const UpdateDocument = async (_id) =>{
//   try {
//     const result = await Playlist.findByIdAndUpdate({_id},{
//       $set : {
//         name : "CSS"
//       }
//     },{new : true});
//     console.log(result);
//   } catch (error) {
//     console.log('update error' ,error );
//   }
// }
// UpdateDocument('6549d016c12e3373a9fbd338')


/////////////////////////////// Delete (Crud) ///////////////////////////////

// 1. deleteOne 
// const DeleteDocument = async (_id) =>{
// const result =  await Playlist.deleteOne({_id});
// console.log(result);
// }


// DeleteDocument('6549d016c12e3373a9fbd338');

// 2. findByIdAndDelete 
// const DeleteDocument = async (_id) =>{
//   const result =  await Playlist.findByIdAndDelete({_id});
//   console.log(result);
//   }
  
  
//   DeleteDocument('6549c9da12762b7c464e94e0');

// 2. deleteMany to delete all  

  const DeleteAllDocuments = async () => {
    try {
      const result = await Playlist.deleteMany({});
      console.log(result);
    } catch (error) {
      console.log("Deletion failed", error);
    }
  }
  
  // DeleteAllDocuments();
  


  //////////////////////////////////////////////////////////////////////////////////////
  
  // MongoDB - Mongoose Validation // Database validation