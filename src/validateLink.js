const axios = require('axios')

const validateLink=(dataLinks)=>{
  return new Promise((resolve, reject)=>{
        axios.get(dataLinks.href)
        .then(res=>{
          //if(res.)
          //console.log( {href:dataLinks.href, text:dataLinks.text, file:dataLinks.file, status:res.request.socket._httpMessage.res.statusCode, ok:res.request.socket._httpMessage.res.statusMessage });
          resolve ({href:dataLinks.href, 
            text:dataLinks.text, 
            file:dataLinks.file, 
            status:res.request.socket._httpMessage.res.statusCode, 
            ok:res.request.socket._httpMessage.res.statusMessage });
        })
        .catch(error=>{
          //console.log( {href:dataLinks.href, text:dataLinks.text, file:dataLinks.file,  status:error.request.socket._httpMessage.res.statusCode, ok:'fail'});
          reject ({href:dataLinks.href, 
            text:dataLinks.text, 
            file:dataLinks.file,  
            status:error.request.socket._httpMessage.res.statusCode, 
            ok:'fail'});
        })  
  })
}

// validateLink(  {
//   href: 'https://v8.dev/hola',
//   file: 'C:/Users/DREP/Downloads/carpeta md/extra NUEVA.md',
//   text: 'Fuente1',
// })

//https://v8.dev/hola
//https://www.theodysseyonline.com/road-trips-worthwhile
module.exports = {
  validateLink,
}