$(document).ready(()=>{
    $("form[name=signup]").submit((eve)=>{
        eve.preventDefault()
        $("#errFname").hide()
        $("#errLname").hide()
        $("#errPemail").hide()
        $("#errSemail").hide()
        $("#errPass").hide()
        $("#errCpass").hide()
        $("#errMob").hide()
        $("#errProfile").hide()
        $("#errLocation").hide()

        var fname=$("input[name=firstName]").val()
        var lname=$("input[name=lastName]").val()
        var pri=$("input[name=primary]").val()
        var alter=$("input[name=alternate]").val()
        var pass=$("input[name=choose]").val()
        var con=$("input[name=confirm]").val()
        var mob=$("input[name=mobile]").val()
        //var type=$("input[name=type]:checked")
        var loc=$("select[name=location]").val()

        var valid=true

        // form validation
        if(fname.length==0)
        {
            $("#errFname").html("<br/>FirstName shouldn't empty")
            $("#errFname").show()
            valid=false
        }
        if(lname.length==0)
        {
            $("#errLname").html("<br/>LastName shouldn't empty")
            $("#errLname").show()
            valid=false
        }
        if(pri.length==0){
            $("#errPemail").html("<br/>Primary email shouldn't empty")
            $("#errPemail").show()
            valid=false
        }
        if(alter.length==0){
            $("#errSemail").html("<br/>Alternate email shouldn't empty")
            $("#errSemail").show()
            valid=false
        }
        if(pass.length==0){
            $("#errPass").html("<br/>Password shouldn't empty")
            $("#errPass").show()
            valid=false
        }
        if(con.length==0){
            $("#errCpass").html("<br/>Confirm Password shouldn't empty")
            $("#errCpass").show()
            valid=false
        }
        if(mob.length==0){
            $("#errMob").html("<br/>Mobile number shouldn't empty")
            $("#errMob").show()
            valid=false
        }
        if($("input[name=type]:checked").length==0){
            $("#errProfile").html("<br/>Profile type shouldn't empty")
            $("#errProfile").show()
            valid=false
        }
        if(loc=="Select location"){
            $("#errLocation").html("<br/>Location shouldn't empty")
            $("#errLocation").show()
            valid=false
        }

        // data validation
        if((/[0-9!@#$%^&*()]/).test(fname)){
            $("#errFname").html("<br/>FirstName shouldn't contains numbers or special characters")
            $("#errFname").show()
            valid=false
        }
        if((/[0-9!@#$%^&*()]/).test(lname)){
            $("#errLname").html("<br/>LastName shouldn't contains numbers or special characters")
            $("#errLname").show()
            valid=false
        }
        if((/[a-zA-Z]/).test(mob)||(/[0-9]{11}/).test(mob)){
            $("#errMob").html("<br/>Invalid mobile number")
            $("#errMob").show()
            valid=false
        }
        if(pri.indexOf("@")<2||(pri.lastIndexOf(".")-pri.indexOf("@"))<3){
            $("#errPemail").html("<br/>Primary email isn't valid")
            $("#errPemail").show()
            valid=false
        }
        if(alter.indexOf("@")<2||(alter.lastIndexOf(".")-alter.indexOf("@"))<3){
            $("#errSemail").html("<br/>Alternate email isn't valid")
            $("#errSemail").show()
            valid=false
        }
        if(pri==alter){
            $("#errPemail").html("<br/>Primary and Alternate email shouldn't same")
            $("#errSemail").html("<br/>Primary and Alternate email shouldn't same")
            $("#errSemail").show()
            $("#errPemail").show()
            valid=false
        }
        if(!(/(?=.*[0-9])(?=.*[!@#$^])[A-Za-z0-9!@#$^]{8,}/).test(pass)){
            $("#errPass").html("<br/>Invalid password")
            $("#errPass").show()
            valid=false
        }
        if(!(/(?=.*[0-9])(?=.*[!@#$^])[A-Za-z0-9!@#$^]{8,}/).test(con)){
            $("#errCpass").html("<br/>Invalid password")
            $("#errCpass").show()
            valid=false
        }
        if(pass!=con){
            $("#errPass").html("<br/>Password mismatch")
            $("#errCpass").html("<br/>Password mismatch")
            $("#errPass").show()
            $("#errCpass").show()
            valid=false
        }

        return valid

    })
})