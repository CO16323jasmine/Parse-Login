alert("Hi");


$(function() {
 
    Parse.$ = jQuery;
 
Parse.initialize("2a250e47e9f9526de402bd9b17fc05a9dd9894f2");
Parse.serverURL = 'http://18.188.102.180:80/parse/'

    // Replace this line with the one on your Quickstart Guide Page
    //Parse.initialize("2a250e47e9f9526de402bd9b17fc05a9dd9894f2", "81ae3112bcc0d088382a9d7805fd0002ac99ecf3");
 
    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject.save({foo: "bar"}).then(function(object) {
    //   alert("yay! it worked");
    // });



// var user = new Parse.User();
// user.save({
//   username: 'Ashlin',
//   email: 'ashlinsiby@gmail.com',
//   password: '123'
// }, {
//   success: function(response) {
//     alert('New object create with success! ObjectId: ' + response.id + `, ` + user.get('email'));
//   },
//   error: function(response, error) {
//     alert('Error: ' + error.message);
//   }
// });

// });


$('#sign-in').on('submit', function(e) {
 
    // Prevent Default Submit Event
    e.preventDefault();
 
    // Get data from the form and put them into variables
    var data = $(this).serializeArray(),
        username = data[0].value,
        password = data[1].value;
 
    // Call Parse Login function with those variables
    Parse.User.logIn(username, password, {
        // If the username and password matches
        success: function(user) {
            alert('Welcome!');
        },
        // If there is an error
        error: function(user, error) {
            console.log(error);
        }
    });
 
});
    });

