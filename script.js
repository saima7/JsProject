
var numbers = [1,2,3];
document.getElementById("area").innerHTML = numbers;

function display(){
  document.getElementById("area").innerHTML = numbers;
}



    document.getElementById("enterLast").addEventListener("click", function(){
         var x= document.getElementById("newNumber");
         var y= x.value;
         numbers.push(y);
         display();
    }
    )

    document.getElementById("enterFirst").addEventListener("click", function(){
        var x= document.getElementById("newNumber");
        var y= x.value;
        numbers.unshift(y);
        display();
   }
   )

    document.getElementById("deleteLast").addEventListener("click", function(){
    var x= document.getElementById("newNumber");
    var y= x.value;
    numbers.pop(y);
    display();
    }
    )
    
    
    document.getElementById("deleteFirst").addEventListener("click", function(){
    var x= document.getElementById("newNumber");
    var y= x.value;
    numbers.shift(y);
    display();
    }
    )


    document.getElementById("sort").addEventListener("click", function(){
        numbers.sort();
        display();
    }
    )
    
