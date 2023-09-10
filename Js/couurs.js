$(document).ready(function(){
    
    $("#htload").load("Cr/jQuery.html");
    
});
$(function() {
    
      var loc_name = window.location.href.indexOf("?");
        console.log(loc_name);
        var str_name= window.location.href.slice(loc_name+1);
        console.log(str_name);
        
        var name_cours = "";
          var i = str_name.indexOf("courstitle=")+11;
        
        for(var j = i;j< str_name.length;j++){
            name_cours += str_name.charAt(j);
        }
        console.log(name_cours);
        name_cours = decodeURIComponent(name_cours);
        console.log(name_cours);
    $(".title-tuto").text(name_cours);
  })