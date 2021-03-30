import { extracHl7Version, incomingMessageHandler } from "../tcpHl7Handlers/hl7IncomingMessageHandler";
import { classifyMessage, separateSegmentPart } from "../managers/payloadMessageManager";
import { HL7ObservationResultV5I } from "../models/Hl7GeneratedModels/HL7ObservationResultV5";
import { HL7PatientIdentificationV6I } from "../models/Hl7GeneratedModels/HL7PatientIdentificationV6";
import { Hl7MessageType } from "../models/HL7Message";
import mongoose from "mongoose";

//const example = "MSH|^~&|LCS|LCA|LIS|TEST9999|199807311532||ORU^R01|3630|P|2.2\n" +
//  "OBX|1|CWE|625-4^Bacteria identified in Stool by Culture^LN^^^^2.33^^result1|1|27268008^Salmonella^SCT^^^^20090731^^Salmonella species|||A^A^HL70078^^^^2.5|||P|||20120301|||^^^^^^^^Bacterial Culture||201203140957||||State Hygienic Laboratory^L^^^^IA Public Health Lab&2.16.840.1.114222.4.1.10411&ISO^FI^^^16D0648109|State Hygienic Laboratory^UIResearch Park -Coralville^Iowa City^IA^52242-5002^USA^B^^19103|^Atchison^Christopher^^^^^^^L";

const exampleOMG = "MSH|^~\\&|QUIRONSALUD|034280100|MEDICONNECT|034280100|20200521121700||OMG^O19^OMG_O19|20200521121700.236|P|2.5|1||AL|AL||ASCII|||\n" +
  "PID||CSLR196409130|8^^^^PI~^^^TSCAM^HC~^^^^SS~^^^^NI~01820085Y^^^^NNESP||CU^MANUEL|RA|19640913|M|||AVDA AVDA, 9 ^^RIVAS-VACIAMADRID^^28522||635400272||ES|||||||||||||^^^N\n" +
  "PV1|01||^^^034280100||||52336625^RUIZ^BEATRIZ|55886699^Ap1^generico||10430|||||||||C20203239\n" +
  "ORC|NW|C2020323920200521121300CE11359|||PR|||||||52336625^RUIZ^BEATRIZ||||^|55886699^||||^^^^^^^^^034280100||||^^HL70038\n" +
  "TQ1|||||||20200521121500||R^Normal^HL70485||||\n" +
  "OBR|01|||CE11359^Descarga datos Holter Subcutaneo^CIE-10||||||||||||||||10430";


const exampleORU = "MSH|^~\\&|INSULCLOCK|034080400|HG|034080400|20200521134200||ORU^R01^ORU_R01|TAO1590061350616|P|2.5|||AL|ER\n" +
  "PID|1||50000004^^^HC^PI~44289^^^TAO^PN||VEDRIEL^PEDRO|GARGALLO|19800101|M|||||678456677\n" +
  "PV1|1|C|||||43725339Q|||2100|||||||||C20HQBCN1000119\n" +
  "ORC|NW\n" +
  "OBR|1|||10010315^CONSULTA PRIMERA HEMATOLOGIA ANTICOAGULACION|||20200521134127\n" +
  "OBX|1|RP|4428920200521^44289_20200521.pdf||\\E\\\\E\\hscdocs\\E\\PDF_TAONET_HQBCN_PRE\\E\\44289_20200521.pdf||||||F";

const exampleADTA31 = "MSH|^~\\&|IMDH|034280100^FJ|QUIRONSALUD|034280100|20200522141811||ADT^A31^ADT_A05|20052214051160855200|T|2.5|||AL|NE\n" +
  "EVN||20200522141811||||20200522141811\n" +
  "PID|1||900210^^^^PI~X4985703Q^^^^NNESP~281200767986^^^SS^HC~ZCXX740453380018^^^SS^CIP~%B803416\\S\\ZCXX740453380018\\S\\1105601552\\S\\ZUCCHI VALENTINA \\S\\010002011\\R\\8034161105601552=001112000000\\R\\^^^^CIP~1105601552^^^CAM^JHN~BBBBBBBBBX844306^^^MS^NI~ZCXX197404530^^^^MR||ZU^VALENTINA||19740413000000|F|||CALLE&CALLE DEL C 16 ENTREP DCHA&16^ENTREP DCHA^280796^28^28015^724^H||686300634^PRN^PH~686300634^ORN^PH~679215660^PRN^CP~miguel.martinez@gfi.world^NET^Internet\n" +
  "PD1|||16070310^^^^^^^28421|||||||||N\n" +
  "ROL||UC|MAP|1607030106G\n" +
  "PV1|1|H\n" +
  "GT1|1||||||||||||||||||||^^1011^^^^^^^1141";

jest.setTimeout(100000)

beforeAll(()=> {
  require('dotenv').config();
  mongoose.connect(process.env["MONGODB_URL"], {useNewUrlParser: true, useUnifiedTopology: true});

})

describe("Hl7 message handler", () => {
  it("hl7 version should be detectedr", () => {
    const lines = separateSegmentPart(exampleOMG);
    const result = extracHl7Version(lines);
    console.log(result);
    expect(result).toBe("2.5");

  });

  it("hl7 message handler", async () => {
    const result = await incomingMessageHandler(exampleOMG);
    console.log(result);
    expect(result.hl7MessageType).toBe(Hl7MessageType.OMG_019);
    expect(result.messageHeader).toBeDefined();
    expect((result as any).patientIdentification).toBeDefined();
  });

  it("hl7 message classifier", () => {
    const segmentParts = separateSegmentPart(exampleOMG);

    const classificationOMG = classifyMessage(segmentParts);
    expect(classificationOMG).toBe(Hl7MessageType.OMG_019);

    const segmentPartsOru = separateSegmentPart(exampleORU);

    const classificationORU = classifyMessage(segmentPartsOru);
    expect(classificationORU).toBe(Hl7MessageType.ORU_R01);

    const segmentPartsA31 = separateSegmentPart(exampleADTA31);
    const classificationADTA31 = classifyMessage(segmentPartsA31);
    expect(classificationADTA31).toBe(Hl7MessageType.ADT_A31);

  });

});
