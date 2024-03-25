const reqBody = req.body;

const domain = reqBody.domain;
const authBasic = Buffer.from(reqBody.apikey + ":X").toString("base64");

//Check for existing system data
const tableData = await entities.neptune_connector_freshdesk.createQueryBuilder("alias").getMany();

if (reqBody.id) {
    await entities.neptune_connector_freshdesk
        .createQueryBuilder()
        .update()
        .set({ domain: reqBody.domain,
        apikey: reqBody.apiKey,
        authKey: "Basic " + authBasic,
        name: reqBody.name,
        description: reqBody.description})
        .where("id = :id", { id: reqBody.id })
        .execute();
} else {
    await entities.neptune_connector_freshdesk.insert({
        domain: reqBody.domain,
        apikey: reqBody.apikey,
        authKey: "Basic " + authBasic,
        name: reqBody.name,
        description: reqBody.description,
    });
}

// log.info(entity);
complete();
