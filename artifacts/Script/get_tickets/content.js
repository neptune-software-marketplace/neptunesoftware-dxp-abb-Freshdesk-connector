const axios = modules.axios;
const reqBody = req.body;

log.info(Buffer.from(reqBody.apiKey + ':X').toString('base64') );
// return;
log.info(reqBody)
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://${reqBody.domain}.freshdesk.com/api/v2/tickets`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from(reqBody.apiKey + ':X').toString('base64') 
  }
};


const apiResult = await axios.request(config);
log.info(apiResult.data)
result.data = apiResult.data;

complete();