import { SchemaCompleteIndex } from "../models/Schema";
import { parseStringSegmentUsingSchema } from "../managers/hl7Parser";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { HL7ObservationResultV5I } from "../models/Hl7GeneratedModels/HL7ObservationResultV5";
import { HL7ObservationresultV8I } from "../models/Hl7GeneratedModels/HL7ObservationresultV8";

const fs = require("fs");

//const observationHl7StringExample = "OBX||TX|FIND^FINDINGS^L|3|This is a test result to generate multiple obr's to check the cost"
//const observationHl7StringExample = "OBX|1|CWE|625-4^Bacteria identified in Stool by Culture^LN^^^^2.33^^result1|1|27268008^Salmonella^SCT^^^^20090731^^Salmonella species|||A^A^HL70078^^^^2.5|||P|||20120301|||^^^^^^^^Bacterial Culture||201203140957||||State Hygienic Laboratory^L^^^^IA Public Health Lab&2.16.840.1.114222.4.1.10411&ISO^FI^^^16D0648109|State Hygienic Laboratory^UIResearch Park -Coralville^Iowa City^IA^52242-5002^USA^B^^19103|^Atchison^Christopher^^^^^^^L"

const observationHl7StringExample = "OBX|3|CE|169999^.^L||SPRCS|||||N|F|||19980728130600|BN";

describe("Hl7 observation parser", () => {
  it("parse string using schema", (done) => {

    const schema = SchemaCompleteIndex[Hl7Version.v5][Hl7Segment.Observationresult];
    const parsedObs = parseStringSegmentUsingSchema(observationHl7StringExample, schema.fields) as HL7ObservationResultV5I;
    console.log(parsedObs);
    expect(parsedObs).toBeDefined();
    expect(parsedObs.observationValue).toBeDefined();
    done();
  });

  it("parse fields using schema", (done) => {

    const schema = SchemaCompleteIndex[Hl7Version.v8][Hl7Segment.Observationresult];

    const parsedObs = parseStringSegmentUsingSchema(observationHl7StringExample, schema.fields) as HL7ObservationresultV8I;
    console.log(parsedObs);
    expect(parsedObs).toBeDefined();
    expect(parsedObs.observationValue).toBeDefined();
    done();
  });
});
