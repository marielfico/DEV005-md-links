const {mdLinks} = require('./index.js')

//ruta absoluta: 'C:/Users/DREP/Documents/LABORATORIA/Proyectos/4to Proyecto MD Link/DEV005-md-links/Learnyounode/program.js'
//ruta relativa: 'Learnyounode/program.js'   Learnyounode/prueba.txt
//C:/Users/DREP/Downloads/carpeta md
//C:/Users/DREP/Downloads/extra.md
mdLinks('C:/Users/DREP/Downloads/carpeta md')
.then((respuesta)=>{
console.log(respuesta);
})
.catch((error)=>{
console.log(error);
});
