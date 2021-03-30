import request from "supertest";
import { app } from "../app";
import mongoose from "mongoose";
import { incomingMessageHandler } from "../tcpHl7Handlers/hl7IncomingMessageHandler";
import { composeADTA31 } from "../managers/hl7ADTA31Composer";
import { ADTA31MessageI } from "../models/ADTA31Message";
import { appHl7 } from "../appHl7";

jest.setTimeout(100000);

beforeAll(() => {
  require("dotenv").config();
  mongoose.connect(process.env["MONGODB_URL"], { useNewUrlParser: true, useUnifiedTopology: true });
});


const exampleADTA31 = "MSH|^~\\&|IMDH|034280100^FJ|QUIRONSALUD|034280100|20200522141811||ADT^A31^ADT_A05|20052214051160855200|T|2.5|||AL|NE\n" +
  "EVN||20200522141811||||20200522141811\n" +
  "PID|1||900210^^^^PI~X4985703Q^^^^NNESP~281200767986^^^SS^HC~ZCXX740453380018^^^SS^CIP~%B803416\\S\\ZCXX740453380018\\S\\1105601552\\S\\ZUCCHI VALENTINA \\S\\010002011\\R\\8034161105601552=001112000000\\R\\^^^^CIP~1105601552^^^CAM^JHN~BBBBBBBBBX844306^^^MS^NI~ZCXX197404530^^^^MR||ZU^VALENTINA||19740413000000|F|||CALLE&CALLE DEL C 16 ENTREP DCHA&16^ENTREP DCHA^280796^28^28015^724^H||686300634^PRN^PH~686300634^ORN^PH~679215660^PRN^CP~miguel.martinez@gfi.world^NET^Internet\n" +
  "PD1|||16070310^^^^^^^28421|||||||||N\n" +
  "ROL||UC|MAP|1607030106G\n" +
  "PV1|1|H\n" +
  "GT1|1||||||||||||||||||||^^1011^^^^^^^1141";

describe("POST /adt-a31", () => {

  it("should return Welcome to Express", async (done) => {
    appHl7.start(7777);

    const result = await incomingMessageHandler(exampleADTA31);

    try {
      const resp: any = await request(app).post("/adt-a31").send(result);

      expect(resp).toBeDefined()
    } catch (e) {
      console.log(e)
    }

    appHl7.stop();
  });
});
