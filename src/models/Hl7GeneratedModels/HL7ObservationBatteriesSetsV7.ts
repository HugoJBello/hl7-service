
// Generated typescript code of HL7v 2.7 OM5  (Observation Batteries (sets))

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationBatteriesSetsV7Document = mongoose.Document & HL7ObservationBatteriesSetsV7I

const HL7ObservationBatteriesSetsV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  testObservationsIncludedWithinAnOrderedTestBattery: Array(String),
  observationIdSuffixes: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationBatteriesSetsV7I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  testObservationsIncludedWithinAnOrderedTestBattery: string[]
  observationIdSuffixes: string
  
  }
  export const HL7ObservationBatteriesSetsV7 = mongoose.model<HL7ObservationBatteriesSetsV7Document> ("HL7ObservationBatteriesSetsV7", HL7ObservationBatteriesSetsV7Schema);

