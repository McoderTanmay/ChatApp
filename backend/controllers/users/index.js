const userQuery = require("../../querries/users");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports = {
  async signin(req, res) {
    let uid = req.body.uid;
    let FirstName = req.body.FirstName;
    let LastName = req.body.LastName;
    let UserName = req.body.UserName;
    let password = req.body.password;
    password = await bcrypt.hash(password,10);
    let data = {
      uid: uid,
      FirstName: FirstName,
      LastName: LastName,
      UserName: UserName,
      password: password,
    };
    try {
      let checkUser= await userQuery.getByUserName(UserName);
      if(checkUser){
        return res.status(403).send({
          code: 403,
          status:"User Name alerady exist"
        })
      }
      let user = await userQuery.createuser(data);
      return res.status(200).send({
        code: 200,
        status: "success",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(422)
        .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async login(req, res) {
    let UserName = req.body.UserName;
    let password = req.body.password;
    try {
      let authData = await userQuery.getByUserName(UserName);
      bcrypt.compare(password,authData.password).then((result)=>{
        let payload = {
          id:authData.id,
          roles:"user" 
        }
        let token = jwt.sign(payload,"randomkey",{expiresIn:"500h"});
        if (result) {
          return res.status(200)
          .send({ code: 200, status:"successful", data: token, user: authData})
        }
        return res
        .status(400)
        .send({ code:400, status: "failed", msg: "Incorrect password" })
      })
    } catch (error) {
      return res.status(401).send({
        code:401,
        status:"failed",
        massage:"Incorrect User Name"
      })
    }
  }
};
