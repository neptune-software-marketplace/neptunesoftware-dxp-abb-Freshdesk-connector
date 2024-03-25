const axios = modules.axios;

const reqBody = req.body;

//get Freshdesk connection details
const systemDetails = await entities.neptune_connector_freshdesk.createQueryBuilder("alias").getOne();

const config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: `https://${systemDetails.domain}.freshdesk.com/api/v2/tickets/${reqBody.id}`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': systemDetails.authKey, 
   
  }
};

const apiResult = await axios.request(config);
result.data = apiResult.data;

complete();
