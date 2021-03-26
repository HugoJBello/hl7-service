
// Generated typescript code of HL7v 2.5 FHS  (File Header Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileHeaderSegmentV5Document = mongoose.Document & HL7FileHeaderSegmentV5I

const HL7FileHeaderSegmentV5Schema = new mongoose.Schema({
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
  
export interface HL7FileHeaderSegmentV5I extends Segment{
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
  export const HL7FileHeaderSegmentV5 = mongoose.model<HL7FileHeaderSegmentV5Document> ("HL7FileHeaderSegmentV5", HL7FileHeaderSegmentV5Schema);

