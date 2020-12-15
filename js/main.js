let table = document.getElementById("tablaBody");


function traer(){    
    fetch('/tabla.json')
       .then(res=> res.json())
       .then(datos => {
           tabla(datos)
       })
}

function tabla(datos){
    table.innerHTML = ''
    for(let valor of datos){
        table.innerHTML +=`<tr>
                      <th scope="row">${valor.tipo}</th>
                      <td>${valor.tarjeta}</td>
                      <td>${valor.rendimiento}</td>
                      <td>${valor.arquitectura}</td>
                      <td>${valor.año}</td>
                      <td>${valor.consumo}</td>
                      <td>
                        <div class="text-center">
                          <div class="btn-group">
                            <button class="btn btn-primary btnEditar">Editar</button>
                            <button class="btn btn-danger btnBorrar">Borrar</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    `
    }
}
