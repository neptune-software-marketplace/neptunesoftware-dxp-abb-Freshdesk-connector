var options = {
    data: {
      apiKey: account.apiKey,
      domain: account.domain
    }
};

apiAPI_get_tickets(options)

sap.m.MessageToast.show("Refreshed!");