const axios = modules.axios;

const reqBody = req.body;
log.info(reqBody)


const domain = reqBody.account.domain;
const apiKey = Buffer.from(reqBody.account.apiKey + ":X").toString("base64");


const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://${domain}.freshdesk.com/api/v2/tickets/${reqBody.id}`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic ' + apiKey, 
   
  }
};

const apiResult = await axios.request(config);
result.data = apiResult.data;

complete();
