
  var arreglo123 = [] ;

function menuPrincipal()
{
  
   
    do{

    /*var se utiliza para declara una variable inicializando con un valor*/
    var  menu = parseInt (prompt(
        `INGRESE LA OPCION REQUERIDA:
        1.- PARA INGRESAR LOS ELEMENTOS
        2.- PARA MOSTRAR LOS ELEMENTOS
        3.- ORDENAR
        4.- DE MAYOR A MENOR ELEMENTO
        5.- SALIR
    `))
    /*console.log(menu);*/

        switch(menu)
        {
 
         case 1:
             console.log("BIENVENIDO CASO 1");
             var n = parseInt(prompt("INGRESE EL TAMAÑO"));
             ingresarElementos(arreglo123,n);

             break;
         case 2:
                 console.log("BIENVENIDO CASO 2");
                 console.log(arreglo123);
             break;
         case 3:
             console.log("BIENVENIDO CASO 3");
             
             break;
         case 4:
         console.log("BIENVENIDO CASO 4");
         
             break;
         case 5:
                    console.log("ADIOS");
                    
              break;  
         default:
             Console.log("OPCION INCORRECTA");
             break;
     }

    } while(menu != 5) ;
    
    }

menuPrincipal();

function ingresarElementos(arreglo , n)
{

    for (var i= 0 ; i<n; i++){
        var datos = parseInt(prompt("INGRESAR LOS ELEMENTOS"));
        arreglo[i]= datos;

    }
}



