var record:any = 'Anil';
record = 100;
record = ['Abhishek'];
record = true;
record = {}

//unknown example
var  value1:unknown = "anil";
value1 = 100;
value1 = ['anil']
value1 = {};
value1 = "Anjani Singh";

if(typeof value1 == 'string'){
    console.log(value1.toUpperCase())
}