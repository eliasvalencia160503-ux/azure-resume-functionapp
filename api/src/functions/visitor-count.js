const { app } = require("@azure/functions");
const { CosmosClient } = require("@azure/cosmos");

app.http("visitor-count", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "visitor-count",
  handler: async (request, context) => {
    try {
      const endpoint = process.env.COSMOS_ENDPOINT;
      const key = process.env.COSMOS_KEY;
      const databaseName = process.env.COSMOS_DATABASE_NAME;
      const containerName = process.env.COSMOS_CONTAINER_NAME;

      const client = new CosmosClient({ endpoint, key });
      const container = client.database(databaseName).container(containerName);

      const { resource: item } = await container.item("1", "1").read();

      if (!item) {
        return {
          status: 404,
          jsonBody: { error: 'Counter item with id "1" was not found.' }
        };
      }

      const currentCount = Number(item.count || 0);
      const newCount = currentCount + 1;
      item.count = newCount;

      await container.items.upsert(item);

      return {
        status: 200,
        jsonBody: { count: newCount }
      };
    } catch (error) {
      context.error("Visitor counter error:", error);

      return {
        status: 500,
        jsonBody: { error: error.message }
      };
    }
  }
});