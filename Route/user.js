const mongoose=require('mongoose');
const express=require('express');
const router= express.Router();
const config=require('config');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const User=require('../Model/user');

router.post('/api/auth/register',(req,res)=>{
   
    const{displayName,password,email}=req.body;
  const userExist= User.findOne({"data.email":email}).then(user=>{
      if(user)
      {
          const error={
              email:user?'email is already in use':'check your mail'
          }
          return res.status(200).send({error});
      } 
  })

    
   
    const newUser=new User({
                uuid:"2hjkjguty",
                from:'real-db',
                password:password,
                role:'admin',
                data:{
                    displayName:displayName,
                    photoURL   : 'assets/images/avatars/Abbott.jpg',
                    email      : email,
                    settings   : {},
                    shortcuts  : []
                }
            });

            bcrypt.genSalt(8,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password=hash;
                    newUser.save().then(user=>{
                        jwt.sign({
                            id:user._id
                        },
                        config.get("jwtSecret"),{
                            expiresIn:3600
                        },
                        (err,token)=>{
                            if(err) throw new err ;
                            
                        
                            res.json({
                                token:token,
                              user:user
                          })
                        }) 
                    })
                })
            })
       
            
        

        })
        router.post('/api/auth', (req, res) => {
          const {email,password}=req.body;
            User.findOne({ "data.email":email })
              .then(user => {
                if(!user){
                    const error={
                     email:"invalid credentials"
                    }
                    return res.status(200).send({error});
                }
                bcrypt.compare(password, user.password)
                  .then(isMatch => {
                    if(!isMatch) {
                        const error={
                            password:"invalid credentials"
                        }
                        return res.status(200).send({error});
                    }
                    jwt.sign(
                      { id: user._id },
                      config.get('jwtSecret'),
                      { expiresIn: 3600 },
                      (err, access_token) => {
                        if(err) throw err;
                        res.json({
                          access_token,
                         user
                        });
                      }
                    )
                  })
              })
          });


//checking access code
router.post('/api/auth/access-token',(req,res)=>{
       const accessToken=req.body.data.access_token;
     
    
       try{
       const {id}=jwt.verify(accessToken,config.get('jwtSecret'));
       User.findById(id).select('-password').then((user)=>{
           if(user)
           {
            const updatedAccessToken=jwt.sign({id:user._id},config.get('jwtSecret'),{expiresIn:3600});
            return res.status(200).json({
                user,
                updatedAccessToken
            });
         
           }else{
            const error = "Invalid access token detected";
            return res.status(200).json({error});
           }
       });
       
       }catch(e){
        const error = "Invalid access token detected";
        return res.status(200).json({error});
       }
       
});



module.exports=router;