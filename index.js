let catName;
let fileName;

function getCat(catName, fileName) {
    

   let heading = document.getElementsByClassName("h");
   heading[0].innerText = catName;

    // Instantiate an xhr Object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', fileName , true );

    //What to do in processing
    xhr.onload = function () {
        if(this.status === 200){
            
            let desc = document.getElementsByClassName("description");
            desc[0].innerHTML = this.responseText;
            // document.getElementById("div1").innerHTML = this.responseText;
        }
        else
        {
            console.error("Some error occured");
        }
        
    }

    xhr.send();

}


