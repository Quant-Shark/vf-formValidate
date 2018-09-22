let fv_alerts = {

    empty : "Моля попълнете всички полета",
    email_Validation : "Невалиден имейл адрес",
    no_Characters : "Моля използвайте само букви",
    numeric : "Моля използвайте само цифри",
    checkboxes : "Не сте попълнили всички полета"

}

let fv_options = {

    borderStyle     : "solid",
    borderColor     : "red",
    borderRadius    : 2,

}

let fv_popup = {

    // Full screen overlay
    position: "fixed",
    height : "100vh",
    backgroundColor : "#2424247a",
    width: "100%",
    top: 0, left: 0,
    zindex : 8000,
    textAlign: "center",
    fontFamily : "myriad",
    fontSize: "1.1em",

    box:{
        width: "20%",
        max_width : "500",
        top: "50",
        left: "50",
        translate : "(-50%, -50%)",
        message : `Успешна регистрация!`,
        backgroundColor : "#dfdfdf",
        padding: "2%",
        borderRadius : "8px"
    },

    button: {
        padding         : "8px 25px",
        backgroundColor : "#cd357d",
        borderRadius    : "8px",
        color           : "#fff",
        border          : "none",
        margin          : "2% auto 0 auto",
        message         : "OK"
    }

}