import 'colors';
import { centrar } from './assets/config';
import 'module-alias/register';
import { addAliases  } from "module-alias"; 


addAliases({
    "@models": __dirname + "/libs/models/base/index",
    "@client": __dirname + "/libs/models/client",
})


//Errores

process.on("uncaughtException",(error: Error)=>{ 
    centrar("#".blue +" Error ".red + "#".blue);
    console.log(error.stack?.slice(0,500))

});

process.on("unhandledRejection", async (reason: unknown, promise: Promise<unknown>)=>{ console.log(reason, promise) });


