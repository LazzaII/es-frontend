var ID = 0;

$( document ).ready(function() {   
  loadTable(); 
  getData();
  addEmployees();
  removeEmployees();
});

//function used to show input for add new employee
function showAddParameters() {
  $("#container").append('<div><input type="text" id="first-name" placeholder="first name" class="form-control w-25 m-2 "><input type="text" id="last-name" placeholder="last name" class="form-control w-25 m-2"><input type="email" id="email" placeholder="email" class="form-control w-25 m-2"><input type="text" id="phone" placeholder="phone" class="form-control w-25 m-2"><input type="button" class="btn btn-primary m-2" id="btn-add" value="Add"></div>');
}

// function used to create the table structure on the page laod 
function loadTable () {
  $("#container").append('<table class="table-secondary" id="table"><tr><th colspan="3">Manage Employees</th><th colspan="2"><button class="btn btn-primary" onclick="showAddParameters()">Add New Employees</button></th></tr><tr><td>Name</td><td>Surname</td><td>Email</td><td colspan="2">Phone</td></tr></table>');
}

// function to get all the data from db
function getData(){
  $.ajax({
      url: 'http://localhost:8080/api/tutorial/1.0/employees',
      type: 'get',
      contentType: 'application/json',
      data: JSON.stringify(),
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
      },
      error: function(errorThrown){
        console.log( errorThrown );
      }
    });
  });
}

// function to remove an employess from db
function removeEmployees(){
  $(".btn-delete").click( function() {   
    var id =  $('.btn-delete').attr("id");

    $.ajax({
      url: 'http://localhost:8080/api/tutorial/1.0/employees/' + id,
      type: 'delete',
      contentType: 'application/json',
      data: JSON.stringify(),
      accept: "*/*",
      success: function(){
        console.log( 'employees remove correctly' );
      },
      error: function(errorThrown){
        console.log( errorThrown );
      }
    });
  });

  
}