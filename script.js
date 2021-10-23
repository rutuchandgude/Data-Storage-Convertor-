var inputType = document.querySelector('.inputType');
var resultType = document.querySelector('.resultType');
var inputVal = document.querySelector('#input');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');
var inputTypeValue,resultTypeValue;

inputVal.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
// resultType.addEventListener("change",myResult);

function myResult(){
 
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;


    if(inputTypeValue === "Kilobytes" && resultTypeValue === "Megabytes"){
        output.value = Number(input.value) / 1024;
    }
    else if(inputTypeValue ==="Kilobytes" && resultTypeValue==="Gigabytes"){
        output.value=Number(input.value) / (1024*1024);
    }
    else if(inputTypeValue ==="Kilobytes" && resultTypeValue==="Terabytes"){
        output.value=Number(input.value) / (1024*1024*1024);
    }
    else if(inputTypeValue ==="Kilobytes" && resultTypeValue==="Kilobytes"){
        output.value=input.value;
    }

   


    if(inputTypeValue === "Megabytes" && resultTypeValue === "Kilobytes"){
        output.value = Number(input.value) * 1024;
    }
    else if(inputTypeValue ==="Megabytes" && resultTypeValue==="Gigabytes"){
        output.value=Number(input.value) /1024;
    }
    else if(inputTypeValue ==="Megabytes" && resultTypeValue==="Terabytes"){
        output.value=Number(input.value) / (1024*1024);
    }
    else if(inputTypeValue ==="Megabytes" && resultTypeValue==="Megabytes"){
        output.value=input.value;
    }


    if(inputTypeValue === "Gigabytes" && resultTypeValue === "Kilobytes"){
        output.value = Number(input.value)*(1024*1024);
    }
    else if(inputTypeValue ==="Gigabytes" && resultTypeValue==="Terabytes"){
        output.value=Number(input.value) /1024;
    }
    else if(inputTypeValue ==="Gigabytes" && resultTypeValue==="Megabytes"){
        output.value=Number(input.value)*1024;
    }
    else if(inputTypeValue ==="Gigabytes" && resultTypeValue==="Gigabytes"){  
        output.value=input.value;
    }

    if(inputTypeValue === "Terabytes" && resultTypeValue === "Kilobytes"){
        output.value = Number(input.value)*(1024*1024*1024);
    }
    else if(inputTypeValue ==="Terabytes" && resultTypeValue==="Megabytes"){
        output.value = Number(input.value)*(1024*1024);
    }
    else if(inputTypeValue ==="Terabytes" && resultTypeValue==="Gigabytes"){  
        output.value=Number(input.value)*1024;
    }
    else if(inputTypeValue ==="Terabytes" && resultTypeValue==="Terabytes"){
        output.value=input.value;
    }


}

// button.addEventListener("click",myResult);

// let msg = `Convert  ${Math.abs(inputTypeValue)}  ${Math.abs(inputType)} into ${Math.abs(
//     resultType)}`;

//     const opmsg = (msg) => {
//         h2.innerHTML = msg;
//       };



button.addEventListener('click', () => {
    myResult();
  
  });







// function formatSizeUnits(bytes){
//     if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
//     else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
//     else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
//     else if (bytes > 1)           { bytes = bytes + " bytes"; }
//     else if (bytes == 1)          { bytes = bytes + " byte"; }
//     else                          { bytes = "0 bytes"; }
//     return bytes;
//   }