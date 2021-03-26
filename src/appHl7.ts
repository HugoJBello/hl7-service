import { incomingMessageHandler } from "./tcpHl7Handlers/hl7IncomingMessageHandler";

require("dotenv").config();
const hl7 = require("simple-hl7");

export const appHl7 = hl7.tcp();

appHl7.use(function(req: any, res: any, next:Function) {
  //req.msg is the HL7 message
  console.log("******message received*****");
  const message:string = req.msg.log()
  console.log(message)
  try {
    const parsed = incomingMessageHandler(message)
    console.log("----", parsed)
  } catch (e) {
    console.log(e)
  }

  next();
});

appHl7.use(function(req: any, res: any, next:Function) {
  //res.ack is the ACK
  //acks are created automatically

  //send the res.ack back
  console.log("******sending ack*****");
  res.end();
});

appHl7.use(function(err:any, req: any, res: any, next:Function) {
  //error handler
  //standard error middleware would be
  console.log("******ERROR*****");
  console.log(err);
  var msa = res.ack.getSegment("MSA");
  msa.setField(1, "AR");
  res.ack.addSegment("ERR", err.message);
  res.end();
});