//const validateLink  = require('../src/validateLink.js');
const {mdLinks}=require('../src/index');




describe('mdLinks', () => {
  // it('Deberia devolver una función',()=>{
  //   expect(typeof mdLinks).toBe( 'function');
  // });
  test('Debería devolver una promesa', () => {
    const path = 'C:/Users/DREP/Downloads/carpeta md/DEPLOYMENT.md'
    const option={validate:true}
    //return (mdLinks(path, option).then(links=>{
      return expect (mdLinks(path, option)).resolves.toBe('peanut butter');
      //expect (links).toBe('peanut butter')
      //expect(Array.isArray(links).toBe(true));
  //  }));
  });
  test('Debería devolver un error', () => {
    const path = 'C:/Users/DREP/Downloads/carpeta md/DEPLOYMENT.m'
    const option={validate:true}
    //return (mdLinks(path, option).then(links=>{
      return expect (mdLinks(path, option)).rejectes.toMatch('error');
      //expect (links).toBe('peanut butter')
      //expect(Array.isArray(links).toBe(true));
  //  }));
  });


  // it('Debe devolver un array de objetos',()=>{
  //   const link='https://www.theodysseyonline.com/road-trips-worthwhile'
  //   expect(validateLink(link)).toBe('object')
  // })

});
