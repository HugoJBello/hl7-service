
// Generated typescript code of HL7v 2.7 MFI  (Master File Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileIdentificationV7Document = mongoose.Document & HL7MasterFileIdentificationV7I

const HL7MasterFileIdentificationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  masterFileIdentifier: String,
  masterFileApplicationIdentifier: Array(String),
  filelevelEventCode: String,
  enteredDateTime: String,
  effectiveDateTime: String,
  responseLevelCode: String,
  
  }, { timestamps: true });
  
export interface HL7MasterFileIdentificationV7I extends Segment{
  masterFileIdentifier: string
  masterFileApplicationIdentifier: string[]
  filelevelEventCode: string
  enteredDateTime: string
  effectiveDateTime: string
  responseLevelCode: string
  
  }
  export const HL7MasterFileIdentificationV7 = mongoose.model<HL7MasterFileIdentificationV7Document> ("HL7MasterFileIdentificationV7", HL7MasterFileIdentificationV7Schema);

