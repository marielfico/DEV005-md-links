//validar ruta
const fs=require('fs');
const path= require('path');

//Validar ruta
let  filesMd=[];
const validRoute=(route)=>{
   //console.log(route);
   if(fs.existsSync(route)){
      //console.log('la ruta existe: '+ route)
       pathsMd(route) ;
       return filesMd;
   }
}

const pathsMd=(route)=>{  
      if(fs.statSync(route).isFile()){
         //console.log('Es archivo: '+ route);
         if(path.parse(route).ext==='.md'){
             filesMd.push(route); 
         }
      }
      
      if(fs.statSync(route).isDirectory()){
         //console.log('es directorio: '+route)
         const newDirectory=fs.readdirSync(route);
            newDirectory.forEach(element=>{
               let newDir=path.parse(route).dir+'/'+path.parse(route).base+'/'+element;
               pathsMd(newDir);
            })
      }
}

module.exports={
   validRoute,
}
