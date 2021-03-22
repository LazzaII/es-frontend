$( document ).ready(function() {   
  loadTable(); 
  getData();
  addEmployees();
  removeEmployees();
});

// function that create the table structure on the page laod 
function loadTable () {
  $("#container").append("<table><tr><th colspan=\"4\">Manage Employees <button class=\"btn btn-primary btn-add\">Add New Employees</button></th></tr><tr id=\"table-header\"><td>Name</td><td>Surname</td><td>Emaill</td><td>Phone</td></tr></table>");
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
        for (let i = 0; i < data.length; i++) { // for that get in output all employees
            
          $('#table-header').append("<tr id=" + data.result["employeeId"] + "><td>" + data.result["firstName"] + "</td><td>"+ data.result["lastName"] + "</td><td>" + data.result["email"] + "</td><td>"+ data.result["phone"] + "</td><td><button class=\"btn btn-warning btn-delete\" id=\"" + data.result["id"] + "\">REMOVE</button>");
        }
      },
      error: function(errorThrown){
        console.log( errorThrown );
      }
  });
}

// function to add an employess to db
function addEmployees(){
  $(".btn-add").click();
}

// function to remove an employess from db
function removeEmployees(){
  $(".btn-delete").click( function deleteEmployees() {   
    var id =  $('.btn-delete').id;
    $.ajax({
      url: 'http://localhost:8080/api/tutorial/1.0/employees/' + id,
      type: 'get',
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