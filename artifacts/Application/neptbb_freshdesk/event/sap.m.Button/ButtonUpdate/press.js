const ticketData = modelSimpleFormUpdate.getData();

var options = {
    data: {
        id: ticketData.id,
        ticket: {
            subject: ticketData.subject,
            status: parseInt(ticketData.status),
             description: ticketData.description_text, 
             type: ticketData.type
        }
    },
};

apiAPI_update_ticket(options);
//console.log(options);
sap.m.MessageToast.show("Successfully Updated!");

//Clear Form
modelSimpleFormUpdate.setData({});
App.to(PageList);
