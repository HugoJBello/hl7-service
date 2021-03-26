
// Generated typescript code of HL7v 2.6 OM5  (Observation Batteries (Sets))

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationBatteriesSetsV6Document = mongoose.Document & HL7ObservationBatteriesSetsV6I

const HL7ObservationBatteriesSetsV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  testObservationsIncludedWithinAnOrderedTestBattery: Array(String),
  observationIDSuffixes: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationBatteriesSetsV6I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  testObservationsIncludedWithinAnOrderedTestBattery: string[]
  observationIDSuffixes: string
  
  }
  export const HL7ObservationBatteriesSetsV6 = mongoose.model<HL7ObservationBatteriesSetsV6Document> ("HL7ObservationBatteriesSetsV6", HL7ObservationBatteriesSetsV6Schema);

