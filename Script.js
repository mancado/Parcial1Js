
//Cargar api


var ulr1;
var ulr2
var ulr3
var ulr4
var ulr5
var ulr6
var ulr7
var ulr8


fetch('https://dwaapi.juvasquez88.vercel.app/letters')
    .then(res =>res.json() )
    .then(lenguajeseñas=> {

        console.log(lenguajeseñas);

        ulr1=`${lenguajeseñas.letters[0].image}`;
        ulr2=`${lenguajeseñas.letters[1].image}`;
        ulr3=`${lenguajeseñas.letters[2].image}`;
        ulr4=`${lenguajeseñas.letters[3].image}`;
        ulr5=`${lenguajeseñas.letters[4].image}`;
        ulr6=`${lenguajeseñas.letters[5].image}`;
        ulr7=`${lenguajeseñas.letters[6].image}`;
        ulr8=`${lenguajeseñas.letters[7].image}`;
        
     

    })
    .catch(err=> {
        throw new Error(err.message)
    })
    

 //funciones para imprimir la imagen con su respectivo boton   
    function imprimirimagenE(){
        document.getElementsByTagName("img")[0].setAttribute("src",ulr1)

    }


    function imprimirimagenI(){
        document.getElementsByTagName("img")[0].setAttribute("src",ulr2)

    }

    function imprimirimagenL(){
       
        document.getElementsByTagName("img")[0].setAttribute("src",ulr3)

    }
    function imprimirimagenO(){
        
        document.getElementsByTagName("img")[0].setAttribute("src",ulr4)

    }

    function imprimirimagenR(){
        
        document.getElementsByTagName("img")[0].setAttribute("src",ulr5)

    }

    function imprimirimagenT(){
        
        document.getElementsByTagName("img")[0].setAttribute("src",ulr6)

    }
    function imprimirimagenV(){
        
        document.getElementsByTagName("img")[0].setAttribute("src",ulr7)

    }
    function imprimirimagenW(){
        
        document.getElementsByTagName("img")[0].setAttribute("src",ulr8)

    }


