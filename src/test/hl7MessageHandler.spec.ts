import { extracHl7Version, incomingMessageHandler } from "../tcpHl7Handlers/hl7IncomingMessageHandler";
import { separateSegmentPart } from "../managers/payloadMessageManager";
import { HL7ObservationResultV5I } from "../models/Hl7GeneratedModels/HL7ObservationResultV5";
import { HL7PatientIdentificationV6I } from "../models/Hl7GeneratedModels/HL7PatientIdentificationV6";

//const example = "MSH|^~&|LCS|LCA|LIS|TEST9999|199807311532||ORU^R01|3630|P|2.2\n" +
//  "OBX|1|CWE|625-4^Bacteria identified in Stool by Culture^LN^^^^2.33^^result1|1|27268008^Salmonella^SCT^^^^20090731^^Salmonella species|||A^A^HL70078^^^^2.5|||P|||20120301|||^^^^^^^^Bacterial Culture||201203140957||||State Hygienic Laboratory^L^^^^IA Public Health Lab&2.16.840.1.114222.4.1.10411&ISO^FI^^^16D0648109|State Hygienic Laboratory^UIResearch Park -Coralville^Iowa City^IA^52242-5002^USA^B^^19103|^Atchison^Christopher^^^^^^^L";

const example = "MSH|^~\\&|QUIRONSALUD|034280100|MEDICONNECT|034280100|20200521121700||OMG^O19^OMG_O19|20200521121700.236|P|2.5|1||AL|AL||ASCII|||\n" +
  "PID||CSLR196409130|8^^^^PI~^^^TSCAM^HC~^^^^SS~^^^^NI~01820085Y^^^^NNESP||CU^MANUEL|RA|19640913|M|||AVDA AVDA, 9 ^^RIVAS-VACIAMADRID^^28522||635400272||ES|||||||||||||^^^N\n" +
  "PV1|01||^^^034280100||||52336625^RUIZ^BEATRIZ|55886699^Ap1^generico||10430|||||||||C20203239\n" +
  "ORC|NW|C2020323920200521121300CE11359|||PR|||||||52336625^RUIZ^BEATRIZ||||^|55886699^||||^^^^^^^^^034280100||||^^HL70038\n" +
  "TQ1|||||||20200521121500||R^Normal^HL70485||||\n" +
  "OBR|01|||CE11359^Descarga datos Holter Subcutaneo^CIE-10||||||||||||||||10430";

describe("Hl7 message handler", () => {
  it("hl7 version should be detectedr", () => {
    const lines = separateSegmentPart(example);
    const result = extracHl7Version(lines);
    console.log(result);
    expect(result).toBe("2.5");

  });

  it("hl7 message handler", () => {
    const result = incomingMessageHandler(example);
    console.log(result);
    const obx = result.find(item => item.hl7Segment === "PID") as HL7PatientIdentificationV6I;
    expect(obx.patientName).toBeDefined()

  });
});
