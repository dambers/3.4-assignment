//parameters in.create
//parameters out.create
const name1= "Dev Ed";


     function logger() {
        console.log("New Hop hop Fridays");
        console.log("New Hop hop Fridays");
        }

        logger();


     const name2 ="dev ed";

     function adder(item1,item2){
        console.log(item3 + item4);
     }

     adder(6,8);

    // Property.create
     var obj ={};

     Object.defineProperties(obj,{
        "size":{writable: true, value: "green"},
        "qty":{writable:true, value:6}
     });

     console.log(obj.size);
     console.log(obj.qty);

     //Event.create
     const myevent = Event("mainevent")

     document.addEventListener("click", e => {
        console.log(e)
     })

     document.dispatchEvent(myEvent)

     //Object.create
     let obj = {
        name: 'The Dude'
     };
     let obj2 = Object.create(obj, {});
     console.log(obj2);
