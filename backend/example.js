const KiteConnect=require('kiteconnect').KiteConnect;

const api_key="s877j9cbgja9c3ap",
                secret="api_secret",
                request_token="request_token",
                access_token="access_token";

const options={
    "api_key":api_key,
    "debug":false
}

let kc=new KiteConnect(options)
kc.setSessionExpiryHook(sessionHook)

//after being granted access token
if(!access_token){
    kc.generateSession(request_token, secret)
        .then((response)=>{
            console.log("Response", response);
            init()
        })

        .catch((err)=>{
            console.log(err)
        })
}else{
    kc.setAccessToken(access_token);
    init()
}

function sessionHook(){
    console.log("user logged out")
}

function init(){
    // console.log(kc.getLoginURL())
}