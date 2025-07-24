function sendMails(){
    var params={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,

        mobile:document.getElementById("mobile").value,
        message:document.getElementById("message").value,


    };

const serviceID="service_jhvm6fr";
const templateID="template_7ks02b5";
emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value="";
        document.getElementById("mobile").value="";
        document.getElementById("message").value="";

console.log(res);
alert("Your message sent successfully")
    })
    .catch(err=>console.log(err));
}