//Libreria markdown-it
const markdownIt = require('markdown-it');
const md = new markdownIt();
//Libreria JSDOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
//const {JSDOM}=require('jsdom')
const { validRoute} = require ("./path.js") 
const {readFile, link}=require('fs')
const axios = require('axios')


let sumString=0;
let arrayLinks=[];

const mdLinks=(path, option)=>{
  return new Promise((resolve, reject)=>{
    const result=validRoute(path);  
    if(typeof result==='object'){       
    console.log('RESULTADO'+ result); 
      const links1=(result)=>{
        return result.map(file=>readFileMd(file));
      };     
      Promise.all(links1(result)).then((readFileResult)=>{
        console.log('ESTOS SON LOS RESULTADO: '+readFileResult)
        resolve (readFileResult);
      })  ;    
    }else{
      reject('La ruta no existe reject');
    }
  })
}
//leer los archivos MD
const readFileMd= (fileMds)=>{
  readFile(fileMds,'utf8',(err, data) => {
    if (err) throw err;
    const arraysL=searchLink(data, fileMds);
    console.log(arraysL);
  })
}
//console.log('ESTOS SON LOS MD:'+readFileMd)
  // return searchLink(fileMds=>{
  //   readFile((fileMds.toString())) 
  //  .then((data)=>searchLink(data.toString()))
  // }


//Buscar Links
const searchLink= (dataString, file)=>{
  let allLinks=[];
  const content= md.render(dataString);
  const dom = new JSDOM(content);
  const {document}=dom.window;
   const links=document.querySelectorAll('a');
   links.forEach(e=>{    
    const href=e.getAttribute('href');
    const text=e.textContent;
    if (href.startsWith('https')||href.startsWith('http')){
      allLinks.push({href, text, file})
    }    
   })
   return allLinks;  
}

//readFileMd('C:/Users/DREP/Downloads/carpeta md/DEPLOYMENT.md')

// mdLinks('C:/Users/DREP/Downloads/carpeta md').then((result)=>{
//   console.log(result);
// })


readFileMd('C:/Users/DREP/Downloads/carpeta md/extra NUEVA.md')

// .then(fileMds=>{
  
// return arrayLinks;
// })

//validar los links
// .then(links=>{
//   //Validate the option
//   if(option==true){
//     links.forEach(link=>{
//       axios.get(links)
//       .then(res=>{console.log(res)})
//       .catch(error=>{console.log(error)})
//     })  
//   }
// })
// .catch(error=>{
//   console.log(error)
// })

module.exports = {
  mdLinks,
}