const axios = modules.axios;

const reqBody = req.body;
log.info(reqBody)

const data = JSON.stringify({
    "name": reqBody.ticket.name,
  "description": reqBody.ticket.description,
  "subject": reqBody.ticket.subject,
  "email": reqBody.ticket.email,
  "priority": parseInt(reqBody.ticket.priority),
  "source": parseInt(reqBody.ticket.source),
  "type": reqBody.ticket.type,
  "status": 2,
  "cc_emails": [
    reqBody.ticket.cc_emails
  ]
});
//log.info(data);

const domain = reqBody.account.domain;
const apiKey = Buffer.from(reqBody.account.apiKey + ":X").toString("base64");


const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `https://${domain}.freshdesk.com/api/v2/tickets`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic ' + apiKey, 
   
  },
  data : data
};
log.info(config)

const apiResult = await axios.request(config);
result = apiResult;

complete();
