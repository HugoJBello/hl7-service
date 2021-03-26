
// Generated typescript code of HL7v 2.7 NST  (Application Control Level Statistics)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ApplicationControlLevelStatisticsV7Document = mongoose.Document & HL7ApplicationControlLevelStatisticsV7I

const HL7ApplicationControlLevelStatisticsV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  statisticsAvailable: String,
  sourceIdentifier: String,
  sourceType: String,
  statisticsStart: String,
  statisticsEnd: String,
  receiveCharacterCount: Number,
  sendCharacterCount: Number,
  messagesReceived: Number,
  messagesSent: Number,
  checksumErrorsReceived: Number,
  lengthErrorsReceived: Number,
  otherErrorsReceived: Number,
  connectTimeouts: Number,
  receiveTimeouts: Number,
  applicationControllevelErrors: Number,
  
  }, { timestamps: true });
  
export interface HL7ApplicationControlLevelStatisticsV7I extends Segment{
  statisticsAvailable: string
  sourceIdentifier: string
  sourceType: string
  statisticsStart: string
  statisticsEnd: string
  receiveCharacterCount: number
  sendCharacterCount: number
  messagesReceived: number
  messagesSent: number
  checksumErrorsReceived: number
  lengthErrorsReceived: number
  otherErrorsReceived: number
  connectTimeouts: number
  receiveTimeouts: number
  applicationControllevelErrors: number
  
  }
  export const HL7ApplicationControlLevelStatisticsV7 = mongoose.model<HL7ApplicationControlLevelStatisticsV7Document> ("HL7ApplicationControlLevelStatisticsV7", HL7ApplicationControlLevelStatisticsV7Schema);

