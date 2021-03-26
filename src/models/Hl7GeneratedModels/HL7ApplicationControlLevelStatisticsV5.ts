
// Generated typescript code of HL7v 2.5 NST  (Application control level statistics)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ApplicationControlLevelStatisticsV5Document = mongoose.Document & HL7ApplicationControlLevelStatisticsV5I

const HL7ApplicationControlLevelStatisticsV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  statisticsAvailable: String,
  sourceIdentifier: String,
  sourceType: String,
  statisticsStart: Date,
  statisticsEnd: Date,
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
  
export interface HL7ApplicationControlLevelStatisticsV5I extends Segment{
  statisticsAvailable: string
  sourceIdentifier: string
  sourceType: string
  statisticsStart: Date
  statisticsEnd: Date
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
  export const HL7ApplicationControlLevelStatisticsV5 = mongoose.model<HL7ApplicationControlLevelStatisticsV5Document> ("HL7ApplicationControlLevelStatisticsV5", HL7ApplicationControlLevelStatisticsV5Schema);

