
let url='https://65af4d452f26c3f2139a6b3d.mockapi.io/student';
let editId=null; 
window.onload = () => {
    editData();
}
function validateForm(event){
    var name =document.getElementById("name").value;
    var DOB =document.getElementById("DOB").value;
    var  PhNo =document.getElementById("Ph.No").value;
    var  email =document.getElementById("mail").value;
    var genderM =document.getElementById("genm");
    var genderF =document.getElementById("genf");
    var  lang =document.getElementById("langg").value;
    var  pwd =document.getElementById("pwd").value;
    var  confirmpwd =document.getElementById("confirmpwd").value;
    var register = document.getElementById("myCheck");
 const nameCondition =/^[a-zA-Z]{3,10}$/
    if(name===''){
        document.getElementById("nameError").innerHTML ="name is required";
    }
    else if(!nameCondition.test(name)){
        document.getElementById("nameError").innerHTML ="name must must be  3 to 10"
    }
    else{
        document.getElementById("nameError").innerHTML ='';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( email===''){
      document.getElementById("emailError").innerHTML ="email is required";  
  }
  else if(!emailRegex.test(email)){
    document.getElementById("emailError").innerHTML ="invalid email format"; 
  }

  else{
      document.getElementById("emailError").innerHTML ='';
  }

  if(genderF.checked || genderM.checked){
    document.getElementById("genderError").innerHTML ='';
  }

  else{
    document.getElementById("genderError").innerHTML='gender is required';
  }
    if(DOB===''){
        document.getElementById("dbError").innerHTML ="Date is required";  
    }
    else{
        document.getElementById("dbError").innerHTML ='';
    }
    const PhoneNo = /^\d{10}$/;
    if(PhNo===''){
        document.getElementById("phError").innerHTML ="PhNo is required";  
    }
    else if(!PhoneNo.test(PhNo)){
        document.getElementById("phError").innerHTML ="enter 10 digit number";  
    }
    else{
        document.getElementById("phError").innerHTML ='';
    }
if(genderM.checked||genderF.checked){
    document.getElementById("genderError").innerHTML ='';
}
else{
    document.getElementById("genderError").innerHTML ="please select one gender";
}
    if(lang===''){
        document.getElementById("langError").innerHTML ="language is required";  
    }
    else{
        document.getElementById("langError").innerHTML ='';
    }
   const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(pwd===''){
        document.getElementById("pwdError").innerHTML ="Password  required";  
    }
    else if (!passwordRegex.test(pwd)) {
        document.getElementById("pwdError").innerHTML = "Invalid password";
    }
    else{
        document.getElementById("pwdError").innerHTML ='';
    }
    if(confirmpwd===''){
        document.getElementById("cpwdError").innerHTML ="confirm password required";  
    }
    else if(pwd !== confirmpwd){
        document.getElementById("cpwdError").innerHTML ="password must be same";  
    }
    else{
        document.getElementById("cpwdError").innerHTML ='';
    }
    if(name==="" || email==="" || DOB==="" || PhNo==="" || lang==="" ||!(genderM.checked||genderF.checked)|| pwd==="" ||!passwordRegex.test(pwd)|| confirmpwd===""||pwd !== confirmpwd||!PhoneNo.test(PhNo)||!emailRegex.test(email)||!nameCondition.test(name)){
        return false;
    }
    let obj={name,DOB,PhNo,email,lang,pwd,confirmpwd,genderM:genderM.checked?"Male":"Female",register:register.checked?"Present":"Absent"};
    console.log(obj);

    let dateOfBirth = new Date(obj.DOB);
    let  Birthday = dateOfBirth.toLocaleDateString("en-GB");
    obj["DOB"] = Birthday;

    if(editId!==null)
    {
        fetch(url+"/"+editId,{method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj),})
    .then((response)=>response.json())
    .then((data)=>{
    console.log(data)
    window.location.href="table.html";
})
    .catch((errMsg)=>
     console.log(errMsg));
    }
    else{
    fetch(url,{method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj),})
    .then((response)=>response.json())
    .then((data)=>{
    console.log(data)
    window.location.href="table.html";
})
    .catch((errMsg)=>
     console.log(errMsg));
    }
    //Reset Form Fields://
     document.getElementById("myCheck")
    document.getElementById("name").value = "";
   document.getElementById("DOB").value = "";
    document.getElementById("Ph.No").value = "";
  document.getElementById("mail").value = "";
    document.getElementById("gen").value;
    document.getElementById("langg").value = "";
    document.getElementById("pwd").value = "";
  document.getElementById("confirmpwd").value = "";
 
}
function parseCustomDate(dateString) {
    const parts = dateString.split('/');
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1] - 1, 10); // Months in JavaScript are zero-based
        const year = parseInt(parts[2], 10);
        // if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            return new Date(year, month, day);
        // }
    }
    // console.error("Invalid date format:", dateString);
    // return null;
}
function editData() {
    // Parse URL Parameters
    let url_string = window.location.href.toLocaleLowerCase();
    let url = new URL(url_string);
    let id = url.searchParams.get("id");
    editId = id;
    console.log(id);

    if (id) {
        let url = 'https://65af4d452f26c3f2139a6b3d.mockapi.io/student';
        // Fetch and Populate Data for Editing
        fetch(url + "/" + id, { method: "GET", headers: { "Content-Type": "application/json" } })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                document.getElementById("name").value = data.name;
                document.getElementById("mail").value = data.email;

                // Ensure data.DOB is a valid date string
                 let dateOfBirth = parseCustomDate(data.DOB);

                // if (dateOfBirth !== null && !isNaN(dateOfBirth.getTime())) 
                    // Convert the date format before populating the field
                    let formattedDate = `${dateOfBirth.getFullYear()}-${(dateOfBirth.getMonth() + 1).toString().padStart(2, '0')}-${dateOfBirth.getDate().toString().padStart(2, '0')}`;
                    document.getElementById("DOB").value = formattedDate;
                

                document.getElementById("Ph.No").value = data.PhNo;
                if (data.genderM === "Male") {
                    document.getElementById("genm").checked = true;
                } else {
                    document.getElementById("genf").checked = true;
                }
                if (data.register === "Present") {
                    document.getElementById("myCheck").checked = true;
                } else {
                    document.getElementById("myCheck").checked = false;
                }
                document.getElementById("genf").value = data.genderF;
                document.getElementById("langg").value = data.lang;
                document.getElementById("pwd").value = data.pwd;
                document.getElementById("confirmpwd").value = data.confirmpwd;
            })
            .catch((errMsg) => console.log(errMsg));
    }
}




