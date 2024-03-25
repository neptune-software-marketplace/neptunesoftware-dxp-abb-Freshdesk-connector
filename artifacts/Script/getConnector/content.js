const data = await entities.neptune_connector_freshdesk.createQueryBuilder("alias")
    .getOne();


result.data = data;
console.log(JSON.stringify(data))
complete();