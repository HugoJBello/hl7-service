
// Generated typescript code of HL7v 2.6 FHS  (File Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileHeaderV6Document = mongoose.Document & HL7FileHeaderV6I

const HL7FileHeaderV6Schema = new mongoose.Schema({
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
  fileNameID: String,
  fileHeaderComment: String,
  fileControlID: String,
  referenceFileControlID: String,
  fileSendingNetworkAddress: String,
  fileReceivingNetworkAddress: String,
  
  }, { timestamps: true });
  
export interface HL7FileHeaderV6I extends Segment{
  fileFieldSeparator: string
  fileEncodingCharacters: string
  fileSendingApplication: string
  fileSendingFacility: string
  fileReceivingApplication: string
  fileReceivingFacility: string
  fileCreationDateTime: string
  fileSecurity: string
  fileNameID: string
  fileHeaderComment: string
  fileControlID: string
  referenceFileControlID: string
  fileSendingNetworkAddress: string
  fileReceivingNetworkAddress: string
  
  }
  export const HL7FileHeaderV6 = mongoose.model<HL7FileHeaderV6Document> ("HL7FileHeaderV6", HL7FileHeaderV6Schema);

