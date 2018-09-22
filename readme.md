fv-formValidate documentation


 Main(parent) element attributes:

    fv-formValidate - to enable the functionality of the plug in
    fv-formValidate-alerts - if you want to apply alerts to a custom box 

        *
        to display the alerts create an empty div inside your form with the class
        ".fv-alert-box"
        *
    fv-formValidate-alerts-popup="true" / fv-popup="true" - if you want both the alerts and a pop up window to appear. 

        *
        Everything is fully customizable via vf-options.js file
        *


Input element classes for checking:

    .fv-email           : email validation
    .fv-no-characters   : no characters allowed
    .fv-numeric         : only numbers allowed
    .fv-checkbox        : checkboxes checked
    .fv-empty           : check is empty


 How to use the plug-in:
    <script src="script/fv-options.js"></script>
    <script src="script/fv-validate.min.js"></script>
    if(formValidate(element))
    if(formValidate(".form-input-wrapper")){ place your call back here }
    It returns true if all fields are filled right
