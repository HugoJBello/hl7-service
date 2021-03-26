
// Generated typescript code of HL7v 2.7 OM6  (Observations That Are Calculated From Other Observations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatAreCalculatedFromOtherObservationsV7Document = mongoose.Document & HL7ObservationsThatAreCalculatedFromOtherObservationsV7I

const HL7ObservationsThatAreCalculatedFromOtherObservationsV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  derivationRule: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatAreCalculatedFromOtherObservationsV7I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  derivationRule: string
  
  }
  export const HL7ObservationsThatAreCalculatedFromOtherObservationsV7 = mongoose.model<HL7ObservationsThatAreCalculatedFromOtherObservationsV7Document> ("HL7ObservationsThatAreCalculatedFromOtherObservationsV7", HL7ObservationsThatAreCalculatedFromOtherObservationsV7Schema);

