
// Generated typescript code of HL7v 2.5 MFI  (Master File Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileIdentificationV5Document = mongoose.Document & HL7MasterFileIdentificationV5I

const HL7MasterFileIdentificationV5Schema = new mongoose.Schema({
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
  
export interface HL7MasterFileIdentificationV5I extends Segment{
  masterFileIdentifier: string
  masterFileApplicationIdentifier: string
  fileLevelEventCode: string
  enteredDateTime: Date
  effectiveDateTime: Date
  responseLevelCode: string
  
  }
  export const HL7MasterFileIdentificationV5 = mongoose.model<HL7MasterFileIdentificationV5Document> ("HL7MasterFileIdentificationV5", HL7MasterFileIdentificationV5Schema);

