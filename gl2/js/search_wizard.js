var whereitletoff = 0;
var reacheMax = 0;
var scrollfix = 0;
var jq1_8_3 = jQuery.noConflict(true);
var test222 = 0;
var _RESULT_LIMIT = 7;// limit the search result to show to limit then hide other program

function getStepId(el){
    return parseInt( jq1_8_3(el).parents(".slide").attr("id").replace("s", ""), 10 );
    this["removeAttrStep"+id]();
}
function nextStep(el, enable_button){
    var id = getStepId(el);

    if(enable_button)
    {
        jq1_8_3('#s'+ id +' .next-button').removeAttr("disabled");
    }

    if (validateAllSteps() !== 0)
    {
        GoNext(id, id+1);
    }
    else
    {
        scrollfix = 1;
        lastStepCheck();
        GoNextNav(7);

        result(undefined, document.getElementById("iamdone"));
    }
}
function prevStep(el){
    var id = getStepId(el);
    GoNext(id, id-1);
}

function  GoNext(i, j) {
    if (j === 0)// go to step 0;
    {
        jq1_8_3(".setps").removeClass('show');
        jq1_8_3(".setps").addClass('hide');
        if (i !== 1)
            jq1_8_3("#startherebutton").html("<strong>Continue Your Funding Search</strong>");

        //hide i
        jq1_8_3("#s" + i).removeClass('show');
        jq1_8_3("#s" + i).addClass('hide');
        //show j
        jq1_8_3("#s" + j).removeClass('hide');
        jq1_8_3("#s" + j).addClass('show');
        // always hide the step 7 when user click on close button
        jq1_8_3("#s7").removeClass('show');
        jq1_8_3("#s7").addClass('hide');
        // remove the green out
        jq1_8_3(".StepProgress" + j + "-in").removeClass('green');
        jq1_8_3(".StepProgress" + j + "-in").addClass('blue-o');
        jq1_8_3("#Progress_txt" + j).addClass('gray-o-normal');
        whereitletoff = i;
    }
    else if (i === 0 && whereitletoff === 7)//resume on step 7
    {
        j = whereitletoff;
        do_whereitletoff(i, 6);
        do_whereitletoff(i, 7);
        whereitletoff = 6;
        if (reacheMax == 7)
        {
            jq1_8_3("#s7").addClass("show");

        }

    }
    else if (i === 0 && whereitletoff !== 0 && j !== 7)// resume the question step1-6 and j!==0 prevent from show other step 1-5 while 6 and 7 is show up
    {
        j = whereitletoff;
        do_whereitletoff(i, j);
        if (reacheMax == 7)
        {
            jq1_8_3("#s7").addClass("show");

        }
    }
    else
    {   //if it is hide show it back
        jq1_8_3("#setps").removeClass('hide');
        jq1_8_3("#setps").addClass('show');

        //step text done
        jq1_8_3(".StepProgress" + i + "-in").removeClass('green');
        jq1_8_3(".StepProgress" + i + "-in").addClass('blue-o');
        jq1_8_3("#Progress_txt" + i).removeClass('black-o');
        jq1_8_3("#Progress_txt" + i).addClass('gray-o-normal');


        //hide i
        jq1_8_3("#s" + i).removeClass('show');
        jq1_8_3("#s" + i).addClass('hide');

        jq1_8_3("#ls" + j).removeClass('disabled');

        //step text is currently at it 
        jq1_8_3(".StepProgress" + j + "-in").removeClass('blue-o');
        jq1_8_3(".StepProgress" + j + "-in").addClass('green');
        jq1_8_3("#Progress_txt" + j).addClass('black-o');
        //show j
        jq1_8_3("#s" + j).removeClass('hide');
        jq1_8_3("#s" + j).addClass('show');
        if (reacheMax == 7)
        {
            jq1_8_3("#s7").addClass("show");

        }

    }
    // add onclick to navigation
    if (j === 7)
    {
        // alert(i +" "+ j+" "+scrollfix);
        //jq1_8_3("#ls" + j).attr("onclick", "Result(\"" + tkn + "\");GoNextNav(7);");
        jq1_8_3("#ls" + j).css("cursor", "pointer");



    }

    else
    {
        jq1_8_3("#ls" + i).attr("onclick", "GoNextNav(" + (i) + ")");
        jq1_8_3("#ls" + i).css("cursor", "pointer");
    }
}
// use only for navigation 
function GoNextNav(show)
{
    if (reacheMax === 7 && validateAllSteps() !== 0) {/// if the reach step 7 and click on other steps then do the validation 
        return;
    }
    else
    {
        for (var i = 1; i < 9; i++)
        {
            _classname = jq1_8_3(".StepProgress" + i + "-in").hasClass("gray-o");
            if (i !== show && i !== 7)
            {
                jq1_8_3(".StepProgress" + i + "-in").removeClass('green');
                if (_classname === false)
                {

                    jq1_8_3(".StepProgress" + i + "-in").addClass('blue-o');
                    jq1_8_3("#Progress_txt" + i).removeClass('black-o');
                    jq1_8_3("#Progress_txt" + i).addClass('gray-o-normal');
                }
                jq1_8_3("#s" + i).removeClass('show');
                jq1_8_3("#s" + i).addClass('hide');
            }
            else
            {
                if (i !== 7)
                {
                    jq1_8_3("#s" + i).removeClass('hide');
                    jq1_8_3("#s" + i).addClass('show');
                    jq1_8_3(".StepProgress" + i + "-in").removeClass('gray-o');
                    jq1_8_3(".StepProgress" + i + "-in").removeClass('blue-o');
                    jq1_8_3(".StepProgress" + i + "-in").addClass('green');
                    jq1_8_3("#Progress_txt" + i).addClass('black-o');
                    slideChange();
                }
                else
                {//alert (i);
                    /* this just remove the green and add blue from step 7 if they click on other button  */
                    if (reacheMax === 7) {
                        jq1_8_3(".StepProgress7-in").removeClass('green');
                        jq1_8_3(".StepProgress7-in").addClass('blue-o');
                        jq1_8_3("#Progress_txt7").removeClass('black-o');
                        jq1_8_3("#Progress_txt7").addClass('gray-o-normal');
                    }
                }
            }
        }
    }

}
// function for whereitleoff
function do_whereitletoff(i, j)
{
    jq1_8_3("#setps").removeClass('hide');
    jq1_8_3("#setps").addClass('show');
    //hide i
    jq1_8_3("#s" + i).removeClass('show');
    jq1_8_3("#s" + i).addClass('hide');
    //show j
    jq1_8_3("#s" + j).removeClass('hide');
    jq1_8_3("#s" + j).addClass('show');
    // chaging status to green if they blue
    jq1_8_3(".StepProgress" + j + "-in").removeClass('blue-o');
    jq1_8_3(".StepProgress" + j + "-in").addClass('green');
}
//on document load *********************************
jq1_8_3(document).ready(function () {
    
    jq1_8_3('.gl2-select[multiple]').multiselect({
        buttonWidth: 'auto',
        buttonText: function(options, select) {
            var label;
            
            if (options.length === 0) {
                label = 'Please select one or more...';
            }
            else if (options.length === 1) {
                label = jq1_8_3(options[0]).text();
            }
            else if (options.length > 1) {
                label = options.length + ' Selected'
            }

            return label +  ' <b class="caret"></b>';
        },
        templates: {
            button: '<span class="multiselect dropdown-toggle" data-toggle="dropdown"></span>'
        },
        onChange: function(option, checked, select) {
            
            var sub_sq_id = parseInt( jq1_8_3(option).data("sub-sq-count"), 10);
            var sub_sq_list = jq1_8_3(option).siblings("[data-sub-sq-count="+(sub_sq_id-1)+"], "+"[data-sub-sq-count="+(sub_sq_id+1)+"]")

            if(checked && sub_sq_list.length)
            {
                jq1_8_3(option).siblings("[data-sub-sq-count="+sub_sq_id+"]:selected").each(function(i){
                    jq1_8_3(this).removeAttr('selected').prop('selected', false);
                });

                jq1_8_3('.gl2-select[multiple]').multiselect('refresh');
            }

            lastStepCheck();
        }
    });
    jq1_8_3('.gl2-select:not([multiple])').multiselect({
        buttonWidth: 'auto',
        buttonText: function(options, select) {
            var label;

            if (options.length === 0) {
                label = 'Please select one...';
            }
            else {
                label = jq1_8_3(options[0]).text();
            }

            return label +  ' <b class="caret"></b>';
        },
        templates: {
            button: '<span class="multiselect dropdown-toggle" data-toggle="dropdown"></span>'
        },
        onChange: function(option, checked, select){
            lastStepCheck();
        }

    });


//setp 3 checkbox turn to radio
//alert(_group_);
    // if (_group_ > 0) {
    //     for (var i = 0; i < _group_; i++) {
    //         turn2RadioStyle("s3_group" + i);
    //     }
    // }
//setp 4 checkbox turn to radio
    //turn2RadioStyle("s4_group2");
    turn2RadioStyle("s4_group1");
//load all the style to progress bar
    jq1_8_3(".StepProgress1-in").addClass('green');
    jq1_8_3("#Progress_txt1").addClass('black-o');
    jq1_8_3(".StepProgress1-out").addClass('white');
    jq1_8_3(".StepProgress2-out").addClass('white');
    jq1_8_3(".StepProgress3-out").addClass('white');
    jq1_8_3(".StepProgress4-out").addClass('white');
    jq1_8_3(".StepProgress5-out").addClass('white');
    jq1_8_3(".StepProgress6-out").addClass('white');
    jq1_8_3(".StepProgress7-out").addClass('white');
    /*/ on load remove progress bar. if start with question then remove this one and remove the hide and show from s0
     jq1_8_3(".setps").removeClass('show');
     jq1_8_3(".setps").addClass('hide');*/


// count the  check value

    // for (var counter_ins = 1; counter_ins <= _dropdown_count_; counter_ins++)
    // {
    //     jq1_8_3('#psn-btn' + counter_ins).click(function (e) {
    //         if (!jq1_8_3('#psn-btn' + counter_ins).data('open')) {
    //             var val = jq1_8_3('#' + this.id + ' [name="personal"]:checked').map(function () {

    //                 return jq1_8_3("#l" + this.id).text();
    //             }).get().join(',');
    //             if (val != "")
    //                 jq1_8_3(this).parents('.btn-group').find('.dropdown-toggle').html(val + ' <span class="caret" id="dropdown-icon"></span>');
    //             else
    //                 jq1_8_3(this).parents('.btn-group').find('.dropdown-toggle').html('Select one or more <span class="caret" id="dropdown-icon"></span>');
    //         }
    //         else
    //             jq1_8_3('#psn-btn' + counter_ins).data('open', true);

    //         if (jq1_8_3(this).hasClass('dropdown-menu-form'))
    //             e.stopPropagation();

    //     });// console.log(counter_ins+"\n");
    // }


    /************add on click to step 7
     *  run only user click reach to reachmax =7
     */
    jq1_8_3("#ls7").on("click", function () { //alert(validateAllSteps());
        if (reacheMax !== 7 || validateAllSteps() !== 0)
        {
            return;
        }
        else
        {
            scrollfix = 1;
            GoNextNav(7);
            //jq1_8_3("#iamdone").trigger("click");

            result(undefined, document.getElementById("iamdone"));
        }
    });
    /************/

});
function turn2RadioStyle(CSS_class) {
    jq1_8_3("." + CSS_class).each(function ()
    {
        jq1_8_3(this).click(function ()
        {
            if (jq1_8_3(this).is(":checked"))
            {
                jq1_8_3("." + CSS_class).prop('checked', false);

                jq1_8_3(this).prop('checked', true);
            }
            else// when it uncheck than uncheck all
                jq1_8_3(this).prop('checked', false);
        });
    });
}

function validateStep(el, return_val, no_prompt)
{   
    var i = getStepId(el);
    var valid = (i === 1) ? true : false;
    var err_msg = (i === 1) ? "Please fill out the required fields: \n" : "Please select at least one option";

    var radio = jq1_8_3("#s"+i+" input[type='radio'][name^='q_']");
    var radio_checked = jq1_8_3("#s"+i+" input[type='radio'][name^='q_']:checked");

    if(i === 1)
    {
        if( radio.length > 0 && radio_checked.length === 0)
        {
            valid = false;
            err_msg += "- " + jq1_8_3("#s"+i+" input[type='radio'][name^='q_']").prevAll('label').text().replace(':', '') + "\n";
        }

        jq1_8_3('#s'+i+' select').each(function(index)
        {
            if( !jq1_8_3(this).val() )
            {
                err_msg += "- " + jq1_8_3(this).prevAll('label').text().replace(':', '') + "\n";
                valid = false;
            }
        });
    }
    else
    {
        valid = (radio_checked.length === 1) ? true : false;
        jq1_8_3('#s'+i+' select').each(function(index)
        {
            if( jq1_8_3(this).val() )
            {
                valid = true;
            }
        });
    }

    removeUKfooterImage();

    if(valid)
    {
        if(return_val)
        {
            return true;
        }
        GoNext(i, i+1);
    }
    else
    {
        if(!no_prompt)
        {
            alert(err_msg);
        }

        if(return_val)
        {
            return false;
        }
    }
}

function validateAllSteps()
{
    var errors = 0;

    jq1_8_3("[id^='s'].slide").each(function(i){
        if( !validateStep(jq1_8_3(this).children(":first"), true, true) )
        {
            errors++;
        }
    });

    return errors;
}

function lastStepCheck(){
    if(validateAllSteps() === 0)
    {
        jq1_8_3(".StepProgress7-in").removeClass('green');
        jq1_8_3(".StepProgress7-in").addClass('blue-o');
        jq1_8_3("#Progress_txt7").removeClass('black-o');
        jq1_8_3("#Progress_txt7").addClass('gray-o-normal');

        jq1_8_3("#ls7").attr("onclick", "result(undefined, document.getElementById('iamdone'))");
        jq1_8_3("#ls7").removeClass('disabled');
    }
}

function result(key, el)
{
    if(el && !validateStep(el, true)){ return; }

    var db_4_show = "";
    whereitletoff = 0;
    var total = 0;

    var form_data = {
        token: key,
        is_ajax: 1
    };

    var inputValuesCb = function(i){
        var val = jq1_8_3(this).val();
        var name = jq1_8_3(this).attr("name");
        name = "q_" + name.split("_")[1];

        if(val)
        {
            if(form_data[name])
            {
                form_data[name] += "," + val.toString();
            }
            else
            {
                form_data[name] = val.toString();
            }
        }
    };

    jq1_8_3("select[name^='q_']").each(inputValuesCb);
    jq1_8_3("input[type='radio'][name^='q_']:checked").each(inputValuesCb);


    jq1_8_3.ajax({
        type: "POST",
        url: 'gl2/controllers/index_control.php', //'controllers/index_control.php',
        data: form_data,
        success: function (data1)
        {//console.log( jq1_8_3.parseJSON(data1));
            var allid = "";
            reacheMax = 7;// set to tell the GoNextNav to know they are done
            var url_needed = "";
            var textareaVal = "";
            var data = jq1_8_3.parseJSON(data1);
            var programs = 0;
            var db = "";
            var cssClass = "";
            jq1_8_3(data).each(function (i, val)
            {
                programs++;

                if (programs == _RESULT_LIMIT + 1)
                {
                    cssClass = "hide";
                }

                allid += val.id + ",";
                total += parseInt(val.funding_amount, 10);

                db += "<tr id='data_p" + programs + "' class='" + cssClass + "'><td>";
                db += "  " + val.grant_finder_results + "";
                db += " <strong>Program Code "+val.program_code+"</strong> <td></tr>";

                db_4_show += "<tr id='data_p" + programs + "' ><td colspan=2>";
                db_4_show += "  " + val.grant_finder_results + "";
                db_4_show += "<td></tr>";

            });
            if (db != "") {

                gotoStep8();
                // set the blue to step6 and green on step 7
                //step text done
                jq1_8_3(".StepProgress6-in").removeClass('green');
                jq1_8_3(".StepProgress6-in").addClass('blue-o');
                jq1_8_3("#Progress_txt6").removeClass('black-o');
                jq1_8_3("#Progress_txt6").addClass('gray-o-normal');
                //////////////end
                // more result show the more link
                if (programs > _RESULT_LIMIT)
                {
                    url_needed = "<center><button type='button' onclick='showTheRest(" + programs + ")' id='lnkshow' class='btn btn-primary btn-block'>Click to view the " + (programs - _RESULT_LIMIT) + " other remaining programme(s)</button></center>";
                    jq1_8_3("#showmore").html(url_needed);
                }
                else
                {
                    jq1_8_3("#showmore").html("");
                }
                jq1_8_3("#DisplayResult").html(db);



            }
            else {

                gotoStep8();

                //  GoNext(6,7);// if want to show step 6 when it no result coming up
                // set the blue to step6 and green on step 7
                //step text done
                jq1_8_3(".StepProgress6-in").removeClass('green');
                jq1_8_3(".StepProgress6-in").addClass('blue-o');
                jq1_8_3("#Progress_txt6").removeClass('black-o');
                jq1_8_3("#Progress_txt6").addClass('gray-o-normal');
                //////////////end
                //remove following in case it still there with more link 
                jq1_8_3("#showmore").html("");
                jq1_8_3("#DisplayResult").html("<tr><td ><div class='notfound'><h4><strong><i>Sorry No Result Found!</i></strong></h4></div></td></tr>");



            }
            jq1_8_3("#programN").html(programs);
            jq1_8_3("#amountN").html(toCurrency(total));
            var textareaVal2 = "";
            textareaVal2 = '<br><div style="background-color:#e72825; color:#ffffff; float:left; font-weight:bold; width:100%;margin-bottom: 10px;">';
            textareaVal += "I may be qualified for " + programs + " funding programme(s) with a total of £" + toCurrency(total) + " in possible financing. Please contact me with information about this.";
            textareaVal2 += "I may be qualified for " + programs + " funding programme(s) with a total of £" + toCurrency(total) + " in possible financing. Please contact me with information about this.</div>";
            var extra_comments = textareaVal2 + getTextFromInput();
            extra_comments = jq1_8_3('<div/>').text(extra_comments + db_4_show + "</table>").html();
            jq1_8_3("#contact_comments_m").val(extra_comments);
            jq1_8_3("#cmm").val(textareaVal);
            // scroll to result
            //alert(whereitletoff);
            jq1_8_3('html, body').animate({
                scrollTop: jq1_8_3("#scrollHere").offset().top
            }, 500);
            jq1_8_3("#totalfnumber_r").val(programs);
            jq1_8_3("#totalfamount_r").val(total);
            jq1_8_3("#allids_r").val(allid.slice(0, -1));
        }

    });

}

function getTextFromInput()//return text with div wrap 
{
    var selected = [];
    jq1_8_3('#mchk option:selected').each(function () {
        selected.push([jq1_8_3(this).text(), jq1_8_3(this).data('order')]);
    });

    selected.sort(function (a, b) {
        return a[1] - b[1];
    });
    var text2go = '';
    var text = '';
    for (var i = 0; i < selected.length; i++) {
        text += selected[i][0] + '<>';
    }
    text2go = text.substring(0, text.length - 2);





    var province = "<>" + jq1_8_3("#province  option:selected").text();
    var financialNeed = text2go;//jq1_8_3('#mchk option:selected').text();
    var status = getRadioText('input:radio[name=status]:checked');
    var revenue = getRadioText('input:radio[name=revenue]:checked');
    var bus_category = getRadioText('[name="business_cat"]:checked');
    var personal = getRadioText('[name="personal"]:checked');
    var business = getRadioText('[name="business"]:checked');
    var whole_string = financialNeed + province + status + personal + business + revenue + bus_category;
    var user_choose = whole_string.split("<>");
    var string = '<table width="100%" cellpadding=5 cellspacing=0 ><tr bgcolor=#f3f3f3><td width="50%" valign=top>';
    var j = 0;
    for (var i = 0; i < user_choose.length / 2; i++)
    {
        j = i + 1;
        if (user_choose[i] !== "")
        {
            string += '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">' + j + '. ' + user_choose[i] + '</div>';
        }
    }
    string += "</td><td>";
    for (var d = user_choose.length / 2; d < user_choose.length; d++)
    {
        j = d + 1;

        if (user_choose[d] !== "") {
            string += '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">' + j + '. ' + user_choose[d] + '</div>';
        }

    }
    string += "</td></tr>";
    /*var string = '<table width="100%" cellpadding=5 cellspacing=0 ><tr bgcolor=#f3f3f3><td width="50%" valign=top>'+
     '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">1. ' + financialNeed + '</div>'+
     '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">2. ' + province + '</div>'+
     '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">3. ' + status + '</div>'+
     '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">4. ' + personal + '</div></td>'+
     '<td width="50%" valign=top>' +
     '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">5. ' + business + '</div>' +            
     '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">6. ' + revenue + '</div>' +            
     '<div style="background-color:#f3f3f3;color:#028ad1; float:left; font-weight:bold; width:100%">7. ' + bus_category + '</div></td></tr>';
     */

    return  string;

}
function getRadioText(str)// get text add 
{
    var text = "";
    jq1_8_3(str).each(function () {
        var idVal = jq1_8_3(this).attr("id");
        text += jq1_8_3("label[for='" + idVal + "']").text() + "<>";
    });//alert(text);
    return text;
}
function toCurrency(amount) {
    var a = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return a.substring(0, a.length - 3);
}

// remove or show the over 7 data
function showTheRest(max)
{
    for (var i = 6; i <= max; i++)
        jq1_8_3("#data_p" + i).removeClass('hide');
    //
    //jq1_8_3("#lnkshow").addClass('hide');
    jq1_8_3("#lnkshow").html('Done');

    jq1_8_3("#filter_div_con").addClass('show');
    jq1_8_3("#filter_div_con").removeClass('hide');

}

function gotoStep8()
{
    // hide 6 show start again box which is step 8

    GoNext(6, 8);
    if (scrollfix === 0)// this avoid call the Results function again fix the scroll to form calling 3 time.
        // hide 0 show step 7
        GoNext(0, 7);
    // else
    // {   // ADD GREEN THEN USER CLICK STEP 7 OR VIEW PROGRAM PROGRESS THE SECOND TIME IT WILL HAVE TO DO THE MANUAL UPDATE TO GREEN ON THE PROGRESSBAR              
    //     jq1_8_3(".StepProgress7-in").removeClass('blue-o');
    //     jq1_8_3(".StepProgress7-in").addClass('green');
    //     jq1_8_3("#Progress_txt7").addClass('gray-o-normal');
    //     jq1_8_3("#Progress_txt7").addClass('black-o');
    scrollfix = 0;
    // }   // the div up
    jq1_8_3("#s7").removeClass("slide2");
    jq1_8_3("#s7").addClass("slide3");

    // hide the navigation
    // jq1_8_3(".setps").removeClass('show');
    //jq1_8_3(".setps").addClass('hide');
    jq1_8_3("#setps").removeClass('setps');
    jq1_8_3("#setps").addClass('setps2');
}
function gotoBackStep6()
{                   // when user click on the  + button on step 7 ( RESULTS PAGE) REMOVE THE GREEN PUT THE BLUE INSTEAD
    jq1_8_3(".StepProgress7-in").removeClass('green');
    jq1_8_3(".StepProgress7-in").addClass('blue-o');
    jq1_8_3("#Progress_txt7").addClass('black-o');
    jq1_8_3("#Progress_txt7").addClass('gray-o-normal');
    GoNext(8, 6);
    GoNext(0, 6);

    slideChange();




}
function ResetAll()
{
    // following is just reset to default
    document.getElementById("userInfo").reset();
    GoNext(8, 1);
    //GoNext(7, 0);// hide number 7 since the requirment this code comment for now
    slideChange();
    whereitletoff = 0;
    jq1_8_3("#startherebutton").html("<strong>Your Funding Search Starts Here</strong>");
    //reset all the navigation
    for (var i = 1; i < 8; i++) {
        jq1_8_3(".StepProgress" + i + "-in").removeClass('green');
        jq1_8_3(".StepProgress" + i + "-in").removeClass('blue-o');
        jq1_8_3(".StepProgress" + i + "-in").removeClass('gray-o-normal');
        jq1_8_3("#Progress_txt" + i).removeClass('black-o');
        jq1_8_3("#Progress_txt" + i).addClass('gray-o-normal');

    }
    //reset multiselect
    jq1_8_3('#mchk').multiselect('clearSelection');
    jq1_8_3('#mchk').multiselect('refresh');
    //set it back to normal
    /* jq1_8_3(".setps").removeClass('show');
     jq1_8_3(".setps").addClass('hide');
     need if only back to step 0*/
}

function slideChange()
{
    jq1_8_3("#s7").removeClass("slide3");
    jq1_8_3("#s7").addClass("slide2");
    jq1_8_3("#setps").removeClass('setps2');
    jq1_8_3("#setps").addClass('setps');

}
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
//  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        // MSIE
        return true;
    }
    else
        return false;
}

function on_close()
{
    jq1_8_3('.wrap').attr('style', 'height:150px;');
}
function on_open()
{
    // jq1_8_3('.wrap').attr('style','height:300px');
    jq1_8_3('.wrap').removeAttr('style');
}
function removeUKfooterImage()
{
    if (jq1_8_3('#sticky_footer')) {
        jq1_8_3('#sticky_footer').fadeOut('slow');
    }
}
function selectcheck(disable_id)
{
    jq1_8_3('#' + disable_id).prop('checked', false);
    alert(disable_id);
}

// setTimeout(function(){
//     GoNext(1, 7);
// }, 1500);