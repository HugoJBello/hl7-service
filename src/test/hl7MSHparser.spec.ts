import { SchemaCompleteIndex } from "../models/Schema";
import { parseStringSegmentUsingSchema } from "../managers/hl7Parser";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { HL7MessageHeaderV5I } from "../models/Hl7GeneratedModels/HL7MessageHeaderV5";

const fs = require("fs");

//const observationHl7StringExample = "OBX||TX|FIND^FINDINGS^L|3|This is a test result to generate multiple obr's to check the cost"
//const observationHl7StringExample = "OBX|1|CWE|625-4^Bacteria identified in Stool by Culture^LN^^^^2.33^^result1|1|27268008^Salmonella^SCT^^^^20090731^^Salmonella species|||A^A^HL70078^^^^2.5|||P|||20120301|||^^^^^^^^Bacterial Culture||201203140957||||State Hygienic Laboratory^L^^^^IA Public Health Lab&2.16.840.1.114222.4.1.10411&ISO^FI^^^16D0648109|State Hygienic Laboratory^UIResearch Park -Coralville^Iowa City^IA^52242-5002^USA^B^^19103|^Atchison^Christopher^^^^^^^L"

const messageHeaderHl7StringExample = "MSH|^~\&|^^|MA0000^^|^^|GA0000^^|20111105122535||RSP^K11^RSP_K11|1320521135996.100000002|T|2.5.1|||||||||Z32^CDCPHINVS^^|";

describe("Hl7 message header parser", () => {
  it("parse fields using schema", (done) => {
    const schema = SchemaCompleteIndex[Hl7Version.v5][Hl7Segment.MessageHeader];

    const parsedObs = parseStringSegmentUsingSchema(messageHeaderHl7StringExample, schema.fields) as HL7MessageHeaderV5I;
    console.log(parsedObs);
    expect(parsedObs).toBeDefined();
    expect(parsedObs.fieldSeparator).toBeDefined();
    done();
  });
});
