var API_KEY = 'Your Freshdesk API Key';
var FD_ENDPOINT = 'Your Freshdesk Domain';
const account = {
      apiKey: API_KEY,
      domain: FD_ENDPOINT
    };


var options = {
    data: {
      apiKey: account.apiKey,
      domain: account.domain
    }
};

apiAPI_get_tickets(options)
