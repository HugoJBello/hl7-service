
// Generated typescript code of HL7v 2.8 OM6  (Observations That Are Calculated From Other Observations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatAreCalculatedFromOtherObservationsV8Document = mongoose.Document & HL7ObservationsThatAreCalculatedFromOtherObservationsV8I

const HL7ObservationsThatAreCalculatedFromOtherObservationsV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  derivationRule: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatAreCalculatedFromOtherObservationsV8I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  derivationRule: string
  
  }
  export const HL7ObservationsThatAreCalculatedFromOtherObservationsV8 = mongoose.model<HL7ObservationsThatAreCalculatedFromOtherObservationsV8Document> ("HL7ObservationsThatAreCalculatedFromOtherObservationsV8", HL7ObservationsThatAreCalculatedFromOtherObservationsV8Schema);

