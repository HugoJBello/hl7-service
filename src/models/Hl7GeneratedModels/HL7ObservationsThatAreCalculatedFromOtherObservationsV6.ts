
// Generated typescript code of HL7v 2.6 OM6  (Observations that are Calculated from Other Observations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatAreCalculatedFromOtherObservationsV6Document = mongoose.Document & HL7ObservationsThatAreCalculatedFromOtherObservationsV6I

const HL7ObservationsThatAreCalculatedFromOtherObservationsV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  derivationRule: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatAreCalculatedFromOtherObservationsV6I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  derivationRule: string
  
  }
  export const HL7ObservationsThatAreCalculatedFromOtherObservationsV6 = mongoose.model<HL7ObservationsThatAreCalculatedFromOtherObservationsV6Document> ("HL7ObservationsThatAreCalculatedFromOtherObservationsV6", HL7ObservationsThatAreCalculatedFromOtherObservationsV6Schema);

