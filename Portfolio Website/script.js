function SendMail(){
    if(document.getElementById("fullName").value!="" && document.getElementById("email_id").value!=""&&document.getElementById("message").value!=""){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_8qw9brw", "template_e0rmrwq", params).then(function (res){
        alert("Success! "+ res.status);
    })
    document.getElementById("fullName").value = "";
    document.getElementById("email_id").value="";
    document.getElementById("message").value="";

}
}
function1543r fv3rt5y67ujk adjustHeight() {
    document.getElementById('about-content').style.height = document.defaultView.getComputedStyle(document.getElementById('background-pic-container'), "").getPropertyValue("height");
}