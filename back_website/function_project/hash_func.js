const bcrept = require("bcrypt")

const hashpassword=async(value)=>{
    const salt=await bcrept.genSalt(10)
    const hash=await bcrept.hash(value,salt)
    return hash
}

const compae_hash=async(text_string,hass_string)=>{
    if(text_string&&hass_string){
        return await bcrept.compare(text_string,hass_string)
    }else{
        return;
    }
}

module.exports={
    hashpassword,
    compae_hash
}