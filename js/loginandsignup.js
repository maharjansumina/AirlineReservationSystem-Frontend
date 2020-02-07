window.onload = function() {
    //login
    const url = 'http://localhost:3020/users';
    


    //Registration
    const signsubmit = document.getElementById('signupsubmit');
    signsubmit.addEventListener('click', userRegistration);

    async function userRegistration(event) {
        const fullname = document.getElementById('fullname').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const conpassword = document.getElementById('conpassword').value;
    

        const data = await fetch(url + '/register',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                fullname: fullname,
                address: address,
                phone: phone,
                email: email,
                password: password,
                conpassword: conpassword
            })
        })
        const json = await data.json();
        console.log(json);
        if(json.status ="Registered Successfully!"){
            alert("Registered Successfully!");
        }else{
            alert("Failed");
        }   
    }
}