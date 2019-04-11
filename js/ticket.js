$(function () {

   $("#ticketbooking").on("submit", function (evt) {
       //Seat number checking
       if ( !($("[name='seats']").val() > 0 && $("[name='seats']").val() < 200)) {
           $("#error").text("Seats number must be between 1 to 199");
           evt.preventDefault();
       }
   })
});