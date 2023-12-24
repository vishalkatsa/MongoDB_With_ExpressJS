// const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/e-comm";

// mongoose
//   .connect(url)
// //   .then(() => {
// //     console.log("MongoDB Connected");
// //   })
// //   .catch((error) => {
// //     console.log("MongoDB Not Connected", error);
// //   });

// // schema
// const myProducts = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   brand: String,
//   price: Number,
//   category: String,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
// // Create Collections

// const NewProducts = new mongoose.model("NewProducts", myProducts);

// // create document or insert
// const Document = async () => {
//   /// 1. multiple Data send just one click
//   try {
//     const product1 = new NewProducts({
//       name: "At-10",
//       brand: "oppo",
//       price: 200,
//       category: "mobile",
//     });
//     const product2 = new NewProducts({
//       name: "Bt-10",
//       brand: "Apple",
//       price: 200,
//       category: "mobile",
//     });
//     const product3 = new NewProducts({
//       name: "Ct-10",
//       brand: "Mi",
//       price: 200,
//       category: "mobile",
//     });
//     const product4 = new NewProducts({
//       name: "Dt-10",
//       brand: "Vivo",
//       price: 200,
//       category: "mobile",
//     });

//     const result = await NewProducts.insertMany([product1,product2,product3,product4])
//     // console.log(result);
//     /// 2. Single Data insert

//     //   try {
//     //     const productDocument = new NewProducts({
//     //       name: "Vk-20",
//     //       brand: "google",
//     //       price: 500,
//     //       category: "mobile",
//     //       //   date: {
//     //       //     type: Date,
//     //       //     default: Date.now,
//     //       //   },
//     //     });

//     //     const result = await productDocument.save();
//     //     console.log(result);
//     //   }

//   } catch (error) {
    
//     console.log("Document Data sent", error);
//   }
// };

// // Document();

// ///// Data Get from MongoDB ///////

// // const getDocument = async () =>{               ////////   All Find 
// //   const result = await NewProducts.find();
// //   console.log(result);
// // }

// // const getDocument = async () =>{               ////////  Search Find    | Ckeck this bihab 
// //   const result = await NewProducts.find({name: 'Ct-10'});
// //   console.log(result);
// // }

// // const getDocument = async () =>{
// //   const result = await NewProducts.find({name: 'Ct-10'}).select({price:1});  ////////  Check any bihab and find only particular value
// //   console.log(result);
// // }

// const getDocument = async () =>{
//   const result = await NewProducts.find({name: 'Ct-10'}).select({price:1}).limit(1);  ////////  limit use for start 1 . 2. 3 
//   console.log(result);
// }
// getDocument();