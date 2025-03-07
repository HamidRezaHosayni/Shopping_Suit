const { query_excute } = require("./index")
require('dotenv').config();
const mysqul = require("mysql2/promise")
const { create_ID_in_insert_Regester_Table } = require("./function_for_excute_query");
const nodemailer = require("nodemailer");


class Class_All_Query {
    static #pool;
    static Getconnection = async () => {
        if (!Class_All_Query.#pool) {
            try {
                Class_All_Query.#pool = await mysqul.createConnection(query_excute);
            } catch (e) { console.log("connection database is error : \n" + e) }

        }
        return Class_All_Query.#pool;
    }

    static query = (sql, params) => {
        return Class_All_Query.Getconnection().then((value) => {
            return value.query(sql, params ?? []).then((Value_create_DB) => {
                return Value_create_DB
            }).catch((e) => {
                console.log("error excute query in method query in Class_DB : \n " + e)
                return e.sqlMessage;
            })

        })
    }

    // insert data in regester_validation table for validation user 
    static INSERT_DATABASE_REGESTER_VALIDATION = (value) => {
        const mm = create_ID_in_insert_Regester_Table(value)
        const tt = Object.values(value)
        tt.unshift(mm)

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'artmanclass.suit2000@gmail.com',
                pass: 'cuhvxhcgkscdqmmt'
            }
        });


        // تنظیمات ایمیل
        const mailOptions = {
            from: 'Artman_Class<hamidrezahosayni22@gmail.com>',
            to: 'power953xx@gmail.com',
            subject: 'ایمیل آزمایشی با HTML و پیوست',
            html: `
    <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); text-align: center;">
        <h1 style="color: #333;">به سایت < آرت من کلاس > خوش آمدید</h1>
        <p>برای فعال‌سازی حساب خود روی لینک زیر کلیک کنید:</p>
        <button style="background-color: #000; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
            <a href='loclahost:5000/validation_email/${mm}' style="color: #fff; text-decoration: none;">فعال‌سازی حساب</a>
        </button>
    </div>
   
`

        };



        return Class_All_Query.query("INSERT INTO regester_validation (id, username, password, phonenumber, email) VALUE (?,?,?,?,?)", tt).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data Regester tabale successfully ...!!!");

                // ارسال ایمیل
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("email address is error : \n" + error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

                return value_insert_Regester_table;
            } else {
                console.log("insert data Regester tabale error ...!!!")
            }


        }).catch((e) => { console.log("insert excute query error : \n" + e) })

    }

    // select data in regester_validation table for validation user 
    static SELECT_ALL_TABLE_REGESTER_VALIDATION = () => {
        return Class_All_Query.query("SELECT * FROM regester_validation").then((value_select_regester_table) => {
            if (value_select_regester_table[0][0]) {
                console.log("select table regester form successfully...!!!")
                return value_select_regester_table[0];
            }
            else { console.log("error select regester table") }
        }).catch((e) => { console.log("error excute qury select Regester Tabel : \n" + e) })
    }

    // select data in regester_validation table for validation user 
    static SELECT_ALL_TABLE_REGESTER = () => {
        return Class_All_Query.query("SELECT * FROM regester").then((value_select_regester_table) => {
            if (value_select_regester_table[0][0]) {
                console.log("select table regester form successfully...!!!")
                return value_select_regester_table[0];
            }
            else { console.log("error select regester table") }
        }).catch((e) => { console.log("error excute qury select Regester Tabel : \n" + e) })
    }

    // select data in PROFILE_USER table for validation user 
    static SELECT_ALL_TABLE_PROFILE_USER = () => {
        return Class_All_Query.query("SELECT * FROM profile_user").then((value_select_regester_table) => {
            if (value_select_regester_table[0][0]) {
                console.log("select table profile_user form successfully...!!!")
                return value_select_regester_table[0];
            }
            else {
                return value_select_regester_table[0]
            }
        }).catch((e) => { console.log("error excute qury select profile_user Tabel : \n" + e) })
    }


     // select data in PROFILE_USER table for validation user 
     static SELECT_ONE_TABLE_PROFILE_USER = (value) => {
        return Class_All_Query.query("SELECT * FROM profile_user WHERE id= ?",value).then((value_select_regester_table) => {
            if (value_select_regester_table[0][0]) {
                console.log("select table profile_user form successfully...!!!")
                return value_select_regester_table[0];
            }
            else {
                return value_select_regester_table[0]
            }
        }).catch((e) => { console.log("error excute qury select profile_user Tabel : \n" + e) })
    }




    // insert data in regester_validation table for validation user 
    static INSERT_DATA_IN_REGESTER_VALIDATION_TO_REGESTER = (value) => {
        const tt = Object.values(value)
        console.log(tt)
        return Class_All_Query.query("INSERT INTO regester (id, username, password, phonenumber, email) VALUE (?,?,?,?,?)", tt).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data Regester tabale successfully ...!!!");
                return value_insert_Regester_table;
            } else {
                console.log("insert data Regester tabale error ...!!!")
            }
        }).catch((e) => { console.log("insert excute query error : \n" + e) })

    }


    // insert data in Admin_login table for validation user 
    static SELECT_DATA_IN_ADMIN_LOGIN = () => {

        return Class_All_Query.query("SELECT * FROM admin_login").then((value_select_regester_table) => {
            if (value_select_regester_table[0][0]) {
                console.log("select table admin_login form successfully...!!!")
                return value_select_regester_table[0];
            }
            else { console.log("error select admin_login table") }
        }).catch((e) => {
            console.log("error excute qury select admin_login Tabel : \n" + e)
        })

    }


    static DELETE_DATA_IN_PYMENT_USER_TABLE = (value) => {
        return Class_All_Query.query("DELETE FROM pyment_user WHERE id=? ", value).then((value_delete_regester_validation) => {
            return value_delete_regester_validation
        })
    }

    static DELETE_DATA_IN_REGESTER_VALIDATION_TABLE = (value) => {
        return Class_All_Query.query("DELETE FROM regester_validation WHERE id=? ", value).then((value_delete_regester_validation) => {
            return value_delete_regester_validation
        })
    }


    // insert data in regester_validation table for validation user 
    static INSERT_TABLE_PANT_ORDER = (value) => {
        const mm = create_ID_in_insert_Regester_Table(value)
        const tt = Object.values(value)
        tt.unshift(mm)
        
        return Class_All_Query.query("INSERT INTO pant_order (id, ghad_shalvar, kamar_shalvar, andaza_basan, andaza_ran, andaza_zanoo, andaza_dampa, andaza_fagh) VALUE (?,?,?,?,?,?,?,?)", tt).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data pant_order tabale successfully ...!!!");
                return value_insert_Regester_table;
            } else {
                console.log("insert data pant_order tabale error ...!!!")
            }
        }).catch((e) => {
            console.log("insert excute query error : \n" + e)
            return e
        })

    }


    // insert data in regester_validation table for validation user 
    static INSERT_TABLE_ADD_PRODUCT = (value) => {
        const mm = create_ID_in_insert_Regester_Table(value)
        const tt = Object.values(value)
        tt.unshift(mm)
        // console.log(tt)
        return Class_All_Query.query("INSERT INTO add_product (id, name_product, price_product, color_suit, fabric_material, discription_product, uploadfile) VALUE (?,?,?,?,?,?,?)", tt).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data add_product tabale successfully ...!!!");
                return value_insert_Regester_table;
            } else {
                console.log("insert data add_product tabale error ...!!!")
            }
        }).catch((e) => {
            console.log("insert excute query add_product error : \n" + e)
            return e
        })

    }


    // insert data in regester_validation table for validation user 
    static INSERT_TABLE_CONTACT_ME = (value) => {
        const mm = create_ID_in_insert_Regester_Table(value)
        const tt = Object.values(value)
        tt.unshift(mm)
        // console.log(tt)
        return Class_All_Query.query("INSERT INTO contact_me (id, phone_number, Email_address, discreption) VALUE (?,?,?,?)", tt).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data add_product tabale successfully ...!!!");
                return value_insert_Regester_table;
            } else {
                console.log("insert data add_product tabale error ...!!!")
            }
        }).catch((e) => {
            console.log("insert excute query add_product error : \n" + e)
            return e
        })

    }


    // insert data in regester_validation table for validation user 
    static INSERT_DATA_IN_PROFILE_USER = (value) => {
        const tt = Object.values(value)
        console.log(tt)
        return Class_All_Query.query("INSERT INTO profile_user (id, username, password, phonenumber, email, Address, Pstal_Address) VALUE (?,?,?,?,?,?,?)", tt).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data profile_user tabale successfully ...!!!");
                return value_insert_Regester_table;
            } else {
                console.log("insert data profile_user tabale error ...!!!")
            }
        }).catch((e) => { return console.log("insert excute query profile_user TABALE error : \n" + e) })

    }
 

    // select data in Add_product table for validation user 
    static SELECT_ADD_PRODUCT_TABALE = () => {
        return Class_All_Query.query("SELECT * FROM add_product").then((value_select_add_product_table) => {
            if (value_select_add_product_table[0][0]) {
                console.log("select table add_product form successfully...!!!")
                return value_select_add_product_table[0];
            }
            else { console.log("error select add_product table. table is Empty") }
        }).catch((e) => { console.log("error excute qury select add_product Tabel : \n" + e) })
    }

  
    // select data in Add_product table for get one product
    static SELECT_ADD_PRODUCT_TABALE_FOR_GET_ONE_PRODUCT = (value) => {
        return Class_All_Query.query("SELECT * FROM add_product WHERE id=?",value).then((value_select_add_product_table) => {
            if (value_select_add_product_table[0][0]) {
                console.log("select table add_product for get one product form successfully...!!!")
                return value_select_add_product_table[0];
            }
            else { console.log("error select add_product table. table is Empty") }
        }).catch((e) => { console.log("error excute qury select add_product Tabel : \n" + e) })
    }

  

    static DELETE_DATA_IN_PROFILE_USER_TABLE = (value) => {
        return Class_All_Query.query("DELETE FROM profile_user WHERE id=? ", value).then((value_delete_profile_user) => {
            return value_delete_profile_user
        })
    }

    // insert data in comment_product table for validation user 
    static INSERT_DATA_IN_COMMENT_PRODUCT = (value) => {
        const tt = Object.values(value)
        return Class_All_Query.query("INSERT INTO comment_product (id, comment) VALUE (?,?)", [tt[1],tt[0]]).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data commet_product tabale successfully ...!!!");
                return value_insert_Regester_table;
            } else {
                console.log("insert data commet_product tabale error ...!!!")
            }
        }).catch((e) => { return console.log("insert excute query commet_product TABALE error : \n" + e) })

    }


    // insert data in comment_product table for validation user 
    static INSERT_DATA_IN_PAYMENT_USER = (value) => {
        const tt = Object.values(value)
        
        const id=tt[0]
        const pant_order=tt[1].pant_order
        const suit_order=tt[1].suit_order
        const suit_and_pant_order=tt[1].suit_and_pant_order
        const shopping_westbasket=tt[1].shopping_westbasket
        return Class_All_Query.query("INSERT INTO pyment_user (id, pant_order, suit_order, suit_and_pant_order, shopping_westbasket, status) VALUE (?,?,?,?,?,?)", [id,pant_order,suit_order,suit_and_pant_order,shopping_westbasket,"در انتظار تماس"]).then((value_insert_Regester_table) => {
            if (value_insert_Regester_table[0].fieldCount === 0) {
                console.log("insert data pyment_user tabale successfully ...!!!");
                return value_insert_Regester_table;
            } else {
                console.log("insert data pyment_user tabale error ...!!!")
            }
        }).catch((e) => { return console.log("insert excute query pyment_user TABALE error : \n" + e) })

    }



    
    // select data in Add_product table for get one product
    static SELECT_PYMENT_USER_TABALE = (value) => {
        return Class_All_Query.query("SELECT * FROM pyment_user WHERE id=?",value).then((value_select_add_product_table) => {
            if (value_select_add_product_table[0][0]) {
                console.log("select table pyment_user for get one product form successfully...!!!")
                return value_select_add_product_table[0];
            }
            else { console.log("error select pyment_user table. table is Empty") }
        }).catch((e) => { console.log("error excute qury select pyment_user Tabel : \n" + e) })
    }

  
    // select data in Add_product table for get one product
    static SELECT_PYMENT_USER_ALL_TABALE = () => {
        return Class_All_Query.query("SELECT * FROM pyment_user").then((value_select_add_product_table) => {
            if (value_select_add_product_table[0][0]) {
                console.log("select table pyment_user for get one product form successfully...!!!")
                return value_select_add_product_table[0];
            }
            else { console.log("error select pyment_user table. table is Empty") }
        }).catch((e) => { console.log("error excute qury select pyment_user Tabel : \n" + e) })
    }

  

    // select data in Add_product table for get one product
    static SELECT_COMMENT_PRODUCT_TABALE = (value) => {
        return Class_All_Query.query("SELECT * FROM comment_product WHERE id=?",value).then((value_select_add_product_table) => {
            if (value_select_add_product_table[0][0]) {
                console.log("select table add_product for get one product form successfully...!!!")
                return value_select_add_product_table[0];
            }
            else { console.log("error select add_product table. table is Empty") }
        }).catch((e) => { console.log("error excute qury select add_product Tabel : \n" + e) })
    }








}





module.exports = Class_All_Query