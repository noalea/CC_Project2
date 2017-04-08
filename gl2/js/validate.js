// validate form function 

function validateForm() {
    var totalError = 0;
    var email = document.getElementById('email').value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone_r').value;
    var phoneno = /^\+?\(?([0-9]{1,4})\)?[-. ]?(([0-9]{3})[-. ]?)?([0-9]{3})[-. ]?([0-9]{3,5})$/;// /^\d{10}$/;  
    //var regEx = /^\+?\(?([0-9]{1,4})\)?[-. ]?(([0-9]{3})[-. ]?)?([0-9]{3})[-. ]?([0-9]{3,5})$/;
    var select_id = document.getElementById("province2");
    var selected = select_id.options[select_id.selectedIndex].value;
    var cmm = document.getElementById("cmm").value;

    var msgerror="";// email validation 
   
    // name validation 
    if (name === null || name === "") {
        /*
         document.getElementById("errName").innerHTML="Name is required!";
         shows("errName");*/
        // jq1_8_3("#named").attr("title","Please enter your full name");

        // popOver1("name");
        // jq1_8_3("#named").tooltip('show');
        msgerror += "- Name is required!\n\n";
        totalError = totalError + 1;
    }
    else
    {
       // document.getElementById("errName").innerHTML = "";
        // hides("errName");
        // jq1_8_3("#named").attr("title","");
        // noPopOver1("name");
        //   jq1_8_3("#named").tooltip('hide');
    }
    // phone validation 
    if (phoneno.test(phone) === false)
    {
       // document.getElementById("errPhone").innerHTML = "Invalid phone number!";
        /*
         jq1_8_3("#phoned").attr("title","Invalid phone number!");
         shows ("errPhone");*/
        //popOver1("phone");
        // jq1_8_3("#phoned").tooltip('show');
        msgerror += "- Invalid phone number!\n\n";
        totalError = totalError + 1;
    }
    else {
        //    hides("errPhone");
       // document.getElementById("errPhone").innerHTML = "";
        //jq1_8_3("#phoned").attr("title","");
        //    noPopOver1("phone");
        //     jq1_8_3("#phoned").tooltip('hide');
    }
    // province validation 

    if (selected === "" || selected === null)
    {
        /* document.getElementById("errProvince").innerHTML="Please select your Province!";
         jq1_8_3("#province2d").attr("title","Please select your Province (This one is good as is)");
         shows("errProvince");*/
        //  popOver1("province2");
        //  jq1_8_3("#province2d").tooltip('show');
        msgerror += "- Please select your Region!\n\n";
        totalError = totalError + 1;
    }
    else
    {   //jq1_8_3("#province2d").attr("title","");
        //   noPopOver1("province2");
        //      jq1_8_3("#province2d").tooltip('hide');
       // document.getElementById("errProvince").innerHTML = "";
        //  hides("errProvince");
    }
     if (re.test(email) === false) {
        /*
         document.getElementById("errEmail").innerHTML="Please enter correct format or it can't be empty!";
         shows("errEmail");
         */
        // jq1_8_3("#emaild").attr("title","Please make sure the email you've entered is a valid address");

        // popOver1("email");
        // jq1_8_3("#emaild").tooltip('show');
        msgerror += "- Please enter a correct email format or it can't be empty!\n\n";
        totalError = totalError + 1;
    }
    else
    {// jq1_8_3("#emaild").attr("title","");
       // document.getElementById("errEmail").innerHTML = "";
        //hides("errEmail");
        //noPopOver1("email");
        // jq1_8_3("#emaild").tooltip('hide');
    }
    // check for comments is empty or not
    if (cmm === null || cmm === "")
    {
        /* document.getElementById('errCmm').innerHTML="Comments can't be empty!";
         jq1_8_3("#cmmd").attr("title","Comments can't be empty!");
         shows("errCmm");*/
        msgerror += "- Comments can't be empty!\n\n";
        // popOver1("cmm");
        // jq1_8_3("#cmmd").tooltip('show');
    }
    else
    { // jq1_8_3("#cmmd").attr("title","");
        // noPopOver1("cmm");
        //  jq1_8_3("#cmmd").tooltip('hide');
        //document.getElementById('errCmm').innerHTML = "";
        //  hides("errCmm");
    }
    // all form are completed
    if (totalError === 0)
    { 
        return true;
    }
    // form error some attention required!
    else
    {
         alert("Following needs your attention:\n\n"+msgerror);
        return false;
    }
}
function popOver1(id) {
    jq1_8_3('#' + id + "d").popover({
        animation: false,
        html: true,
        trigger: 'manual',
        container: jq1_8_3(this).attr('id'),
        placement: 'right',
        content: function() {
            $return = '<div class="hover-hovercard"></div>';
        }
    }).on("mouseenter", function() {
        var _this = this;

        jq1_8_3(this).siblings(".popover").on("mouseleave", function() {
            jq1_8_3(_this).popover('hide');
            //jq1_8_3(_this).popover('show');
        });
    }).on("mouseleave", function() {
        var _this = this;

        if (!$(".popover:hover").length) {
            jq1_8_3(_this).popover("show");
        }
        /* setTimeout(function () {
         if (!jq1_8_3(".popover:hover").length) {
         jq1_8_3(_this).popover("hide");
         }
         }, 100);*/
    });
}
function hides(id) {
    jq1_8_3("#" + id).addClass("hide");
    jq1_8_3("#" + id).removeClass("show");
}
function shows(id)
{
    jq1_8_3("#" + id).addClass("show");
    jq1_8_3("#" + id).removeClass("hide");
}
function noPopOver1(id) {
    jq1_8_3('#' + id + "d").popover({
        animation: false,
        html: true,
        trigger: 'manual',
        container: jq1_8_3(this).attr('id'),
        placement: 'right',
        content: function() {
            $return = "";
        }
    }).on("mouseenter", function() {
        var _this = this;

        jq1_8_3(this).siblings(".popover").on("mouseleave", function() {
            jq1_8_3(_this).popover('hide');

        });
    }).on("mouseleave", function() {
        var _this = this;

        if (!$(".popover:hover").length) {
            jq1_8_3(_this).popover("hide");
        }

    });
}
// Words Counting
/* following function work 
 jq1_8_3(document).ready(function() {
 jq1_8_3("#cmm").on('keyup', function() {
 var words = this.value.match(/\S+/g).length;
 
 if (words > 200) {
 // Split the string on first 200 words and rejoin on spaces
 var trimmed =jq1_8_3(this).val().split(/\s+/, 200).join(" ");
 // Add a space at the end to make sure more typing creates new words
 jq1_8_3(this).val(trimmed + " ");
 }
 else {
 //jq1_8_3('#display_count').text(words);
 var word1=200-words;
 jq1_8_3('#display_word').text("Now you have "+ word1+ " words left.");
 //jq1_8_3('#word_left').text(200-words);
 }
 });
 }); */