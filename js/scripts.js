$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

    $(".yourLetter").show();

    event.preventDefault();
  });
});
