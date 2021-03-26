
// Generated typescript code of HL7v 2.2 OM6  (Observations That Are Calculated From Other Obersvations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatAreCalculatedFromOtherObersvationsV2Document = mongoose.Document & HL7ObservationsThatAreCalculatedFromOtherObersvationsV2I

const HL7ObservationsThatAreCalculatedFromOtherObersvationsV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  segmentTypeId: String,
  sequenceNumberTestObservationMasterFile: Number,
  derivationRule: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatAreCalculatedFromOtherObersvationsV2I extends Segment{
  segmentTypeId: string
  sequenceNumberTestObservationMasterFile: number
  derivationRule: string
  
  }
  export const HL7ObservationsThatAreCalculatedFromOtherObersvationsV2 = mongoose.model<HL7ObservationsThatAreCalculatedFromOtherObersvationsV2Document> ("HL7ObservationsThatAreCalculatedFromOtherObersvationsV2", HL7ObservationsThatAreCalculatedFromOtherObersvationsV2Schema);

