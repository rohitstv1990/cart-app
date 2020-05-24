exports.validate = function (req, res) {
    console.log("inside sms")
    key="b5e26257f66895b310e91201511f4b6fd3366c1df679bf29"
    sid="demo525"
    token="36b2048ab399bb3776b793d7a7f74ea261d48ef0d7e9701a"
    from="Rohit"
    to="9886058245"
    body="Hello Bro"
    
    const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    
    const axios = require('axios')
    url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Sms/send.json"
    axios.post(url, 
       formUrlEncoded({
      "From": from,
      "To": to,
      "Body":body
    }),
    {   
        withCredentials: true,
        headers: {
            "Accept":"application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      )
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    });
    };