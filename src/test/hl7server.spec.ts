const hl7 = require("simple-hl7");
import { appHl7 } from "../appHl7";

const messageHeaderHl7StringExample = "MSH|^~\&|^^|MA0000^^|^^|GA0000^^|20111105122535||RSP^K11^RSP_K11|1320521135996.100000002|T|2.5.1|||||||||Z32^CDCPHINVS^^|";


describe("Hl7 works", () => {
  it("runs", (done) => {
    appHl7.start(7777);


    const client = hl7.Server.createTcpClient("localhost", 7777);

    const msg = new hl7.Message(
      "",
      "MA0000",
      "",
      "GA0000",
      "20111105122535",
      "",
      ["RSP", "K11", "RSP_K11"], //This field has 2 components
      "1320521135996.100000002",
      "T",
      "2.5.1",
    );
    msg.addSegment("OBX",
      1, //Blank field
      ["JHDL", "HDL Cholesterol (CAD)"], //Multiple components
      1,
      62,
      ["CD:289", "mg/dL"],
      [">40", "40"],
    );


    console.log("sending message");
    client.send(msg, function(err: any, ack: any) {
      console.log("ck received");
      console.log(ack.log());
      done();
    });

  });
});
