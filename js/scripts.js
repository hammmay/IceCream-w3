$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstInput = $("input#first").val();
    var secondInput = $("input#second").val();
    var thirdInput= $("input#third").val();

    var formArray = [firstInput, secondInput, thirdInput];
//create an array and add 3 items to array

    console.log(formArray);
//simply shows the array in the consule

    formArray.forEach(function(form) {
      $("#list").append("<li>" + form + "</li>")
    });
//puts in a loop to put in an append on the list for each input

    event.preventDefault();
  });
});
