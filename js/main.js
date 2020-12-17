let table = document.getElementById("tablaBody");
let btnNuevo = document.getElementById("btnNuevo");
//Con el metodo fech me traigo el archivo JSON 
function traer(){    
    fetch('/tabla.json')
       .then(res=> res.json())
       .then(datos => {
           tabla(datos)
       })
}
//Se creo la funcion tabla para que todos esos datos traidos se creen en una tabla dinamica
function tabla(datos){
    table.innerHTML = ''
    for(let valor of datos){
        table.innerHTML +=`<tr>
                      <td>${valor.tipo}</td>
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
btnNuevo.addEventListener("click" , traer);


$(document).ready(function(){ 
  tablaProductos = $("#tablaProductos")

  let fila; //capturar la fila para editar o borrar el producto
    //botón EDITAR    
  $(document).on("click",".btnEditar",function(e){
    e.preventDefault
    fila = $(this).closest("tr");
    tipo = fila.find('td:eq(0)').text();
    tarjeta = fila.find('td:eq(1)').text();
    rendimiento = parseInt(fila.find('td:eq(2)').text());
    arquitectura = fila.find('td:eq(3)').text();
    año = parseInt(fila.find('td:eq(4)').text());
    consumo = fila.find('td:eq(5)').text();



    //Trate de que con el metodo value me devuelva los valores modificados 
    $("#tipo-producto").val(tipo);
    $("#tarjeta-producto").val(tarjeta);
    $("#rendimiento-producto").val(rendimiento);
    $("#arquitectura-producto").val(arquitectura);
    $("#año-producto").val(año);
    $("#consumo-producto").val(consumo);
    
    //Estilos del modal
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar placa");            
    $("#modalTable").modal("show");  
    
  });
  
  //botón BORRAR
  $(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    tarjeta = $(this).closest("tr").find('td:eq(1)').text();
    let respuesta = confirm("¿Está seguro de eliminar el producto: "+tarjeta+"?");
    if(respuesta){
      tablaProductos.row(fila.parents('tr')).remove().draw();
            }   
  });
  
  
  $("#formProductos").submit(function(e){
    e.preventDefault();    
    
    $("#modalTable").modal("hide");    
  
  });  

  //Se utiliza la funcion SetInterval para la progress bar 
  
  $("#btnNuevo").click(function(){
    let progreso = 0
    let intervalo = setInterval(function(){
      progreso = progreso + 10; 
      $("#barra").css("width", progreso + "%").attr("aria-valuenow", progreso);
      if(progreso>= 100){
        clearInterval(intervalo);
      }
    },200);
  });
  
  
  

});    



  