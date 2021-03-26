
// Generated typescript code of HL7v 2.3 OM5  (Observation batteries)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationBatteriesV3Document = mongoose.Document & HL7ObservationBatteriesV3I

const HL7ObservationBatteriesV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumber: Number,
  testObservationsIncludedWanOrderedTestBattery: Array(String),
  observationIDSuffixes: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationBatteriesV3I extends Segment{
  sequenceNumber: number
  testObservationsIncludedWanOrderedTestBattery: string[]
  observationIDSuffixes: string
  
  }
  export const HL7ObservationBatteriesV3 = mongoose.model<HL7ObservationBatteriesV3Document> ("HL7ObservationBatteriesV3", HL7ObservationBatteriesV3Schema);

