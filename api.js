var ID = 0;

$( document ).ready(function() {  
  $("#add-container").hide(); 
  loadTable(); 
  getData();
  addEmployees();
  removeEmployees();
});

//function used to show input for add new employee
function showAddParameters() {
  $("#add-container").show();
}

// function used to create the table structure on the page laod 
function loadTable () {
  $("#container").append('<table id="table"><tr><th colspan="3">Manage Employees</th><th colspan="2"><button class="btn btn-primary" onclick="showAddParameters()">Add New Employees</button></th></tr><tr><td>Name</td><td>Surname</td><td>Email</td><td colspan="2">Phone</td></tr></table>');
}

// function to get all the data from db
function getData(){
  $.ajax({
      url: 'http://localhost:8080/api/tutorial/1.0/employees',
      type: 'get',
      contentType: 'application/json',
      accept: "*/*",
      success: function(data){
        for (let i = 0; i < data.length; i++) { 
          ID += 1;
          $('#table').append("<tr><td>" + data[i]["firstName"] + "</td><td>"+ data[i]["lastName"] + "</td><td>" + data[i]["email"] + "</td><td>"+ data[i]["phone"] + "</td><td><button class=\"btn btn-warning btn-delete\" id=\"" + data[i]["employeeId"] + "\">REMOVE</button></tr>");    
        } 
      },
      error: function(errorThrown){
        console.log( errorThrown );
      }
  });
}

// function to add an employess to db
function addEmployees(){
  $("#btn-add").click(function() {
    var employee = {
      "employeeId" : ID + 1,
      "firstName" : $("#first-name").val(),
      "lastName" : $("#last-name").val(),
      "email" : $("#email").val(),
      "phone" : $("#phone").val(),
    };

    $.ajax({
      url: 'http://localhost:8080/api/tutorial/1.0/employees',
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify(employee),
      accept: '*/*',
      success: function(){
        alert("employee insert correctly");
        location.reload();
      },
      error: function(errorThrown){
        console.log( errorThrown );
      }
    });
  });
}

// function to remove an employees from db
function removeEmployees(){
  $(".btn-delete").click( function() {   
    alert("dentro la funzione") //solo per debug
    var id =  $('.btn-delete').attr("id");
    alert("preso l'id " + id);
    $.ajax({
      url: 'http://localhost:8080/api/tutorial/1.0/employees/' + id,
      type: 'delete',
      contentType: 'application/json',
      data: JSON.stringify(),
      accept: "*/*",
      success: function(){
        console.log( 'employee remove correctly' );
        location.reload();
      },
      error: function(errorThrown){
        console.log( errorThrown );
      }
    });
  });

  
}