import sumar from "./App.js";

describe("Sumar", () => {
  it("recibe un caracter e interpreta",()=>{
      expect(interpretarCaracter("A")).toEqual(1);
  });
  it("recibe un caracter e interpreta",()=>{
    expect(interpretarCaracter("I")).toEqual(1);
  });
});

function interpretarCaracter(caracter){
  let posicion=0;
  if(caracter=="A"){
    posicion=posicion+1;
  }
  if(caracter=="I"){
    posicion=posicion+1;
  }
  return posicion;
}


