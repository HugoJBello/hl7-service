
// Generated typescript code of HL7v 2.2 FHS  (File Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileHeaderV2Document = mongoose.Document & HL7FileHeaderV2I

const HL7FileHeaderV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileFieldSeparator: String,
  fileEncodingCharacters: String,
  fileSendingApplication: String,
  fileSendingFacility: String,
  fileReceivingApplication: String,
  fileReceivingFacility: String,
  fileCreationDateTime: Date,
  fileSecurity: String,
  fileNameId: String,
  fileHeaderComment: String,
  fileControlId: String,
  referenceFileControlId: String,
  
  }, { timestamps: true });
  
export interface HL7FileHeaderV2I extends Segment{
  fileFieldSeparator: string
  fileEncodingCharacters: string
  fileSendingApplication: string
  fileSendingFacility: string
  fileReceivingApplication: string
  fileReceivingFacility: string
  fileCreationDateTime: Date
  fileSecurity: string
  fileNameId: string
  fileHeaderComment: string
  fileControlId: string
  referenceFileControlId: string
  
  }
  export const HL7FileHeaderV2 = mongoose.model<HL7FileHeaderV2Document> ("HL7FileHeaderV2", HL7FileHeaderV2Schema);

