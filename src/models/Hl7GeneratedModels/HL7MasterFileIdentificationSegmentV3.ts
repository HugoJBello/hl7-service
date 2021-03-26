
// Generated typescript code of HL7v 2.3 MFI  (Master file identification segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileIdentificationSegmentV3Document = mongoose.Document & HL7MasterFileIdentificationSegmentV3I

const HL7MasterFileIdentificationSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  masterFileIdentifier: String,
  masterFileApplicationIdentifier: String,
  fileLevelEventCode: String,
  enteredDateTime: Date,
  effectiveDateTime: Date,
  responseLevelCode: String,
  
  }, { timestamps: true });
  
export interface HL7MasterFileIdentificationSegmentV3I extends Segment{
  masterFileIdentifier: string
  masterFileApplicationIdentifier: string
  fileLevelEventCode: string
  enteredDateTime: Date
  effectiveDateTime: Date
  responseLevelCode: string
  
  }
  export const HL7MasterFileIdentificationSegmentV3 = mongoose.model<HL7MasterFileIdentificationSegmentV3Document> ("HL7MasterFileIdentificationSegmentV3", HL7MasterFileIdentificationSegmentV3Schema);

