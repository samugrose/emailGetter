$(".submitButton").on("click", function() {
    event.preventDefault();
    var textCSV = $(".formEntry").val();
    $(".formEntry").attr("value", "cats");
    

    //expect format of CSV, looking for <> specifically
    var inputVals = textCSV.split("<"); //gives us sam@sam.com>
        //iterate thru array and console.log
        //for each element of array you can just split again with > as the selector, creating a single unit array with the entry that is the full email, if it contains "@"
        
    var emailsArray = [];
    for (var i = 0; i < inputVals.length; i++) {
        var word = inputVals[i];
        if (word.includes("@")) {
            //console.log(word + " has @")
            var newWordArray = word.split(">");
            console.log(newWordArray[0]);
            emailsArray[i] = newWordArray[0]; //always gonna be the email
        }
        
        
        // console.log(inputVals[i]);
        // var length = word.length - 1; //should get t;he last > off
        // var subWord = word.substring(0, length);
        // console.log(subWord)
    }
    var result = "";
    for (var j = 1; j < emailsArray.length; j++) {
        result += emailsArray[j];
        
        result += ", ";
    }
    result = result.substring(0, result.length - 2)

        console.log(result);
    //console.log(emailsArray)
    
})