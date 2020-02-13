window.onload = function() {
    //login
    const url = 'http://localhost:3010/users';
    const loginsubmit = document.getElementById('loginsubmit');
	loginsubmit.addEventListener('click', userLogin);
	
	async function userLogin(event){
		const email = document.getElementById('loginemail').value;
		const password = document.getElementById('loginpassword').value;

		const data = await fetch(url+'/login',{
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				email: email,
				password: password
			})
		})
		const json = await data.json();
		// console.log(json);
		if(json.status == "Login success!"){
			
			// for Giving Current path
			var href = location.href.split('/');
			href.pop();
			href = href.join('/') + '/';
			console.log(href);
			
			// for opening another page
			window.open(href+"userdashboard.html","_self");

			alert("Login Successful.");


		}else{
			alert("Login Failed.");
		}
    }

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
