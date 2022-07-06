const Axios = require("axios");
const API_URL = "http://backend-web-lb-1147932766.us-east-1.elb.amazonaws.com/api"; 

function genericGet(path) {
    console.info("GET", path);
  
    const URL = `${API_URL}/${path}`;
    console.log(URL)
    return Axios.get(URL);
}

const API = { 
    getUsers(){
        return genericGet("get_users/");
    },

    getVersion(){
        return genericGet("get_version/");
    },

    getPrestamo(){
        return genericGet("get_prestamos/");
    },

    getInversion(){
        return genericGet("get_inversion/");
    },

    // action database
    populate(){
        return genericGet("populate_database/");
    },

    cleanDB(){
        return genericGet("clean_database/");
    },

    createPayment(){
        return genericGet("create_payment/");
    },

    chargeInfo(){
        return genericGet("send_load/");
    },
    
};
export default API;