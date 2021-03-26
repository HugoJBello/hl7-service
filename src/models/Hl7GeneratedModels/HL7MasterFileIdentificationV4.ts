
// Generated typescript code of HL7v 2.4 MFI  (Master File Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileIdentificationV4Document = mongoose.Document & HL7MasterFileIdentificationV4I

const HL7MasterFileIdentificationV4Schema = new mongoose.Schema({
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
  
export interface HL7MasterFileIdentificationV4I extends Segment{
  masterFileIdentifier: string
  masterFileApplicationIdentifier: string
  fileLevelEventCode: string
  enteredDateTime: Date
  effectiveDateTime: Date
  responseLevelCode: string
  
  }
  export const HL7MasterFileIdentificationV4 = mongoose.model<HL7MasterFileIdentificationV4Document> ("HL7MasterFileIdentificationV4", HL7MasterFileIdentificationV4Schema);

