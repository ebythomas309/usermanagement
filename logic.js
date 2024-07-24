class landing {
    dataBase={}
    // dataBase={
    //    " mlian@gmail.com":{name:"milan",email:"mlian@gmal.com", password"1234"}
    // }
    registerUser() {
        if(localStorage.getItem('userData') != null){
            this.getData()
        }
        let firstName = username.value;
        let email = exampleInputEmail1.value;
        let password = exampleInputPassword1.value;
        if(firstName !=='' && email !=='' && password !==''){
           if(email in this.dataBase){
            alert(`${email}already exist`)
           }
           else{
               this.dataBase[email]={
                   name:firstName,
                   email:email,
                   password:password
            }
            // save data
            this.saveData();
            alert("registartion successfull");
            // method to nvaigate to a html page
            window.location="index2.html"
        }
    }
     else{
        alert("please enter valid number")
     }   
    }
    getData(){
        this.dataBase= JSON.parse(localStorage.getItem("userData"))
    }
    saveData(){
        localStorage.setItem("userData",JSON.stringify(this.dataBase))
    }
    login(){
        let loggedEmail=userEmail.value;
        let loggedPassword= userPassword.value;
        this.getData();
        if(loggedEmail ==''|| loggedPassword ==''){
            alert("please enter valuse")
        }
        else{
            if(loggedEmail in this.dataBase){
                if(this.dataBase[loggedEmail].password === loggedPassword){
                    localStorage.setItem("firstname",this.dataBase[loggedEmail].name)
                    window.location='index1.html'
                }
                else{
                    alert("password mismatch")
                }
            }
            else{
                alert(`${loggedEmail} not found`)
            }
        }
    }
}
const obj = new landing()