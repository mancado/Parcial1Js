
//Cargar api


fetch('https://dwaapi.juvasquez88.vercel.app/letters')
    .then(res =>res.json() )
    .then(lenguajeseñas=> {

        console.log(lenguajeseñas)
     

    })
    .catch(err=> {
        throw new Error(err.message)
    })
    

 //funciones para imprimir la imagen con su respectivo boton   
    function imprimirimagenE(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/e.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }


    function imprimirimagenI(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/i.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }

    function imprimirimagenL(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/l.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }
    function imprimirimagenO(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/o.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }

    function imprimirimagenR(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/r.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }

    function imprimirimagenT(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/t.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }
    function imprimirimagenV(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/v.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }
    function imprimirimagenW(){
        var url="https://cdn.statically.io/gh/julianvasquez/letters/28c1fbb7/w.png";
        document.getElementsByTagName("img")[0].setAttribute("src",url)

    }


