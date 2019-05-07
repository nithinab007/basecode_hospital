const express=require('express');
const quickcontactRouter=express.Router();



var contct=[

    {
        title:"Main Reception",
        img:'/images/phone.jpg',
        phone:'05555555555'
        
    },
    {
        title:"Outpatients Reception",
        img:'/images/phone.jpg',
        phone:'05555555566'
    },
    {
        title:"Casualty",
        img:'/images/phone.jpg',
        phone:'05555555577'
        
    },
    {
        title:"Emergency / Ambulance",
        img:'/images/phone.jpg',
        phone:'05555555577'
        
    }

];

function router(nav)
{

quickcontactRouter.route('/')
    .get((req,res)=>{
        res.render('quickcontact.ejs',{title:"Quick Contact",
        contct, //as publishers is defined above we don't have to write here
         nav

    })
    });





    
return quickcontactRouter;
}

module.exports=router;
