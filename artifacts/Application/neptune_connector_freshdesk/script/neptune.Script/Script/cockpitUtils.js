const cockpitUtils = {
    isCockpit: false,
    dataSet: null,
    dataSaved: null,
    requiredFields: [],

    init: function () {
        if (sap.n && sap.n.Planet9) cockpitUtils.isCockpit = true;

        if (!cockpitUtils.isCockpit) {
            // Hide Edit/Display Buttons
            butDetailSetEdit.setVisible(cockpitUtils.isCockpit);
            
            return;
        }

        // Format Buttons
        sap.n.Planet9.formatButtonEdit(butDetailSetEdit);
        //sap.n.Planet9.formatButtonDisplay(butDetailSetDisplay);
        sap.n.Planet9.formatButtonSave(butDetailSave);
        //sap.n.Planet9.formatButtonDelete(butDetailDelete);
        //sap.n.Planet9.formatButtonBack(butDetailBack);

       

        // Set Lockhandler Object Name
        cockpitUtils.dataSet = "Freshdesk Connector";

        // Required Fieldnames for data validation
        cockpitUtils.requiredFields = ["informDetailName", "inputdomain", "inputApikey"];
    },
    
 toggleEdit: function (editable) {

        butDetailSetEdit.setVisible(!editable);
        butDetailSave.setVisible(editable);

        informDetailName.setEditable(editable)
        informDetailDescription.setEditable(editable);
        inputdomain.setEditable(editable);
        inputApikey.setEditable(editable);

        // Cockpit Action
        sap.n.Planet9.setToolbarButton(editable);
        sap.n.Planet9.requiredFieldsClear(cockpitUtils.requiredFields);

    },
   

};

cockpitUtils.init();

if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(localAppID, function (data) {
        //toolStartUpdate.firePress();
    });
}
