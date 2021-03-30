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


const exampleOMG = "MSH|^~\\&|QUIRONSALUD|034280100|MEDICONNECT|034280100|20200427161600||OMG^O19^OMG_O19|20200427161600.415|P|2.5|1||AL|AL||ASCII|||\n" +
  "PID||CSRD194605440|636627^^^^PI~^^^TSCAM^HC~^^^^SS~^^^^NI~01370029D^^^^NNESP||CA^MARIA JESUS|DR|19460504|F|||CALLE^^MADRID^^28012||914600845||ES|||||||||||||^^^N\n" +
  "PV1|01||^^^034280100||||55886699^Ap1^generico|55886699^Ap1^generico||13030|||||||||C20202421\n" +
  "ORC|NW|C2020242120200427161300CE11361|||PR|||||||55886699^Ap1^generico||||^|55886699^||||^^^^^^^^^034280100||||^^HL70038\n" +
  "TQ1|||||||20200427161400||R^Normal^HL70485||||\n" +
  "OBR|01|||CE11361^Descarga datos Desfibrilador^CIE-10||||||||||||||||13030";

describe("POST /adt-a40", () => {

  it("should return Welcome to Express", async (done) => {
    appHl7.start(7777);

    const result = await incomingMessageHandler(exampleOMG);

    try {
      const resp: any = await request(app).post("/omg-o19").send(result);

      expect(resp).toBeDefined();
    } catch (e) {
      console.log(e);
    }

    appHl7.stop();
  });
});
