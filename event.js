document.getElementById('form').addEventListener('submit',function(event) {
    event.preventDefault();

    
    var username = document.getElementById('username').value;
    var collegename = document.getElementById('collegename').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var phoneno = document.getElementById('phoneno').value;
    var course = document.getElementById('course').value;


    alert('Registration successful!');


});





