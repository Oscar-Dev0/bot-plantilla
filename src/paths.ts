import 'colors';
import { centrar } from './assets/config';


//Errores

process.on("uncaughtException",(error: Error)=>{ 
    centrar("#".blue +" Error ".red + "#".blue);
    console.log(error.stack?.slice(0,500))

});

process.on("unhandledRejection", async (reason: unknown, promise: Promise<unknown>)=>{ console.log(reason, promise) });


