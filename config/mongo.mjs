import mongoose from "mongoose";

// // conexion a BD con callbacks
// const dbConnect = () => {
//   const MONGO_DB_URI = process.env.MONGO_DB_URI;
//   mongoose.connect(MONGO_DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true, 
//   },
//   (err, res) => {
//     if (!err) {
//       console.log('Conexion exitosa a la BD');
//     } else {
//       console.log('Error al conectar a la BD: ' + err);
//       process.exit(1);
//     }
//   })
// }


// conexion a BD con try-catch
const dbConnect = async () => {
  const MONGO_DB_URI = process.env.MONGO_DB_URI;
  const connectionParams = {
    // userNewUrlParser: true,
    // userCreateIndex: true,
    useUnifiedTopology: true,
  }

  try {
    console.log('Conectando a la base de datos...');
    await mongoose.connect(MONGO_DB_URI, connectionParams);
    console.log('CONEXION EXITOSA A LA BD');
  } catch (error) {
    console.log('ERROR AL CONECTAR A LA BD: ' + error);
    process.exit(1);
  }  
}

export default dbConnect;