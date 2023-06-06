#!/usr/bin/env nodo
const {mdLinks} = require('./index.js')

const path=process.argv[2];
const option={validate:true, option1: process.argv[3], option2:process.argv[4]};
// const [,,,...args]=process.argv;
// console.log(`${args}`)
// const n1=`${args[0]}`;
// const n2=`${args[1]}`;
// console.log(n1, n2)
//Validate
const validar=(links)=>{
    console.log('ESTAS EN --validate')
    links.map(e=>{
        console.log(e.file+' '+ e.href+' '+ e.ok +' '+ e.status+ ' '+ e.text.substring(0,51));
    })
}
//stats
const estadisticas=(links)=>{
    console.log('ESTAS EN --stats');
        //Get unique links
        const linkFilter=links.map(e=>e.href);
        let newLinks=[];
        for(let i=0; i<linkFilter.length; i++){
            if(!newLinks.includes(linkFilter[i])){
                newLinks.push(linkFilter[i])
            }
        }
        //get broken links
        const broken=links.filter(e=>e.ok==='fail')

        //Show stats
        console.log('Total: '+ links.length);
        console.log('Unique: '+ newLinks.length);
        console.log('Broken: '+ broken.length);
}

mdLinks(path, option)
.then((links)=>{
    //console.log(links);
    if(option.option1==='--validate' && option.option2==='--stats' || option.option1==='--stats' && option.option2==='--validate' ){
        validar(links);
        estadisticas(links);
    }else if(option.option1==='--validate'){
        validar(links);
    }else if(option.option1==='--stats'){
        estadisticas(links)
    } else{
        validar(links)
    }
})
.catch((error)=>{
console.log(error);
});







