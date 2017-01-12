function getUrlParam(){
  var urlParam = window.location.href;

  if(urlParam.indexOf("?") >= 0){
    urlParam = urlParam.substring(urlParam.indexOf("?") + 1);
  }
  else{
    urlParam = "home";
  }

  return urlParam;
}

function getRootAddress(){
  var address = window.location.href;
  var splitParams = address.split("?");
  return splitParams[0];
}
