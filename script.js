const deletePassword =(website)=>{
    let data = localStorage.getItem("password");
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website;
    }); 
    localStorage.setItem("password" , JSON.stringify(arrUpdated));
}

const showPasswords = () => {

    let tb = document.querySelector("table");

    let data = localStorage.getItem("password");

    if (data == null) {
        tb.innerHTML = "no data to show"
    }
    else {
         tb.innerHTML =` <tr>
                <th>Website </th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
             str += ` <tr>
             <td>${element.website}</td>
             <td>${element.username}</td>
             <td>${element.password}</td>
             <td><button class = "btnsm" onclick = "deletePassword('${element.website}')"> Delete</button></td>
               </tr>`
        }
        tb.innerHTML = tb.innerHTML + str
    }
}

console.log("working");
     showPasswords();
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(username.value, pass.value);
    let password = localStorage.getItem("password");
    console.log(password);
    if (password == null) {
        let json = []
        json.push({website:website.value, username: username.value, pass: pass.value })
        alert("password saved");
        localStorage.setItem("password", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("password"))
        json.push({website:website.value, username: username.value, pass: pass.value })
        alert("password saved");
        localStorage.setItem("password", JSON.stringify(json))
    }
    showPasswords()
}) 