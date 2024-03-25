const axios = modules.axios;

const reqBody = req.body;
log.info(reqBody)

//get Freshdesk connection details
const systemDetails = await entities.neptune_connector_freshdesk.createQueryBuilder("alias").getOne();

//Freshdesk API configuration
const config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: `https://${systemDetails.domain}.freshdesk.com/api/v2/tickets/${reqBody.id}`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': systemDetails.authKey, 
   
  },
  data : JSON.stringify(reqBody.ticket)
};


const apiResult = await axios.request(config);
log.info(apiResult)
result = apiResult;

complete();
