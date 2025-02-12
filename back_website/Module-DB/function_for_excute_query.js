
const create_ID_in_insert_Regester_Table=(value)=>{
    // console.log(value)
    const pass_value=Object.values(value)[1].substring(0,Math.floor(Math.random()*10));
    const pass_value2=Object.values(value)[1].slice(-Math.floor(Math.random()*100));
    const Date_value=new Date().getTime()
    const Date_value2=new Date().toISOString()
    const Random_value=Math.random()*1000
    let string_ID =String(pass_value+"_"+Date_value+"_"+Random_value+"_"+Date_value2+"_"+pass_value2)
    if(string_ID.length > 100){
        string_ID=string_ID.substring(0,99)
    }else{string_ID=string_ID}
  
    return string_ID;
}


module.exports={
    create_ID_in_insert_Regester_Table
}