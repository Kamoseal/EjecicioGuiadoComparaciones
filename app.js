var comparation = funcion (array1, array2){
  if (array1.length !== array2.length){
    document.write("Los arreglos no tienen la msima longitud")
    return false;
  }else{
    for (var i = 0; i < array1.length; i++){
      console.log(array1[i], array2[i])
      if(array1[i] !== array2[i]){
      }
    }
    document.write("Los arreglos son iguales")
    return true;
  }
}
var arreglo1 = [1,2,3,4,5,6,7,8,9,0];
var arreglo2 = [1,2,3,4,5,6,7,8,9,0];

comparation(arreglo1,arreglo2);
