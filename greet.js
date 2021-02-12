$(function () {
    
    var namesGreeted;
    if (localStorage['names']) {
      namesGreeted = JSON.parse(localStorage.getItem('names'));
    }
    var greetedNames = Greetings(namesGreeted)
  
    $(".greetBtn").on("click", function () {
  
      var name = $(".greetText").val()
      console.log(name)
      var addToLocal = greetedNames.setName(name)
      
      $(".greetRadio")
      var checked = $("input:checked").val()
       console.log(checked);
      if (addToLocal !== "") {
  
        $(".greetMessage").text(checked + name);
        $("#myCounter").html($(greetedNames.counter()))
        localStorage.setItem('names', JSON.stringify(greetedNames.getNames()));
      }
  
  
  
  
  
    })
  
  
  
  });