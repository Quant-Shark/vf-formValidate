



function success_box(){
    let popup = `
    <div class="fv-overlay" style="
        position: ${fv_popup.position};
        height: ${fv_popup.height};
        background-color: ${fv_popup.backgroundColor};
        width: ${fv_popup.width};
        top: ${fv_popup.top}; left: ${fv_popup.left};
        z-index: ${fv_popup.zindex};
        display: none;
        text-align: ${fv_popup.textAlign};
        font-family: ${fv_popup.fontFamily};
        font-size: ${fv_popup.fontSize};
    ">
        <div class="fv-popup">
            <div style="
                position:absolute; 
                background-color:       ${fv_popup.box.backgroundColor}; 
                width:                  ${fv_popup.box.width}; 
                max-width:              ${fv_popup.box.max_width}px; 
                top:                    ${fv_popup.box.top}%;  
                left:                   ${fv_popup.box.left}%; 
                transform:     translate${fv_popup.box.translate};
                box-sizing: border-box;
                padding:                ${fv_popup.box.padding};
                border-radius : ${fv_popup.box.borderRadius}">

                ${fv_popup.box.message}

                <br>
                <button class="dismiss-popup" 
                    style="
                    margin:             ${fv_popup.button.margin};
                    padding:            ${fv_popup.button.padding};
                    background-color :  ${fv_popup.button.backgroundColor};
                    border-radius:      ${fv_popup.button.borderRadius};
                    color:              ${fv_popup.button.color};
                    border:             ${fv_popup.button.border};
                    cursor: pointer;"
                >${fv_popup.button.message}</div>
            </div>
        </div>
    </div>`;
    

    $(popup).appendTo("body").show('fade', 800);
}

function formValidate(parent) {

    

    function validateEmail(email){
        let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(email);
    }

    function validate_noCharacters(no_characters){
        let re = /[^a-zA-Z0-9-wа-я]/;
        return re.test(no_characters);
    }

    function validate_numberic(numbers){
        let re = /^-?\d+\.?\d*$/;
        return  re.test(numbers);
    }

    function removeBorder(element){
        $(element ,".fv-wrong-input").css({"border" : `0px solid #fff`});
        $(element).removeClass("fv-wrong-input");
        $(element).blur();
    }

    function addBorder(element){
        $(element).addClass("fv-wrong-input");
        $(element).focus();
    }

 
    let no_char, e_mail, nums, checkbox, f_empty = false; 

   

        if($(parent).hasClass("formValidate")){

            let parentEl = $(parent);

           
        
            $(`${parent} input`).each(function(i){
    
                $(".fv-wrong-input").css({"border" : `${fv_options.borderRadius}px ${fv_options.borderStyle} ${fv_options.borderColor}`});
    
                let element = $(this);
    
                if($(element).hasClass("fv-email")){
                    str_email(this, parentEl);
                }
                
                else if($(element).hasClass("fv-no-characters")){
                    str_noCharacters(this, parentEl);
                }
        
                else if($(element).hasClass("fv-numeric")){
                    str_numeric(this, parentEl);
               
                }
    
                else if($(element).hasClass("fv-checkbox")){
                    str_checkboxes(this, parentEl);
               
                }

                else if($(element).hasClass("fv-empty")){
                    str_empty(this, parentEl);
                }
                
            });
            console.log(nums, e_mail, checkbox, no_char,  f_empty);
              
    }
    

    // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //       FUNCTIONS
    // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    function alerting(parent, text){
        if($(parent).attr("fv-formValidate-alerts")){
            $(".fv-alert-box").text(text);
        }
    }
  
    //Email validation
    function str_email(element, parent){
            
        let email = $(element).val();
        
        if(!email.length){
            addBorder(element);
            $(element).addClass("fv-wrong-input");
            alerting(parent, fv_alerts.empty);
        }
        else{
            if(validateEmail(email) === false){

                addBorder(element);
                $(element).addClass("fv-wrong-input");
                alerting(parent, fv_alerts.email_Validation);

            }
            else if(validateEmail(email) === true){
                removeBorder(element);
                return e_mail = true;
            }
        }

    }

    // No characters
    function str_noCharacters(element, parent){

        let noCharacters = $(element).val();

        if(!noCharacters.length){

            addBorder(element);
            $(element).addClass("fv-wrong-input");
            alerting(parent, fv_alerts.empty);
           
        }
        else{
            if(validate_noCharacters(noCharacters) === true){
                addBorder(element);
                $(element).addClass("fv-wrong-input");
                alerting(parent, fv_alerts.no_Characters);
            }
            else{
                removeBorder(element);
                return no_char = true;
               
            }
        }
    }

    // Numeric 

    function str_numeric(element){
        let numeric = $(element).val();

        if(!numeric.length){

            addBorder(element);
            $(element).addClass("fv-wrong-input");
            alerting(parent, fv_alerts.empty);
        }
        else{
            if(!validate_numberic(numeric) === true){
               
                addBorder(element);
                $(element).addClass("fv-wrong-input");
                alerting(parent, fv_alerts.numeric);
                
            }
            else{
                removeBorder(element);
                return nums = true;
            }
        }
    }

    // Checkboxes 

    function str_checkboxes(element){

        let getLength  = $(".fv-checkbox").length;

        let checkboxes = $(element).is(":checked").length;

        if($(".fv-checkbox").not(':checked').length > 0){
            addBorder(element);
            console.log("count",$(".fv-checkbox").not(':checked').length );
            $(element).addClass("fv-wrong-input");
            alerting(parent, fv_alerts.empty);
        }

        else if($(".fv-checkbox").is(':checked').length = getLength){
            console.log("count",$(".fv-checkbox").is(':checked').length );
            removeBorder(element);
            return checkbox = true;
        }
        
    }


    // empty only

    function str_empty(element){
        let empty = $(element).val();

        if(empty.length == 0){

            addBorder(element);
            $(element).addClass("fv-wrong-input");
            alerting(parent, fv_alerts.empty);
        }
        else{
            removeBorder(element);
            return f_empty = true;
        }
        
    }

    // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



    if(no_char  === true && e_mail === true && nums === true && checkbox === true && f_empty === true){
        console.log("true");
        $(".fv-alert-box").text("");
        if($(parent).attr('fv-popup') || $(parent).attr('fv-formValidate-popup') || $(parent).attr('fv-formValidate-alerts-popup')){
            success_box();

            $(".dismiss-popup").on('click', function(){
                $(this).parent().parent().parent().hide('fade', 800, function(){
                    $(this).remove();
                });
            });
        }

        return true;

    }


   
}







