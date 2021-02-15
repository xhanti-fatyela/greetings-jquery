$(function () {

    var namesGreeted;
    if (localStorage['names']) {
        namesGreeted = JSON.parse(localStorage.getItem('names'));
    }
    var greetedNames = Greetings(namesGreeted)

    $(".greetBtn").on("click", function () {

        var name = $(".greetText").val()

        var addToLocal = greetedNames.setName(name)
        // var clear = greetedNames.clearObj()

        $(".greetRadio")
        var checked = $("input:checked").val()
        if (addToLocal !== "") {

            $(".greetMessage").text(checked + name);
            $(".myCounter").html(greetedNames.counter())
            localStorage.setItem('names', JSON.stringify(greetedNames.getNames()));
        }

        $(".listallBtn").on("click", function () {
            const names = greetedNames.getNames()
          for (var name in names){
              const perName = name
              const perCount = names[perName]
              $(".listOfnames").append("<div>" + PerName + "has been greeted" + perCount + " times" + "</div>")
          } 
            // $(".names").html(JSON.stringify(greetedNames.getNames()))
        

        })

        $(".resetBtn").on("click", function () {

            localStorage.clear();
            // greetedNames.resetBtn()
            location.reload()



        })





    })



});