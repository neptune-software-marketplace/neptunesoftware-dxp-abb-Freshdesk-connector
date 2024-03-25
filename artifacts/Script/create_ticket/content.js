const axios = modules.axios;

const reqBody = req.body;
log.info(reqBody);
//get Freshdesk connection details
const systemDetails = await entities.neptune_connector_freshdesk.createQueryBuilder("alias").getOne();

const data = JSON.stringify({
    "name": reqBody.name,
  "description": reqBody.description,
  "subject": reqBody.subject,
  "email": reqBody.email,
  "priority": parseInt(reqBody.priority),
  "source": 2,
  "type": reqBody.type,
  "status": 2,
  "cc_emails": [
    reqBody.cc_emails
  ]
});
log.info(data);

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `https://${systemDetails.domain}.freshdesk.com/api/v2/tickets`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': systemDetails.authKey, 
   
  },
  data : data
};


const apiResult = await axios.request(config);
log.info(apiResult)
result = apiResult;

complete();
