
// Generated typescript code of HL7v 2.2 MFI  (Master File Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileIdentificationV2Document = mongoose.Document & HL7MasterFileIdentificationV2I

const HL7MasterFileIdentificationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  masterFileIdentifier: String,
  masterFileApplicationIdentifier: String,
  filelevelEventCode: String,
  enteredDateTime: Date,
  effectiveDateTime: Date,
  responseLevelCode: String,
  
  }, { timestamps: true });
  
export interface HL7MasterFileIdentificationV2I extends Segment{
  masterFileIdentifier: string
  masterFileApplicationIdentifier: string
  filelevelEventCode: string
  enteredDateTime: Date
  effectiveDateTime: Date
  responseLevelCode: string
  
  }
  export const HL7MasterFileIdentificationV2 = mongoose.model<HL7MasterFileIdentificationV2Document> ("HL7MasterFileIdentificationV2", HL7MasterFileIdentificationV2Schema);

