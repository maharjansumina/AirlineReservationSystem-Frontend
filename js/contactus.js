window.onload = function() {
    //contactus
    const url = 'http://localhost:3010/users';

     //Registration
     const csubmit = document.getElementById('csubmit');
     csubmit.addEventListener('click', userContact);
 
     async function userContact(event) {
         const cname = document.getElementById('cname').value;
         const cemail = document.getElementById('cemail').value;
         const cmessage = document.getElementById('cmessage').value;
     
 
         const data = await fetch(url + '/contact',{
             method: "POST",
             headers: {
                 'Content-Type': 'application/json'
             },
             body:JSON.stringify({
                 fullname: cname,
                 email: cemail,
                 message: cmessage
             })
         })
         const json = await data.json();
         console.log(json);
         if(json.status ="Contact Successfully!"){
             alert("Contact Successfully!");
         }else{
             alert("Failed");
         }   
     }
}