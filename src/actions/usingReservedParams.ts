import { api, id, task, Action, actionheroVersion } from "actionhero";

module.exports = class UsingReservedParams extends Action {
  constructor() {
    super();
    this.name = "usingReservedParams";
    this.description = "the aciton useing reserved params";
    this.outputExample = {
      id: "192.168.2.11",
    };
    this.inputs = {
      apiVersion: {
        required: true,
      },
    };
  }

  async run(data) {
    const { apiVersion } = data.params;
    console.log("messageId:", apiVersion);
    data.response.id = id;
  }
};
