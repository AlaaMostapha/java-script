//catch elements in dom

var studentName = document.getElementById("studentName");
var studentTrack = document.getElementById("studentTrack");
var SaveBtn =document.getElementById("save");
var table= document.getElementsByTagName("table");
var DelBtn=document.getElementById("delete");
var arr=[];




//save btn when click on it an object created 
//tr,and tds are created an take data from the input name and track

SaveBtn.addEventListener("click",function(){

	var obj={
		Name:studentName.value,
		Track:studentTrack.value
	};
	var tr=document.createElement("tr");
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	td1.innerHTML=obj.Name;
	td2.innerHTML=obj.Track;
	tr.appendChild(td1);
	tr.appendChild(td2);
	table[0].appendChild(tr);

  console.log(obj);
  arr.push(obj);
 
  console.log(arr);
  localStorage.setItem("studentsData",JSON.stringify(arr));//set in local storage
  
});


//delete btn when click on it check if there is a data in localstorage or not
//if ther is a data delete it

DelBtn.addEventListener("click",function(){
	var data=localStorage.getItem("studentsData");
	dataParsed=JSON.parse(data);

	if(dataParsed!=null){
		localStorage.setItem("studentsData","")
	};
});



//self invoking function 
// get data from local storage and check if it exist or not
// then id there is a data put it in arr
// then create tr and tds and but this data in them
 
(function(){
	var parseObj =localStorage.getItem("studentsData");//get and parse
    parsedObj =JSON.parse(parseObj);
    // console.log(parsedObj.Name);
  
  if(parsedObj!=null){//y3ni law fi data fi local 7otha 
 		arr=parsedObj; //7otha fel array
		 console.log(arr);
 		for(var i=0;i<parsedObj.length;i++){
		 
			var tr=document.createElement("tr");
			var td1=document.createElement("td");
			var td2=document.createElement("td");
			td1.innerHTML=parsedObj[i].Name;
			td2.innerHTML=parsedObj[i].Track;
			// console.log(td1);
			tr.appendChild(td1);
			tr.appendChild(td2);
			table[0].appendChild(tr);
			// console.log(table[0]);
		}
	}
 })();
