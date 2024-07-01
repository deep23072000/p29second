function windowexample(){
      let username = window.prompt("enter username");
      let password = window.prompt("enter password");

      window.alert(username+"\n"+password);

      if(username && password){
         window.alert("successfull login");

      }else{
        window.alert("data not found");
      }
}

