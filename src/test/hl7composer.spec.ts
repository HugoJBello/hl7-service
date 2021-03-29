import { encodeSegmentUsingSchema } from "../managers/hl7Composer";
import { SchemaCompleteIndex } from "../models/Schema";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { hl7Decoder } from "../managers/hl7Parser";
import { incomingMessageHandler } from "../tcpHl7Handlers/hl7IncomingMessageHandler";
import { composeORUR01MessageHandler } from "../tcpHl7Handlers/hl7ORUR01SenderMessageHandler";
import { ORUR01MessageI } from "../models/ORUR01Message";
import { composeOMG019MessageHandler } from "../tcpHl7Handlers/hl7OMG019SenderMessageHandler";
import { OMGO19MessageI } from "../models/OMG019Message";

const observation = {
  setId: "3",
  valueType: "CE",
  observationIdentifier: "169999^.^L",
  observationValue: "SPRCS",
  natureAbnormalTest: "N",
  observationResultStatus: "F",
  dateObservation: new Date("1998-07-28T11:06:00.000Z"),
  producerId: "BN",
  hl7Segment: "OBX",
  hl7version: "2.5",
};

//const observationHl7StringExample = "OBX||TX|FIND^FINDINGS^L|3|This is a test result to generate multiple obr's to check the cost"
//const observationHl7StringExample = "OBX|1|CWE|625-4^Bacteria identified in Stool by Culture^LN^^^^2.33^^result1|1|27268008^Salmonella^SCT^^^^20090731^^Salmonella species|||A^A^HL70078^^^^2.5|||P|||20120301|||^^^^^^^^Bacterial Culture||201203140957||||State Hygienic Laboratory^L^^^^IA Public Health Lab&2.16.840.1.114222.4.1.10411&ISO^FI^^^16D0648109|State Hygienic Laboratory^UIResearch Park -Coralville^Iowa City^IA^52242-5002^USA^B^^19103|^Atchison^Christopher^^^^^^^L"

const observationHl7StringExampleForParsing = "OBX|3|CE|169999^.^L||SPRCS|||||N|F|||19980728130600|BN";

describe("Hl7 observation composer", () => {
  it("should return 200 OK", (done) => {

    const parsedObs = hl7Decoder(observationHl7StringExampleForParsing, Hl7Version.v5, Hl7Segment.Observationresult);
    console.log(parsedObs);

    const schema = SchemaCompleteIndex[Hl7Version.v5][Hl7Segment.Observationresult];
    const converted = encodeSegmentUsingSchema(parsedObs, schema);

    console.log(observationHl7StringExampleForParsing);
    console.log(converted);
    done();
  });
});


const exampleORU = "MSH|^~\\&|INSULCLOCK|034080400|HG|034080400|20200521134200||ORU^R01^ORU_R01|TAO1590061350616|P|2.5|||AL|ER\n" +
  "PID|1||50000004^^^HC^PI~44289^^^TAO^PN||VEDRIEL^PEDRO|GARGALLO|19800101|M|||||678456677\n" +
  "PV1|1|C|||||43725339Q|||2100|||||||||C20HQBCN1000119\n" +
  "ORC|NW\n" +
  "OBR|1|||10010315^CONSULTA PRIMERA HEMATOLOGIA ANTICOAGULACION|||20200521134127\n" +
  "OBX|1|RP|4428920200521^44289_20200521.pdf||\\E\\\\E\\hscdocs\\E\\PDF_TAONET_HQBCN_PRE\\E\\44289_20200521.pdf||||||F";


describe("Hl7 generic oru composer", () => {
  it("should return 200 OK", (done) => {

    const result = incomingMessageHandler(exampleORU);
    console.log(result);

    const encoded = composeORUR01MessageHandler(result as ORUR01MessageI);
    console.log(exampleORU);
    console.log(encoded);
    expect(encoded).toBeDefined();
    done();
  });
});



const exampleOMG = "MSH|^~\\&|QUIRONSALUD|034280100|MEDICONNECT|034280100|20200521121700||OMG^O19^OMG_O19|20200521121700.236|P|2.5|1||AL|AL||ASCII|||\n" +
  "PID||CSLR196409130|8^^^^PI~^^^TSCAM^HC~^^^^SS~^^^^NI~01820085Y^^^^NNESP||CU^MANUEL|RA|19640913|M|||AVDA AVDA, 9 ^^RIVAS-VACIAMADRID^^28522||635400272||ES|||||||||||||^^^N\n" +
  "PV1|01||^^^034280100||||52336625^RUIZ^BEATRIZ|55886699^Ap1^generico||10430|||||||||C20203239\n" +
  "ORC|NW|C2020323920200521121300CE11359|||PR|||||||52336625^RUIZ^BEATRIZ||||^|55886699^||||^^^^^^^^^034280100||||^^HL70038\n" +
  "TQ1|||||||20200521121500||R^Normal^HL70485||||\n" +
  "OBR|01|||CE11359^Descarga datos Holter Subcutaneo^CIE-10||||||||||||||||10430";



describe("Hl7 generic omg composer", () => {
  it("should return 200 OK", (done) => {

    const result = incomingMessageHandler(exampleOMG);
    console.log(result);

    const encoded = composeOMG019MessageHandler(result as OMGO19MessageI);
    console.log(exampleOMG);
    console.log(encoded);
    expect(encoded).toBeDefined();
    done();
  });
});