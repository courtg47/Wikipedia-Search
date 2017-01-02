$(document).ready(function() {
  
  //When submit button is clicked...
  $("#search-btn").click(function() {
    
    //Storing the value of the search box
    var entry = $("#search-frm").val();
    
    //Storing wikipedia API + the value from the search box
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + entry + "&format=json&callback=?";
    
    //Run the api through ajax
    $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function(data) {
        //Clear the text box after a search
        $("#output").html(' ');
        
        //Looping through the data arrays from wikipedia and displaying on id "output"
      for(var i = 0; i < data[1].length; i++) {
        $("#output").append("<li><a target='_blank' href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        $("#search-frm").val(' ');
      }
  
        
      },
      error: function(errorMessage) {
        alert("Sorry, but the Wikipedia search is not working right now.");
      }

    });

  });
  
  //Press enter key to submit
  $("#search-frm").keypress(function(e) {
    if(e.which == 13) {
      $("#search-btn").click();
    }
  })
              
});