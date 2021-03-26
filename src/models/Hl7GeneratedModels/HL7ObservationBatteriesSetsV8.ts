
// Generated typescript code of HL7v 2.8 OM5  (Observation Batteries (sets))

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationBatteriesSetsV8Document = mongoose.Document & HL7ObservationBatteriesSetsV8I

const HL7ObservationBatteriesSetsV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  testObservationsIncludedWithinAnOrderedTestBattery: Array(String),
  observationIdSuffixes: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationBatteriesSetsV8I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  testObservationsIncludedWithinAnOrderedTestBattery: string[]
  observationIdSuffixes: string
  
  }
  export const HL7ObservationBatteriesSetsV8 = mongoose.model<HL7ObservationBatteriesSetsV8Document> ("HL7ObservationBatteriesSetsV8", HL7ObservationBatteriesSetsV8Schema);

