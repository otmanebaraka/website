$(document).ready(function (){
    if($(window).width() > 563)
    {
    $("body").css("paddingTop",$("header").innerHeight());
         $(".drop-container").mouseover(function(){
        $(this).find(".drop-menu").slideDown("slow");
        $(this).find("img").css("transform","rotate(180deg)");
    });
        
        
    $(".drop-container").mouseleave(function(){
        $(this).find(".drop-menu").slideUp();
        $(this).find("img").css("transform","rotate(0deg)");
    });
        $(".home").mouseover(function(){
        $(".home span").css("top","-100px");
        $(".home img").css("top","3px");
        $(".home a").css("background-color","ghostwhite");
    });
    $(".home").mouseleave(function(){
        $(".home span").css("top","0px");
        $(".home img").css("top","45px");
    });
        
    
    }
    else{
    
       $(".menu-btn").click(function(evt){
        evt.preventDefault();
           $(".menu").slideToggle();
    });
    }
    
    
    $(".icon-social img").mouseover(function() {
        $(this).css("transform" , "rotate(360deg)" );
        
    });
    $(".icon-social img").mouseleave(function() {
        $(this).css("transform" , "rotate(0deg)" );
    });
    
    
    
    //  using Json and ajax with jQuery
    
    
 //  ------ PAGE NAVIGATION ----------

  
    
    
    page1();
    
    $(".nav1").click(function(e){
      e.preventDefault();
    page1();
        smouthscroll();
    });
    

    $(".nav2").click(function(e){
      e.preventDefault();
        $("#pag").attr("data-page","2");
            check_page();
            smouthscroll();
    $.getJSON("Js/base.json",function(data){
         var i;
        for(i=3;i<6;i++){
              $("#info"+(i-3)+" p").html(data.content[i].para);
                $("#info"+(i-3)+" img").attr("src",data.content[i].image);
                $("#info"+(i-3)+" h3").text(data.content[i].title);
        }
       
    });
    
    });
    
    $(".nav3, .last").click(function(e){
      e.preventDefault();
        $("#pag").attr("data-page","3");
            check_page();
            smouthscroll();
    $.getJSON("Js/base.json",function(data){
         var i;
      for(i=6;i<9;i++){
              $("#info"+ (i-6) +" p").html(data.content[i].para);
                $("#info"+(i-6)+" img").attr("src",data.content[i].image);
                $("#info"+(i-6)+" h3").text(data.content[i].title);
        }
     
    });
        
    });
    function page1(){
                $("#pag").attr("data-page","1");
        check_page();
    $.getJSON("Js/base.json",function(data){
         var i;
        for(i=0;i<3;i++){
              $("#info"+i+" p").html(data.content[i].para);
                $("#info"+i+" img").attr("src",data.content[i].image);
                $("#info"+i+" h3").text(data.content[i].title);
        }
       
    });
    }
    
    function check_page(){
    if($("#pag").attr("data-page")=="1"){
        $(".nav1 img").attr("src","icons/nav_1_active.svg");
    }
    else{
        $(".nav1 img").attr("src","icons/nav_1.svg");
    }
    if($("#pag").attr("data-page")=="2"){
        $(".nav2 img").attr("src","icons/nav_2_active.svg");
    }
    else{
        $(".nav2 img").attr("src","icons/nav_2.svg");
    }
    if($("#pag").attr("data-page")=="3"){
        $(".nav3 img").attr("src","icons/nav_3_active.svg");
    }
    else{
        $(".nav3 img").attr("src","icons/nav_3.svg");
    }
        };
    
    function smouthscroll(){
         var scrolp = $(".main").offset().top - $("header").innerHeight();
    $("html, body").animate({
           
           scrollTop : scrolp 
       },1000);
    }
    
     //  ------ Search  ----------
$(".search-result").css("width",$(".search").innerWidth());
   
    $(".search").keydown(function(){
        $(".search-result").slideDown();     
       $.getJSON("Js/base.json",function(data){
           var search = $(".search").val();
           var regex = new RegExp(search,'i');
           var result = "<ul>";
           
           data.content.forEach(function(elem) {
//               document.write(elem.title);
               if(elem.title.search(regex) != -1){
                   
                   result += "<li>" + "<a href ="+"courses.html?courstitle="+ encodeURIComponent( elem.title) +">"+ elem.title +"</a>"+ "</li>";
               }
               
           });
           
           result += "</ul">
           $(".search-result ").html(result);
       });
    });
     $(".search").focusout(function(){
         $(".search-result").slideUp();
     });
    
//      using Json and ajax with Javascripts
    
    
    
//var req = new XMLHttpRequest();
//    $(".nav2").click(function(e){
//        e.preventDefault();
//       req.open('GET','Js/Json.js');
//        req.onload=function(){
//           var xdata = JSON.parse(req.responseText);
//            
//            info(xdata); 
//            
//        };
//        req.send();
//        $(".nav2 img").attr("src","icons/nav_2_active.svg");
//        $(".nav2 img").css("width","45px");
//    })
//  
    
    //    function info(data){
//        var i;
//        for(i=0;i<3;i++){
//              $("#info"+i+" p").text(data[i].para);
//                $("#info"+i+" img").attr("src",data[i].image);
//                $("#info"+i+"h3").text(data[i].title);
//                $("#info"+i+" .btn-blue").attr("href",data[i].link);
//        }
//      
//    }
});
