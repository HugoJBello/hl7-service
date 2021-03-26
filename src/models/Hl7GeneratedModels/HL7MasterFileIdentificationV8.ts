
// Generated typescript code of HL7v 2.8 MFI  (Master File Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileIdentificationV8Document = mongoose.Document & HL7MasterFileIdentificationV8I

const HL7MasterFileIdentificationV8Schema = new mongoose.Schema({
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
  
export interface HL7MasterFileIdentificationV8I extends Segment{
  masterFileIdentifier: string
  masterFileApplicationIdentifier: string[]
  filelevelEventCode: string
  enteredDateTime: string
  effectiveDateTime: string
  responseLevelCode: string
  
  }
  export const HL7MasterFileIdentificationV8 = mongoose.model<HL7MasterFileIdentificationV8Document> ("HL7MasterFileIdentificationV8", HL7MasterFileIdentificationV8Schema);

