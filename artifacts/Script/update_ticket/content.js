const axios = modules.axios;

const reqBody = req.body;
//log.info(reqBody)


const domain = reqBody.account.domain;
const apiKey = Buffer.from(reqBody.account.apiKey + ":X").toString("base64");


const config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: `https://${domain}.freshdesk.com/api/v2/tickets/${reqBody.id}`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic ' + apiKey, 
   
  },
  data : JSON.stringify(reqBody.ticket)
};
log.info(config)

const apiResult = await axios.request(config);
result = apiResult;

complete();
