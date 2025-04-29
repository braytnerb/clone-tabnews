import database from "infra/database.js";

async function status(request, response) {
  const updateAT = new Date().toISOString();

  const databaseName = process.env.POSTGRES_DB;

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );

  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseOpenConnectionResult = await database.query({
    text: "SELECT COUNT(*) FROM pg_stat_activity where datname = $1 and state = $2;",
    values: [databaseName, "active"],
  });

  const databaseOpencConnectionsValue =
    databaseOpenConnectionResult.rows.length;

  response.status(200).json({
    update_at: updateAT,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        open_connections: databaseOpencConnectionsValue,
      },
    },
  });
}

export default status;
