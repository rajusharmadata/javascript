let tudo = [];
let req = prompt("Enter your reqest");

while(true){
    if(req=="quit"){
        console.log("quting app");
        break;
    }
    
    if(req=="list"){
        console.log("-------------");
        for(let i =0;i<tudo.length; i++){
            console.log(i,tudo[i]);
    
        }
        console.log("-----------")
    }else if(req=="add"){
        let task = prompt("  please enter the task you want to add "); 
        tudo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let ind=prompt("enter the  index");
        tudo.splice(ind,1);
        console.log(" task deleted");

    }else{
        console.log("wrong requst");
    }

 req = prompt("Enter your reqest");


}