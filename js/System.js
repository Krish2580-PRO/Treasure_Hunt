class System{

    constructor(){
        //this.name1 = null
        //this.name2 = null
        //this.name3 = null
    }

    // Add code to authenticate the given code and the access codes.
    authenticate(actualCode,enteredCode){
        if(actualCode == enteredCode)
            return true
   else
            return false
    }

}