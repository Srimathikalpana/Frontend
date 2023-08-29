$(document).ready(()=>{
    $("form[name=login]").submit((eve)=>{
        eve.preventDefault()
        $("#errusername").hide()
        $("#errpassword").hide()

        var user=$("input[name=Username]").val()
        var pass=$("input[name=password]").val()
        
        var valid=true

        if (user.length<=0){
            $("#errusername").html("*Username shouldn't be empty")
            $("#errusername").show()
            valid=false
        }
        if (pass.length==0){
            $("#errpassword").text("*Password shouldn't be empty")
            $("#errpassword").show()
            valid=false
        }

        if(!("Thirumalairaja"==user)){
            $("#errusername").html("*Invalid Username ")
            $("#errusername").show()
            valid=false  
        }
        if(!("Kutty@123"==pass)){
            $("#errpassword").html("*Invalid Password")
            $("#errpassword").show()
            valid=false
        }
        if(user=="Thirumalairaja"&&pass=="Kutty@123")
        {
            $("#enter").dblclick(()=>{
                $(location).prop("href","site.html")
            })
         }
        return valid
    })
})