const { body, validationResult } = require('express-validator');

const validation_parameter=[
      body('id').notEmpty().withMessage("این فیلد نمیتواند خالی باشد"),
      body('comment').isLength({ min: 5 }).withMessage('Comment باید حداقل ۵ کاراکتر باشد')
]



// validation Method Regester Page============================================
const validation_method_comment_page=(req,res,next)=>{
      if(req.url === "/Regester" && req.method !== "POST"){
          return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
      }
      next()
  }
  

  module.exports={validationResult,validation_method_comment_page,validation_parameter}