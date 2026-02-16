//your JS code here. If required.
const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
	 e.preventDefault(); 
	const fname = document.getElementById('fname').value
	const lname = document.getElementById('lname').value
	const phn = document.getElementById('phn').value
	const email = document.getElementById('email').value
	alert(` First Name: ${fname} Last Name: ${lname} Phone Number: ${phn} Email ID: ${email}`)
})
