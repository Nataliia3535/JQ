
let names=[];
let names2;
let tasktr=document.getElementById("nameTR");
document.getElementById("form").addEventListener("submit", (e)=>{
 e.preventDefault();
 Create();
 Read();
 document.getElementById("form").reset();
});
function Create(){
    let storage=JSON.parse(localStorage.getItem("names"));
    let name=document.getElementById("name").value;
    if (name==''){
        alert("field is empty");    
    }
    else{
        if(storage==null){
            names.push(name);
            localStorage.setItem("names",JSON.stringify(names));
        }
        else{
            names=JSON.parse(localStorage.getItem("names"));
            names.push(name);
            localStorage.setItem("names",JSON.stringify(names));
        }
    }

}
function Read(){
    tasktr.innerHTML='';
    names2=JSON.parse(localStorage.getItem("names"));
    if (names2==null){
        tasktr.innerHTML+=`
        <tr>
             <th class="space">#</th>
             <th class="space">Task</th>
             <th class="space">Operation</th>
        </tr>          
        `
    }
    else{
        tasktr.innerHTML+=`
        <tr>
             <th class="space">#</th>
             <th class="space">Task</th>
             <th class="space">Operation</th>
            </tr>       
        `
        for(let i=0; i<names2.length; i++){
            tasktr.innerHTML+=`
        <tr>
             <td class="space">${i+1}</td>
             <td class="space">${names2[i]}</td>
             <td class="space">
                 <button Onclick="Update(${i})">Update</button>
                 <button Onclick="Delete(${i})">Delete</button>
             </td>
            </tr>       
        `
        }
    }
}
function Update(i3){
  let names4=JSON.parse(localStorage.getItem("names"));
  tasktr.innerHTML='';
  tasktr.innerHTML+=`
  <tr>
             <th class="space">#</th>
             <th class="space">Task</th>
             <th class="space">Operation</th>
  </tr>       
        `
        for(let i=0; i<names4.length;i++){
            if(i==i3){
                tasktr.innerHTML+=`
                  <tr>
                     <td class="space">${i+1}</td>
                     <td class="space"><input id="newTask" placeholder="${names4[i]}"></input></td>
                     <td class="space">
                         <button Onclick="Update2(${i})">Update</button>
                         <button Onclick="Read()">Cancel</button>
                    </td>

                  </tr>

                `
            }
            else{
                tasktr.innerHTML+=`
        <tr>
             <td class="space">${i+1}</td>
             <td class="space">${names2[i]}</td>
             <td class="space">
                 <button Onclick="Update(${i})">Update</button>
                 <button Onclick="Delete(${i})">Delete</button>
             </td>
            </tr>       
        `

            }
        }
}
function Update2(i){
   let names5=JSON.parse(localStorage.getItem("names"));
   names5[i]=document.getElementById("newTask").value;
   if (names5[i]==''){
       alert("field is empty");
   }
   else{
       localStorage.setItem("names", JSON.stringify(names5));
       Read();
   }
}
function Delete(i100){
    let names3=JSON.parse(localStorage.getItem("names"));
    names3.splice(i100,1);
    localStorage.setItem("names",JSON.stringify(names3));
    Read();
}