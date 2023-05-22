

let miInicio=`
<article class="container">
        <h1>Mujeres</h1>
        <div class="productos">
`
for(let elemento of dato){
    //Voy iterando y agregando las tarjetas
    //Pego lo que tengo dentro de Tarjeta 1 del index.html
    miInicio = miInicio + `       
            
                <div class="producto">
                    <div class="imagen" style="background-image: url('${elemento.imagen}');"></div>
                        <h2> ${elemento.name} </h2>
                        <p class="descripcion"> ${elemento.talle}  </p>
                        <div class="precio"> ${elemento.precio} </div>
                        <button onclick="guardarLocalStorage( '${elemento.name}')">Comprar</button>
                </div>
            
    `
}

console.log(miInicio)
document.querySelector("main").innerHTML=miInicio



