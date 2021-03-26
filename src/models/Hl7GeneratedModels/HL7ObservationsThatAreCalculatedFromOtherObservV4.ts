
// Generated typescript code of HL7v 2.4 OM6  (Observations that are Calculated from Other Observ)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatAreCalculatedFromOtherObservV4Document = mongoose.Document & HL7ObservationsThatAreCalculatedFromOtherObservV4I

const HL7ObservationsThatAreCalculatedFromOtherObservV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  derivationRule: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatAreCalculatedFromOtherObservV4I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  derivationRule: string
  
  }
  export const HL7ObservationsThatAreCalculatedFromOtherObservV4 = mongoose.model<HL7ObservationsThatAreCalculatedFromOtherObservV4Document> ("HL7ObservationsThatAreCalculatedFromOtherObservV4", HL7ObservationsThatAreCalculatedFromOtherObservV4Schema);

