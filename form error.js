$(document).ready(()=>{
    $("form[name=signup]").submit((eve)=>{
        $("#errfirstName").hide()
        $("#errlastName").hide()
        $("#erremail").hide()
        $("#errmobile").hide() 
        $("#errwhats").hide()
        $("#erraddress").hide()
        $("#erraadhar").hide()
        $("#errpolicy").hide()
        $("#errfile").hide()
        $("#errtype").hide()

        var fname=$("input[name=firstName]").val()
        var lname=$("input[name=lastName]").val()
        var email=$("input[name=email]").val()
        var mob=$("input[name=mobile]").val()
        var wats=$("input[name=whatsapp]").val()
        var add=$("input[name=Address]").val()
        var aadhar=$("input[name=Aadhar]").val()
        var pan=$("input[name=Pan]").val()
        var types=$("input[name=type]:checked")
        //var policy=$("select[name=policy name]").val()

        var valid=true

        // form validation
        if(fname.length==0){
            $("#errfirstName").html("<br/>FirstName shouldn't empty")
            $("#errfirstName").show()
            valid=false
        }
        if(lname.length==0){
            $("#errlastName").html("<br/>LastName shouldn't empty")
            $("#errlastName").show()
            valid=false
        }
        if(email.length=0){
            $("#erremail").html("<br/>email shouldn't empty")
            $("#erremail").show()
            valid=false
        }
        if(mob.length==0){
            $("#errmobile").html("<br/>Mobile no. shouldn't empty")
            $("#errmobile").show()
            valid=false
        }
        if(wats.length==0){
            $("#errwhats").html("<br/>Whatsapp no. shouldn't empty")
            $("#errwhats").show()
            valid=false
        }
        // if(add.length==0){
        //     $("#erraddress").html("<br/>Address shouldn't empty")
        //     $("#erraddress").show()
        //     valid=false
        // }
        if(aadhar.length==0){
            $("#erraadhar").html("<br/>Aadhar no. shouldn't empty")
            $("#erraadhar").show()
            valid=false
        }
        if(pan.length==0){
            $("errpan").html("<br/>Pan no. shouldn't empty")
            $("errpan").show()
            valid=false
        }
        // if(policy=="Select Policy"){
        //     $("#errpolicy").html("<br/>Policy name shouldn't empty")
        //     $("#errpolicy").show()
        //     valid=false
        // }
        if($("input[name=type]:checked").length==0){
            $("#errtype").html("<br/>Policy type shouldn't empty")
            $("#errtype").show()
            valid=false
        }
        // data validation
        if((/[0-9!@#$%^&*()]/).test(fname)){
            $("#errfirstName").html("<br/>FirstName shouldn't contains numbers or special characters")
            $("#errfirstName").show()
            valid=false
        }
        if((/[0-9!@#$%^&*()]/).test(lname)){
            $("#errlastName").html("<br/>LastName shouldn't contains numbers or special characters")
            $("#errlastName").show()
            valid=false
        }
        if((/[a-zA-Z]/).test(mob)||(/[0-9]{11}/).test(mob)){
            $("#errmobile").html("<br/>Invalid mobile number")
            $("#errmobile").show()
            valid=false
        }
        if((/[a-zA-Z]/).test(wats)||(/[0-9]{11}/).test(wats)){
            $("#errwhats").html("<br/>Invalid Whatsapp number")
            $("#errwhats").show()
            valid=false
        }
        if(email.indexOf("@")<2||(email.lastIndexOf(".")-email.indexOf("@"))<3){
            $("#erremail").html("<br/>email id isn't valid")
            $("#erremail").show()
            valid=false
        }
        if((/[a-zA-Z]/).test(aadhar)||(/[0-9]{11}/).test(aadhar)){
            $("#erraadhar").html("<br/>Invalid aadhar number")
            $("#erraadhar").show()
            valid=false
        }
        if(!(/[a-zA-Z0-9]/).test(mob)){
            $("#errmobile").html("<br/>Invalid mobile number")
            $("#errmobile").show()
            valid=false
        }
        return valid

    })
})