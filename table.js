// let array = [];
function returnPage() {
    window.location.href ="index.html";
  }
  window.onload = () => {
    tableAdd()
  };
  function tableAdd() {
    fetch("https://65af4d452f26c3f2139a6b3d.mockapi.io/student")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data[0]);
        let table = "";
        for (let i = 0; i < data.length; i++) {
          data;
          table += "<tr>";
        
          table += "<td>" + data[i].name + "</td>";
          table += "<td>" + data[i].email+"</td>";
          table += "<td>" + data[i].DOB + "</td>";
          table +="<td>" + data[i].PhNo+"</td>";
          table += "<td>" + data[i].genderM +"</td>";
          table += "<td>" + data[i].lang+ "</td>";
          table += "<td>" + data[i].pwd + "</td>";
          table += "<td>" + data[i].confirmpwd + "</td>";
          table += "<td>" + data[i].register + "</td>";
          table +=
            "<td> <button class='btn btn-danger' onclick = 'editData (" +
            data[i].id +
            ")'>Edit</button> <button class='btn btn-success'onclick = 'deleteData(" +
           data[i].id+
            ")'>Delete</button>";
          table += "</tr>";
        }
        document.getElementById("displayArea").innerHTML = table;
      });
  }
  function editData(id){
    editId=id;
    window.location.href="index.html?id="+id;

  }
  function deleteData(id)
   {
    fetch("https://65af4d452f26c3f2139a6b3d.mockapi.io/student/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      tableAdd()
  }
























//  function returnPage() {
//   window.location.href = "index.html";
// }
// window.onload = () => {
//   tableAdd()
// };
// function tableAdd() {
//   fetch("https://65b1d9849bfb12f6eafc3b4b.mockapi.io/data")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let table = "";
//       for (let i = 0; i < data.length; i++) {
//         data;
//         table += "<tr>";
//         table += "<td>" + data[i].id + "</td>";
//         table += "<td>" + data[i].userName + "</td>";
//         table += "<td>" + data[i].userEmail + "</td>";
//         table += "<td>" + data[i].phoneNumber + "</td>";
//         table += "<td>" + data[i].lang + "</td>";
//         table += "<td>" + data[i].date + "</td>";
//         table += "<td>" + data[i].password + "</td>";
//         table += "<td>" + data[i].confirmPassword + "</td>";
//         table +=
//           "<td> <button onclick = 'editData(" +
//           data[i].id +
//           ")'>Edit</button> <button onclick = 'deleteData(" +
//          data[i].id+
//           ")'>Delete</button>";
//         table += "</tr>";
//       }
//       document.getElementById("tbody").innerHTML = table;
//     });
// }
// function deleteData(id)
//  {
//   fetch("https://65b1d9849bfb12f6eafc3b4b.mockapi.io/data/" + id, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//     tableAdd()
// }











// // let array = [];
// function returnPage() {
//     window.location.href = "index.html";
//   }
//   window.onload = () => {
//     tableAdd()
//   };
//   function tableAdd() {
//     fetch("https://65b1d9849bfb12f6eafc3b4b.mockapi.io/data")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         let table = "";
//         for (let i = 0; i < data.length; i++) {
//           data;
//           table += "<tr>";
//           table += "<td>" + data[i].id + "</td>";
//           table += "<td>" + data[i].userName + "</td>";
//           table += "<td>" + data[i].userEmail + "</td>";
//           table += "<td>" + data[i].phoneNumber + "</td>";
//           table += "<td>" + data[i].lang + "</td>";
//           table += "<td>" + data[i].date + "</td>";
//           table += "<td>" + data[i].password + "</td>";
//           table += "<td>" + data[i].confirmPassword + "</td>";
//           table +=
//             "<td> <button onclick = 'editData(" +
//             data[i].id +
//             ")'>Edit</button> <button onclick = 'deleteData(" +
//            data[i].id+
//             ")'>Delete</button>";
//           table += "</tr>";
//         }
//         document.getElementById("displayArea").innerHTML = table;
//       });
//   }
//   function deleteData(id)
//    {
//     fetch("https://65b1d9849bfb12f6eafc3b4b.mockapi.io/data/" + id, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//       tableAdd()
//   }
  
// let url="https://65af4d452f26c3f2139a6b3d.mockapi.io/:student";
// window.onload = () => {
//     tableAdd();
// }

// //table add//
// async function table(){
//     const response = await fetch(url,{method:"GET",
//     headers:{"Content-Type":"application/json"},})

//     const data=response.json();
//         console.log(data);
//         array=data;
//     let coloum="";
//     for  (let i=0;i<array.length;i++){
//         coloum+="<tr>";
//         coloum+="<td>"+array[i].name+"</td>"
//         coloum+="<td>"+array[i].mail+"</td>"
//         coloum+="<td>"+array[i].DOB+"</td>"
//         coloum+="<td>"+array[i].Ph.No+"</td>"
//         coloum+="<td>"+array[i].gen+"</td>"
//         coloum+="<td>"+array[i].langg+"</td>"
//         coloum+="<td>"+array[i].pwd+"</td>"
//         coloum+="<td>"+array[i].confirmpwd+"</td>"
//         coloum+="<td><button class='btn btn-success' onclick='editForm("+array[i].id+")'>Edit</button>  <button class='btn btn-danger' onclick='deleteForm("+array[i].id+")'>Delete</button></td>";
//         coloum += "</tr>";
//     } 
//   document.getElementById("displayArea").innerHTML= coloum;
// }

// // edit//
// function editForm(id){
//  array=JSON.parse(localStorage.getItem('array'))||[];
// index = id;      
// window.location.href ="index.html?id="+id;
//  }
//  function returnPage() {
//     window.location.href="index.html";
// }

// //delete//
// function deleteForm(id){
//     fetch(url,{method:"DELETE",
//     headers:{"Content-Type":"application/json"},})
//     .then(response=>response.json())
//     .then((data)=>{
//         console.log(data);
//     table()})
// }