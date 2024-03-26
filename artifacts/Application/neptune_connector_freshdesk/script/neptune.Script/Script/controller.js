const controller = {
    filter: "",
    type: "freshdesk",
    init: function () {
        jQuery.sap.require("sap.m.MessageBox");

        if (!cockpitUtils.isCockpit) {
            sap.m.MessageBox.confirm("Neptune Freshdesk Connector is only supported to run inside our Cockpit. Press OK and we will guide to to the right place.", {
                icon: sap.m.MessageBox.Icon.INFORMATION,
                title: "System Information",
                actions: [sap.m.MessageBox.Action.OK],
                initialFocus: "Ok",
                onClose: function (sAction) {
                    if (sAction === "OK") {
                        location.href = location.origin + "/cockpit.html#afconnector-Freshdesk";
                    }
                },
            });
        }
        apiGet().then((result) => {
            //console.log(result);
            modeloPageStart.setData(result);
        });
    },

    save: function () {
        // Check Required Fields
        if (!sap.n.Planet9.requiredFieldsCheck(cockpitUtils.requiredFields)) {
            return;
        }
     //Save details entered
            apiSave({
                data:modeloPageStart.oData ,
            }).then(function (req) {
                if (req.message) {
                    sap.m.MessageToast.show(req.message);
                }

                sap.m.MessageToast.show("Connector Saved");
               if(informDetailID.getValue() == ""){
                modeloPageStart.oData.id = req.id;
                modeloPageStart.oData.updatedAt = req.updatedAt;
                modeloPageStart.oData.updatedBy = req.updatedBy;
                modeloPageStart.oData.createdAt = req.createdAt || req.updatedAt;
                modeloPageStart.oData.createdBy = req.createdBy;
                modeloPageStart.refresh();

               }
                cockpitUtils.toggleEdit(false);
            });
        
    },
};

controller.init();
