const express=require('express');
const appointmentRouter=express.Router();
/*
appointmentRouter.route('/')
    .get((req,res)=>{
        const user=req.query.username;
        const pass=req.query.paswd;

        if(user=='geethu'){
            if(pass=='1234'){
                res.redirect('/book')
                
                
            }
        
        
        else{
          res.redirect('/')
        }
    }
        
    })
    
    module.exports=appointmentRouter;

    */

    
function router()
{

appointmentRouter.route('/')
    .get((req,res)=>{
        res.render('appointment.ejs',{title:"Make an appointment with our Doctor",
     //as publishers is defined above we don't have to write here
         

    })
    });





    
return appointmentRouter;
}

module.exports=router;