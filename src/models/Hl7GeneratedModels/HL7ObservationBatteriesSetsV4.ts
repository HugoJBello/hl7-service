
// Generated typescript code of HL7v 2.4 OM5  (Observation Batteries (Sets))

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationBatteriesSetsV4Document = mongoose.Document & HL7ObservationBatteriesSetsV4I

const HL7ObservationBatteriesSetsV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  testObservationsIncludedWithinAnOrderedTestBattery: Array(String),
  observationIDSuffixes: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationBatteriesSetsV4I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  testObservationsIncludedWithinAnOrderedTestBattery: string[]
  observationIDSuffixes: string
  
  }
  export const HL7ObservationBatteriesSetsV4 = mongoose.model<HL7ObservationBatteriesSetsV4Document> ("HL7ObservationBatteriesSetsV4", HL7ObservationBatteriesSetsV4Schema);

