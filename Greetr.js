(function(global,$){

	var Greetr = function(firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language);
    }
    
    var supportedLangs=['en','es'];
    
    var greetings = {
        en:'Hello',
        es:'Hola'
    };
    
    var formalGreetings = {
        en:'Welcome',
        es:'Welcomos'
    };
    
    Greetr.prototype = {};
    
    Greetr.init = function(firstName,lastName,language) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || "en";
    };
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
}(window,jQuery));