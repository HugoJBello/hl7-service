
// Generated typescript code of HL7v 2.3 NST  (Statistics)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StatisticsV3Document = mongoose.Document & HL7StatisticsV3I

const HL7StatisticsV3Schema = new mongoose.Schema({
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
  networkErrors: Number,
  
  }, { timestamps: true });
  
export interface HL7StatisticsV3I extends Segment{
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
  networkErrors: number
  
  }
  export const HL7StatisticsV3 = mongoose.model<HL7StatisticsV3Document> ("HL7StatisticsV3", HL7StatisticsV3Schema);

