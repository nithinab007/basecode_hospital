const express=require('express');
const spcRouter=express.Router();



var speclts=[

    {
        title:"Cardiology",
        
        doctor:"lev Nico",
        imgs:'/images/img.png'
    },
    {
        title:"ENT",
        
        doctor:"Tyson",
        imgs:'/images/img.png'
    },
    {
        title:"Critical care",
        
        docor:"Hary",
        imgs:'/images/img.png'
    },
    {
        title:"General and laparoscopic surgery",
       
        doctor:"Henry Mathew",
        imgs:'/images/img.png'
    }

];

function router(nav)
{

spcRouter.route('/')
    .get((req,res)=>{
        res.render('specialities.ejs',{title:"Specialities",
        speclts, //as authors is defined above we don't have to write here
        nav

    })
    });





spcRouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;

    res.render(
        'spclty.ejs',
        {

           nav,
           title:"Specialities",
           spc:speclts[id]
        }
    )

});
return spcRouter;
}

module.exports=router;
