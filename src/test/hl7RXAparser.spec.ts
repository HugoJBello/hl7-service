import { HL7ObservationSchemaV5, HL7TreatmentAdministrationSchemaV5 } from "../models/Schema";
import { parseStringSegmentUsingSchema } from "../managers/hl7Parser";
import { HL7DecodedObservationV8I } from "../models/HL7DecodedObservationV8";
import { HL7DecodedTreatmentAdministrationV5I } from "../models/HL7TreatmentAdministrationV5";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

//const observationHl7StringExample = "OBX||TX|FIND^FINDINGS^L|3|This is a test result to generate multiple obr's to check the cost"
//const observationHl7StringExample = "OBX|1|CWE|625-4^Bacteria identified in Stool by Culture^LN^^^^2.33^^result1|1|27268008^Salmonella^SCT^^^^20090731^^Salmonella species|||A^A^HL70078^^^^2.5|||P|||20120301|||^^^^^^^^Bacterial Culture||201203140957||||State Hygienic Laboratory^L^^^^IA Public Health Lab&2.16.840.1.114222.4.1.10411&ISO^FI^^^16D0648109|State Hygienic Laboratory^UIResearch Park -Coralville^Iowa City^IA^52242-5002^USA^B^^19103|^Atchison^Christopher^^^^^^^L"

const treatmentHl7StringExample = "RXA|0|1|20141215|20141115|141^influenza, SEASONAL 36^CVX^90658^Influenza Split^CPT|999|||01^HISTORICAL INFORMATION â€“ SOURCE UNSPECIFIED^ NIP001||||||||||||A";

describe("Hl7 treatment admin parser", () => {

  it("parse fields using schema", (done) => {

    const treatmentAdminSchema = HL7TreatmentAdministrationSchemaV5;


    const parsedObs = parseStringSegmentUsingSchema(treatmentHl7StringExample, treatmentAdminSchema.fields) as HL7DecodedTreatmentAdministrationV5I;
    console.log(parsedObs);
    expect(parsedObs).toBeDefined();
    expect(parsedObs.administrationSubIdCounter).toBeDefined();
    done();
  });
});
