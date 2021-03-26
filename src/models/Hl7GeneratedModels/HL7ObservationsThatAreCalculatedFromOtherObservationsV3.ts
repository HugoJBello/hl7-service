
// Generated typescript code of HL7v 2.3 OM6  (Observations that are calculated from other observations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatAreCalculatedFromOtherObservationsV3Document = mongoose.Document & HL7ObservationsThatAreCalculatedFromOtherObservationsV3I

const HL7ObservationsThatAreCalculatedFromOtherObservationsV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumber: Number,
  derivationRule: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatAreCalculatedFromOtherObservationsV3I extends Segment{
  sequenceNumber: number
  derivationRule: string
  
  }
  export const HL7ObservationsThatAreCalculatedFromOtherObservationsV3 = mongoose.model<HL7ObservationsThatAreCalculatedFromOtherObservationsV3Document> ("HL7ObservationsThatAreCalculatedFromOtherObservationsV3", HL7ObservationsThatAreCalculatedFromOtherObservationsV3Schema);

