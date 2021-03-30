// eslint-disable-next-line @typescript-eslint/no-var-requires
const hl7 = require("simple-hl7");

export const sendMessage = async (msg: string) => {
  const parser = new hl7.Parser();
  const message = parser.parse(msg);
  const client = hl7.Server.createTcpClient("localhost", 7777);

  try {
    return await sendPromisified(message, client);
  } catch (e) {
    console.log(e);
  }
};

const sendPromisified = (msg: any, client: any): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    client.send(msg, function(err: any, ack: any) {
      if (err) {
        reject(err);
      }
      resolve(ack);
      console.log("ck received");
      console.log(ack.log());
    });
  });
};
