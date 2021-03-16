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
          for (let i = 0; i < data.length; i++) { // for that get in output all employees
              
            $( ".table-header" ).append( "<tr><td>" + data.result["firstName"] + "</td><td>"+ data.result["lastName"] + "</td><td>" + data.result["email"] + "</td><td>"+ data.result["phone"] + "</td><td><button class=\"btn btn-warning\" onclick=\"removeEmployees(this)\">REMOVE</button>");
          }
        },
        error: function( jqXhr, textStatus, errorThrown ){
          console.log( errorThrown );
        }
    });
}
  

function addEmployees(){

}

function removeEmployees(button){

}