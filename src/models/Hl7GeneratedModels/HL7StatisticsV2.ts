
// Generated typescript code of HL7v 2.2 NST  (Statistics)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StatisticsV2Document = mongoose.Document & HL7StatisticsV2I

const HL7StatisticsV2Schema = new mongoose.Schema({
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
  messageReceived: Number,
  messageSent: Number,
  checksumErrorsReceived: Number,
  lengthErrorsReceived: Number,
  otherErrorsReceived: Number,
  connectTimeouts: Number,
  receiveTimeouts: Number,
  networkErrors: Number,
  
  }, { timestamps: true });
  
export interface HL7StatisticsV2I extends Segment{
  statisticsAvailable: string
  sourceIdentifier: string
  sourceType: string
  statisticsStart: Date
  statisticsEnd: Date
  receiveCharacterCount: number
  sendCharacterCount: number
  messageReceived: number
  messageSent: number
  checksumErrorsReceived: number
  lengthErrorsReceived: number
  otherErrorsReceived: number
  connectTimeouts: number
  receiveTimeouts: number
  networkErrors: number
  
  }
  export const HL7StatisticsV2 = mongoose.model<HL7StatisticsV2Document> ("HL7StatisticsV2", HL7StatisticsV2Schema);

