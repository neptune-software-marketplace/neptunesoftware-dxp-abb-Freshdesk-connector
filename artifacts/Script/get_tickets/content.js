const axios = modules.axios;
const systemDetails = await entities.neptune_connector_freshdesk.createQueryBuilder("alias").getOne();


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://${systemDetails.domain}.freshdesk.com/api/v2/tickets`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': systemDetails.authKey
  }
};


const apiResult = await axios.request(config);

result.data = apiResult.data;

complete();