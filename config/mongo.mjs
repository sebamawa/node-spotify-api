import mongoose from "mongoose";

// conexion local a la BD
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