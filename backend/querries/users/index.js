const userModel = require("../../model").userModel;

module.exports = {
  async createuser(data) {
    return await userModel.create(data);
  },
  async login(data) {
    return await userModel.findOne({
      where:{
        UserName:data.UserName,
        password:data.password
      }
    })
  },
  async getUserByUid(uid){
    return userModel.findOne({
      where:{
        uid:uid
      }
    })
  },
  async getByUserName(UserName){
    return userModel.findOne({
      where:{
        UserName:UserName
      }
    })
  }
};
