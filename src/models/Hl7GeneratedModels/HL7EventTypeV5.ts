
// Generated typescript code of HL7v 2.5 EVN  (Event Type)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EventTypeV5Document = mongoose.Document & HL7EventTypeV5I

const HL7EventTypeV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventTypeCode: String,
  recordedDateTime: Date,
  dateTimePlannedEvent: Date,
  eventReasonCode: String,
  operatorID: Array(String),
  eventOccurred: Date,
  eventFacility: String,
  
  }, { timestamps: true });
  
export interface HL7EventTypeV5I extends Segment{
  eventTypeCode: string
  recordedDateTime: Date
  dateTimePlannedEvent: Date
  eventReasonCode: string
  operatorID: string[]
  eventOccurred: Date
  eventFacility: string
  
  }
  export const HL7EventTypeV5 = mongoose.model<HL7EventTypeV5Document> ("HL7EventTypeV5", HL7EventTypeV5Schema);

