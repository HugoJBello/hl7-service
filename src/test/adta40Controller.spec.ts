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


const exampleADTA40 = "MSH|^~\\&|IMDH|034280100^FJ|QUIRONSALUD|034280100|20200506095500||ADT^A40^ADT_A39|19092008090025182512|T|2.5|||AL|NE\n" +
  "EVN||20200506095500||||20200506095500\n" +
  "PID|1||2155600^^^^PI~null^^^FMP^PN~26370012A^^^^NNESP~230006480814^^^SS^HC~LTTL230806904014^^^SS^CIP~1050175550^^^CAM^JHN~BBBBBBBBBQ414842^^^MS^NI~LTTL192308060^^^^MR||ALONSO^JOSE|LA|19750806000000|M|||PASEO&MONTE&0^RESIDENCIA CAM^281816^28^28670^724^H||916100318^PRN^PH\n" +
  "MRG|2155590^^^^PI~null^^^FMP^PN";

describe("POST /adt-a40", () => {

  it("should return Welcome to Express", async (done) => {
    appHl7.start(7777);

    const result = await incomingMessageHandler(exampleADTA40);

    try {
      const resp: any = await request(app).post("/adt-a40").send(result);

      expect(resp).toBeDefined()
    } catch (e) {
      console.log(e)
    }

    appHl7.stop();
  });
});
