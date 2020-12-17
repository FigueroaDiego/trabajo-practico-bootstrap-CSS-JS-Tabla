
let table = document.getElementById("tablaBody");
let btnNuevo = document.getElementById("btnNuevo");

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
  tablaProductos = $("#tablaProductos").DataTable({
    "language": {
      "lengthMenu": "Mostrar _MENU_ registros",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sSearch": "Buscar:",
      "oPaginate": {
          "sFirst": "Primero",
          "sLast":"Último",
          "sNext":"Siguiente",
          "sPrevious": "Anterior"
       },
       "sProcessing":"Procesando...",
  }
});

  
    
  
  let fila; //capturar la fila para editar o borrar el registro
    //botón EDITAR    
  $(document).on("click",".btnEditar",function(){
    fila = $(this).closest("tr");
    tipo = fila.find('td:eq(0)').text();
    tarjeta = fila.find('td:eq(1)').text();
    rendimiento = parseInt(fila.find('td:eq(2)').text());
    arquitectura = fila.find('td:eq(3)').text();
    año = parseInt(fila.find('td:eq(4)').text());
    consumo = fila.find('td:eq(5)').text();



    
    $("#tipo-producto").val(tipo);
    $("#tarjeta-producto").val(tarjeta);
    $("#rendimiento-producto").val(rendimiento);
    $("#arquitectura-producto").val(arquitectura);
    $("#año-producto").val(año);
    $("#consumo-producto").val(consumo);
    opcion = 2; //editar
    
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar placa");            
    $("#modalTable").modal("show");  
    
  });
  
  //botón BORRAR
  $(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    tipo = $(this).closest("tr").find('td:eq(0)').text();
    opcion = 3 //borrar
    let respuesta = confirm("¿Está seguro de eliminar el registro: "+tipo+"?");
    if(respuesta){
        $.ajax({
            url: "/tabla.json",
            type: "POST",
            dataType: "json",
            data: {opcion:opcion, tipo:tipo},
            success: function(){
              tablaProductos.row(fila.parents('tr')).remove().draw();
            }
        });
    }   
  });
  $("#formProductos").submit(function(e){
    e.preventDefault();    
    tipo = $.trim($("#tipo-producto").val());
    tarjeta = $.trim($("#tarjeta-producto").val());
    rendimiento = $.trim($("#rendimiento-producto").val());
    arquitectura = $.trim($("#arquitectura-producto").val());
    año = $.trim($("#año-producto").val());
    consumo = $.trim($("#consumo-producto").val());
    $.ajax({
        url: "/tabla.json",
        type: "POST",
        dataType: "json",
        data: {tipo:tipo, tarjeta:tarjeta, rendimiento:rendimiento, arquitectura:arquitectura, año:año, consumo:consumo},
        success: function(data){  
            console.log(data);
            tipo = data[0].tipo;            
            tarjeta = data[0].tarjeta;
            rendimiento = data[0].rendimiento;
            arquitectura = data[0].arquitectura;
            año = data[0].año;
            consumo = data[0].consumo;
            if(opcion == 1){tablaProductos.row.add([tipo,tarjeta,rendimiento,arquitectura,año,consumo]).draw();}
            else{tablaProductos.row(fila).data([tipo,tarjeta,rendimiento,arquitectura,año,consumo]).draw();}            
        }        
    });
    $("#modalTable").modal("hide");    
  
  });    

});    



  