$( document ).ready(function() {    
    getData();
});

function getData(){
    $.ajax({
        url: 'http://localhost:8080/api/tutorial/1.0/employees',
        type: 'get',
        contentType: 'application/json',
        data: JSON.stringify(),
        accept: "*/*",
        success: function( data, textStatus, jQxhr ){
          for (let i = 0; i < data.length; i++) {
              
            $( ".table-header" ).append( "" );
          }
        },
        error: function( jqXhr, textStatus, errorThrown ){
          console.log( errorThrown );
        }
    });
}
    


function addEmployees(){


}
