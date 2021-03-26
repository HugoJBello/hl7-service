
// Generated typescript code of HL7v 2.3 FHS  (File Header Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileHeaderSegmentV3Document = mongoose.Document & HL7FileHeaderSegmentV3I

const HL7FileHeaderSegmentV3Schema = new mongoose.Schema({
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
  fileNameID: String,
  fileHeaderComment: String,
  fileControlID: String,
  referenceFileControlID: String,
  
  }, { timestamps: true });
  
export interface HL7FileHeaderSegmentV3I extends Segment{
  fileFieldSeparator: string
  fileEncodingCharacters: string
  fileSendingApplication: string
  fileSendingFacility: string
  fileReceivingApplication: string
  fileReceivingFacility: string
  fileCreationDateTime: Date
  fileSecurity: string
  fileNameID: string
  fileHeaderComment: string
  fileControlID: string
  referenceFileControlID: string
  
  }
  export const HL7FileHeaderSegmentV3 = mongoose.model<HL7FileHeaderSegmentV3Document> ("HL7FileHeaderSegmentV3", HL7FileHeaderSegmentV3Schema);

