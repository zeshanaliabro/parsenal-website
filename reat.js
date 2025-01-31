
function send(event){
    event.preventDefault(event);
    let pursom = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }
    console.log(pursom)
    const serviceID = 'service_4nh7qxg'
    const templateID = 'template_pgvoaz9'
emailjs.send(serviceID,templateID,pursom).then(
    (response) =>{
document.getElementById('name').value="";
document.getElementById('email').value="";
document.getElementById('message').value="";

console.log('right', response );
alert("your messege is success")
    },
    (error) => {
        console.log("feilde..." , error)
        alert("your message is feilde")
    },
);

}
