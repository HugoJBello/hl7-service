
// Generated typescript code of HL7v 2.8 FHS  (File Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileHeaderV8Document = mongoose.Document & HL7FileHeaderV8I

const HL7FileHeaderV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileFieldSeparator: String,
  fileEncodingCharacters: String,
  fileSendingApplication: String,
  fileSendingFacility: String,
  fileReceivingApplication: String,
  fileReceivingFacility: String,
  fileCreationDateTime: String,
  fileSecurity: String,
  fileNameId: String,
  fileHeaderComment: String,
  fileControlId: String,
  referenceFileControlId: String,
  fileSendingNetworkAddress: String,
  fileReceivingNetworkAddress: String,
  
  }, { timestamps: true });
  
export interface HL7FileHeaderV8I extends Segment{
  fileFieldSeparator: string
  fileEncodingCharacters: string
  fileSendingApplication: string
  fileSendingFacility: string
  fileReceivingApplication: string
  fileReceivingFacility: string
  fileCreationDateTime: string
  fileSecurity: string
  fileNameId: string
  fileHeaderComment: string
  fileControlId: string
  referenceFileControlId: string
  fileSendingNetworkAddress: string
  fileReceivingNetworkAddress: string
  
  }
  export const HL7FileHeaderV8 = mongoose.model<HL7FileHeaderV8Document> ("HL7FileHeaderV8", HL7FileHeaderV8Schema);

