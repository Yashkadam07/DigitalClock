// create a function for display time 
// and to update the timing 

function clock(){
    let dateTime = new Date(); // new Date is the inbuild javascript function 
    let hrs = dateTime.getHours(); // this is the method of the date to get the hours
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    
   let session= document.getElementById('DN');

    // if else to update the am and pm 
    if(hrs>=12){
        session.innerHTML='PM';
    }else{
        session.innerHTML='AM';
    }

    if(hrs>12){
        hrs=hrs-12;
    }

    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
   

}
setInterval(clock,10);

