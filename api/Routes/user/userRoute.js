const {Router}= require("express")
const {
    login,
    loginWithToken,
    register,
    getCoins,
    getTotalStat,
    addWallet,
    verify,
    recoverAccount,
    resetPassword,
    promoteUser,
    demoteUser,
  } = require("./controllers.js");
  
  

const userRouter= Router()

userRouter.post("/register", register)
userRouter.post("/login",login )
userRouter.post("/tklogin",verify, loginWithToken)
userRouter.get("/getcoins", getCoins)
userRouter.post("/getstats", verify, getTotalStat)
userRouter.post("/addwallet", verify, addWallet)
userRouter.post("/forgotpassword", recoverAccount)
userRouter.post("/resetpassword", resetPassword)
userRouter.post("/promoteuser/:id", promoteUser)
userRouter.post("/demoteuser/:id", demoteUser)



module.exports=userRouter