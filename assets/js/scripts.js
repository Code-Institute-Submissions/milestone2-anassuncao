$(document).ready(function(){

/*___________________Resume Page___________________*/

 /*I don't know in each order the user will click on the companies to see the information that each one has and I have to make sure that the info is displayed
  the way I want it to, so I had to make sure that everything that was supposed to be hidden was, in fact, hidden and what was supposed to be shown was showing. Hence the .hide of everything
  other than the block of text that I want to show. The same logic applies to the add and remove class to highlight the company that is clicked. */

  $(".team-lead").addClass("blue").click(function(){
    $(".team-lead").addClass("blue"); 
    $(".vmw-admin").removeClass("blue");
    $(".inf-admin").removeClass("blue");
    $(".sys-admin").removeClass("blue");
  });

  $(".vmw-admin").click(function(){
      $(".vmw-admin").addClass("blue");
      $(".team-lead").removeClass("blue");
      $(".inf-admin").removeClass("blue");
      $(".sys-admin").removeClass("blue");
  });
  
  $(".inf-admin").click(function(){
      $(".inf-admin").addClass("blue");
      $(".team-lead").removeClass("blue");
      $(".vmw-admin").removeClass("blue");
      $(".sys-admin").removeClass("blue");
  });
  
  $(".sys-admin").click(function(){
      $(".sys-admin").addClass("blue");
      $(".team-lead").removeClass("blue");
      $(".inf-admin").removeClass("blue");
      $(".vmw-admin").removeClass("blue");
  });

  $(".roles").click(function(){
    $("#content-1k4s").hide();
    $("#content-inok").hide();
    $("#content-2as").hide();
    $("#content-hiperbit").hide();
    $("#inok").removeClass("grow");
    $("#2as").removeClass("grow");
    $("#hiperbit").removeClass("grow");
    $("#1k4s").removeClass("grow");
  });
  
  $("#1k4s").click(function(){
      $("#content-1k4s").show();
      $("#content-inok").hide();
      $("#content-2as").hide();
      $("#content-hiperbit").hide();
      $("#1k4s").addClass("grow");
      $("#inok").removeClass("grow");
      $("#2as").removeClass("grow");
      $("#hiperbit").removeClass("grow");
  });
  
  $("#inok").click(function(){
      $("#content-inok").show();
      $("#content-1k4s").hide();
      $("#content-2as").hide();
      $("#content-hiperbit").hide();
      $("#inok").addClass("grow");  
      $("#1k4s").removeClass("grow");
      $("#2as").removeClass("grow");
      $("#hiperbit").removeClass("grow");
  });
  
  $("#2as").click(function(){
      $("#content-2as").show();
      $("#content-1k4s").hide();
      $("#content-inok").hide();
      $("#content-hiperbit").hide();
      $("#2as").addClass("grow");
      $("#1k4s").removeClass("grow");
      $("#inok").removeClass("grow");
      $("#hiperbit").removeClass("grow");
  });
  
  $("#hiperbit").click(function(){
      $("#content-hiperbit").show()
      $("#content-1k4s").hide();
      $("#content-inok").hide();
      $("#content-2as").hide();
      $("#hiperbit").addClass("grow");
      $("#1k4s").removeClass("grow");
      $("#2as").removeClass("grow");
      $("#inok").removeClass("grow");
  });
 

/*___________________Skills Page___________________*/

/*Similar logic is applied in this section. I've tried to give the user the possibility to hide and show
whatever he/she wants to using its "clicks" in a way that doesn't acumulate info on the screen making it 
messy and deorganized.*/
$("#v-pills-vmw").show();
$("#tech-skills-tech").click(function(){
    $("#v-pills-vmw").show();
    $("#v-pills-dell").hide();
    $("#v-pills-fujitsu").hide();
    $("#v-pills-ibm").hide();
    $("#v-pills-cisco").hide();
    $("#v-pills-windows").hide();
    $("#v-pills-hp").hide();
});
$("#v-pills-windows-tab").click(function(){
    $("#v-pills-dell").hide();
    $("#v-pills-fujitsu").hide();
    $("#v-pills-ibm").hide();
    $("#v-pills-cisco").hide();
    $("#v-pills-windows").show();
    $("#v-pills-hp").hide();
    $("#v-pills-vmw").hide();
});
$("#v-pills-hp-tab").click(function(){
    $("#v-pills-dell").hide();
    $("#v-pills-fujitsu").hide();
    $("#v-pills-ibm").hide();
    $("#v-pills-cisco").hide();
    $("#v-pills-windows").hide();
    $("#v-pills-hp").show();
    $("#v-pills-vmw").hide();
});
$("#v-pills-dell-tab").click(function(){
    $("#v-pills-dell").show();
    $("#v-pills-fujitsu").hide();
    $("#v-pills-ibm").hide();
    $("#v-pills-cisco").hide();
    $("#v-pills-windows").hide();
    $("#v-pills-hp").hide();
    $("#v-pills-vmw").hide();
});
$("#v-pills-fujitsu-tab").click(function(){
    $("#v-pills-dell").hide();
    $("#v-pills-fujitsu").show();
    $("#v-pills-ibm").hide();
    $("#v-pills-cisco").hide();
    $("#v-pills-windows").hide();
    $("#v-pills-hp").hide();
    $("#v-pills-vmw").hide();
});
$("#v-pills-ibm-tab").click(function(){
    $("#v-pills-dell").hide();
    $("#v-pills-fujitsu").hide();
    $("#v-pills-ibm").show();
    $("#v-pills-cisco").hide();
    $("#v-pills-windows").hide();
    $("#v-pills-hp").hide();
    $("#v-pills-vmw").hide();
});
$("#v-pills-cisco-tab").click(function(){
    $("#v-pills-dell").hide();
    $("#v-pills-fujitsu").hide();
    $("#v-pills-ibm").hide();
    $("#v-pills-cisco").show();
    $("#v-pills-windows").hide();
    $("#v-pills-hp").hide();
    $("#v-pills-vmw").hide();
});
$("#v-pills-vmw-tab").click(function(){
    $("#v-pills-dell").hide();
    $("#v-pills-fujitsu").hide();
    $("#v-pills-ibm").hide();
    $("#v-pills-cisco").hide();
    $("#v-pills-windows").hide();
    $("#v-pills-hp").hide();
    $("#v-pills-vmw").show();
});
});




