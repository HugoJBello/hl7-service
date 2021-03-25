import { hl7OBSXDecoder } from "../managers/hl7ObservationParser";
import { parseDecodedSegmentUsingSchema } from "../managers/hl7Composer";
import { HL7ObservationSchemaV5 } from "../models/Schema";

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

describe("Hl7 generic parser", () => {
  it("should return 200 OK", (done) => {

    const parsedObs = hl7OBSXDecoder(observationHl7StringExampleForParsing, "2.5");
    console.log(parsedObs);

    const converted = parseDecodedSegmentUsingSchema(parsedObs, HL7ObservationSchemaV5);

    console.log(observationHl7StringExampleForParsing);
    console.log(converted);
    done();
  });
});