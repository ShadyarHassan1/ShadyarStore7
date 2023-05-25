var code, getIt, errorMessage;

getIt = document.getElementById("get");
errorMessage = document.getElementById("P-For-Errors");

getIt.addEventListener("click", callLinks);

function callLinks (){
  code = document.getElementById("code").value;

  switch (code){
    case "1":
      window.location.href = "link dane hy web";
      break;










      case "The search section is not working ‼️":
        errorMessage.innerHTML = "";
        errorMessage.style = "text-align:center;font-size:25px;color: semibold;font-family: UniQAIDAR_KAMARAN;";
        break;
  
      default:
        errorMessage.innerHTML = " The search section is not working ‼️";
        errorMessage.style = "text-align:center;font-size:25px;color: semibold;font-family: UniQAIDAR_KAMARAN;";
        break;
  
    }
  }
