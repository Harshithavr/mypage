var list = [{
	'name': 'sid',
	'id' : 01,
	'password' : 'sid01'
}, {
	'name' : 'ram',
	'id' : 02,
	'password' : "ram02"
}, {
	'name' : 'sham',
	'id' : 03,
	'password' : 'sham03'
}

]
var checkuser = function(name,password,allusers){
 var isusrerfound = false
  var ispswrdcrt = false
  for(user in allusers){
   if(allusers[user]['name']==name)	{
   	if(allusers[user]['password']!=password) {
   	isusrerfound = true
   	ispswrdcrt = true
   	break
   }
   	else { 
   	isusrerfound = true	
   	ispswrdcrt = false
   	break

   	}
   }	
   	else {
   		isusrerfound =false
   		
   	}

   }
   if (isusrerfound==true && ispswrdcrt==true){
   	alert('you hve logged in')
   }
   else if(isusrerfound==true && ispswrdcrt==false){
   	alert('incorrect password')
   }
   else {
   	alert('user not found')
   }

  }
  var name = prompt('enter ur name')
  var password = prompt('enter the password')
  checkuser(name,password,list)
  