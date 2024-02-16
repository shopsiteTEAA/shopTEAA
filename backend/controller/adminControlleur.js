const { user } = require("../database/sequalise");

const getAllClients = async () => {
  try {
    const clients = await user.findAll({ where: { role: "client" } });
    return clients;
  } catch (error) {
    console.error("Error retrieving clients:", error);
    throw error;
  }
};

const deleteClientAccount = async (clientId) => {
  try {
    const client = await user.findByPk(clientId);
    if (!client) {
      throw new Error("Client not found");
    }
    await client.destroy();
    return true;
  } catch (error) {
    console.error("Error deleting client account:", error);
    throw error;
  }
};

const updateClientInfo = async (clientId, newData) => {
  try {
    const client = await user.findByPk(clientId);
    if (!client) {
      throw new Error("Client not found");
    }
    // Update client information with new data
    Object.assign(client, newData);
    await client.save();
    return client;
  } catch (error) {
    console.error("Error updating client information:", error);
    throw error;
  }
};
module.exports = { getAllClients, deleteClientAccount, updateClientInfo };
