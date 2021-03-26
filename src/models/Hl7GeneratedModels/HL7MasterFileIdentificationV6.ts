
// Generated typescript code of HL7v 2.6 MFI  (Master File Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileIdentificationV6Document = mongoose.Document & HL7MasterFileIdentificationV6I

const HL7MasterFileIdentificationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  masterFileIdentifier: String,
  masterFileApplicationIdentifier: Array(String),
  fileLevelEventCode: String,
  enteredDateTime: String,
  effectiveDateTime: String,
  responseLevelCode: String,
  
  }, { timestamps: true });
  
export interface HL7MasterFileIdentificationV6I extends Segment{
  masterFileIdentifier: string
  masterFileApplicationIdentifier: string[]
  fileLevelEventCode: string
  enteredDateTime: string
  effectiveDateTime: string
  responseLevelCode: string
  
  }
  export const HL7MasterFileIdentificationV6 = mongoose.model<HL7MasterFileIdentificationV6Document> ("HL7MasterFileIdentificationV6", HL7MasterFileIdentificationV6Schema);

