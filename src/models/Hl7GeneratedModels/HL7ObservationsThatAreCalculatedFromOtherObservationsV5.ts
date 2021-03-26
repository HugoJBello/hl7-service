
// Generated typescript code of HL7v 2.5 OM6  (Observations that are Calculated from Other Observations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatAreCalculatedFromOtherObservationsV5Document = mongoose.Document & HL7ObservationsThatAreCalculatedFromOtherObservationsV5I

const HL7ObservationsThatAreCalculatedFromOtherObservationsV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  derivationRule: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatAreCalculatedFromOtherObservationsV5I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  derivationRule: string
  
  }
  export const HL7ObservationsThatAreCalculatedFromOtherObservationsV5 = mongoose.model<HL7ObservationsThatAreCalculatedFromOtherObservationsV5Document> ("HL7ObservationsThatAreCalculatedFromOtherObservationsV5", HL7ObservationsThatAreCalculatedFromOtherObservationsV5Schema);

