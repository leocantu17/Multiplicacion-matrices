const botonResultado=document.querySelector('#resultado');

botonResultado.addEventListener('click',multiplicarMatrices);

function multiplicarMatrices(){
  const rowsA=parseInt(document.getElementById('rowsA').value);
  const colsA=parseInt(document.getElementById('colsA').value);
  const rowsB=parseInt(document.getElementById('rowsB').value);
  const colsB=parseInt(document.getElementById('colsB').value);
  const matrizRes=[];

  const matrizA=obtenerMatriz('matriz1',rowsA,colsA);
  const matrizB=obtenerMatriz('matriz2',rowsB,colsB);

  if(colsA==NaN||rowsA==NaN||colsB==NaN||rowsB==NaN){
    alert("Necesitas ingresar todos los valores de las columas y filas de la matriz")
}
else if(colsA!=rowsB){
    alert("No se puede multiplicar esta matriz")
}

else{
for(let i=0;i<rowsA;i++){
    matrizRes[i]=[];
    for(let j=0;j<colsB;j++){
        let suma=0;
        for(let k=0;k<colsA;k++){
            suma+=matrizA[i][k]*matrizB[k][j];
    }
    matrizRes[i][j]=suma;
  }
}
for(let i=0;i<rowsA;i++){
    
    for (let j=0;j<colsB;j++){
document.getElementById('matrizresultado').value+=matrizRes[i][j]+" ";
       
    }
    document.getElementById('matrizresultado').value+="\n";
}

}
}

function obtenerMatriz(id,rows,cols){
    const matriz=[];
    const inputText=document.getElementById(id).value.split("\n");
    for(let i=0;i<rows;i++){
        matriz[i]=[];
        const fila=inputText[i].split(" ");
    for(let j=0;j<cols;j++){
        matriz[i][j]=parseInt(fila[j]);
    }
    }
    return matriz;
} 




