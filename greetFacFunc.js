function Greetings(greet) {

    var objMap =  greet || {};

    function setName(name) {
        var lowerObj = name.toLowerCase()

        if (objMap[lowerObj] === undefined) {
            objMap[lowerObj] = 0;
        }
    }

    function langMessages(name, lang) {
        if (lang === "IsiXhosa") {
            return "Molo " + name + "!"
        }
        if (lang === "English") {
            return "Hello " + name + "!"
        }
        if (lang === "Afrikaans") {
            return "Halo " + name + "!"
        }
    }

    function getNames() {
        return objMap;
    }

    function counter() {
        return Object.keys(objMap).length
    }

    function errorHandling(name, lang) {
        
         }
        if (!name) {
            return "Please enter the name"
        }
        if (!lang) {
            return "Please select the language"
        } 
        if (!name && !lang) {
            return "Please enter the name and select language"
    }


    function clearObj() {
        objMap = {}
    }

    return {
        setName,
        getNames,
        counter,
        langMessages,
        clearObj,
        errorHandling
    }
}