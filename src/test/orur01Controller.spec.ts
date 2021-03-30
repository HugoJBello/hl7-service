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


const exampleOru = "MSH|^~\\&|INSULCLOCK|034080400|QUIRONSALUD|034080400|20200521120810||ORU^R01^ORU_R01|C05161519137515e739|R|2.5\n" +
  "PID|1|50000003|50000003^^^^PI~12345^^^TSCAM^CIP~7788994455^^^MI^PPN~abb5edef-353a-c58c-4534-08d7f594bdf2^^^Casiopea3^PN|7788994455|PACIENTE^PRUEBA|PORTAL|19930402000000|M|PACIENTE^PRUEBA||||680740090^^^alfredo.hopp@gmail.com^^^^^^^^680740090|||||||||||||||||N\n" +
  "PV1|1|Q|BCNUEQUI^^QUIQX02||||7003071^Ho^Alfredo Hermann^^^^^0010^Medico|||1100|||||||||Q20HQBCN1000073|||||||||||||||||||||||||20200521160000|20200521120742|||||H20HQBCN1000062||126\n" +
  "ORC|NW\n" +
  "OBR|1|||ENF187^INFORME DE MATERIAL QUIRURGICO|||20200521120810||||||||||||||||||F\n" +
  "OBX|1|RP|50000003Q20HQBCN1000073^INFORME DE MATERIAL QUIRURGICO||http://GEASOFTPRE01:8080/GeasoftWeb/informe.do?idoperacion=Q20HQBCN1000073||||||F|||||||"

describe("POST /oru-R01", () => {

  it("should return Welcome to Express", async (done) => {
    appHl7.start(7777);

    const result = await incomingMessageHandler(exampleOru);

    try {
      const resp: any = await request(app).post("/oru-R01").send(result);

      expect(resp).toBeDefined();
    } catch (e) {
      console.log(e);
    }

    appHl7.stop();
  });
});
