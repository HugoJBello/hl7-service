
// Generated typescript code of HL7v 2.5 OM5  (Observation Batteries (Sets))

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationBatteriesSetsV5Document = mongoose.Document & HL7ObservationBatteriesSetsV5I

const HL7ObservationBatteriesSetsV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  testObservationsIncludedWithinAnOrderedTestBattery: Array(String),
  observationIDSuffixes: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationBatteriesSetsV5I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  testObservationsIncludedWithinAnOrderedTestBattery: string[]
  observationIDSuffixes: string
  
  }
  export const HL7ObservationBatteriesSetsV5 = mongoose.model<HL7ObservationBatteriesSetsV5Document> ("HL7ObservationBatteriesSetsV5", HL7ObservationBatteriesSetsV5Schema);

