function to_print_date_format(){
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
document.write('Current Date in format mm-dd-yyyy : '+mm+'-'+dd+'-'+yyyy+'<br>');
document.write('Current Date in format mm/dd/yyyy : '+mm+'/'+dd+'/'+yyyy+'<br>');
document.write('Current Date in format dd-mm-yyyy : '+dd+'-'+mm+'-'+yyyy+'<br>');
document.write('Current Date in format dd/mm/yyyy : '+dd+'/'+mm+'/'+yyyy+'<br>');

}

function to_print_date_and_time(){
   var date = new Date();
   var weekdaylist=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
   var hour = date.getHours();
   var prepand = hour >=12 ? "PM":"AM";
   document.write("<h3>Today is : "+weekdaylist[date.getDay()]+"</h3><br>");
   document.write("<h3>Current Time is : "+hour+" "+prepand+" : "+date.getMinutes()+" : "+date.getSeconds()+"</h3>");
}

function print_current_page(){
  window.print();
}
