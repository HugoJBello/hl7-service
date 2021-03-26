
// Generated typescript code of HL7v 2.4 EVN  (Event Type)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EventTypeV4Document = mongoose.Document & HL7EventTypeV4I

const HL7EventTypeV4Schema = new mongoose.Schema({
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
  
export interface HL7EventTypeV4I extends Segment{
  eventTypeCode: string
  recordedDateTime: Date
  dateTimePlannedEvent: Date
  eventReasonCode: string
  operatorID: string[]
  eventOccurred: Date
  eventFacility: string
  
  }
  export const HL7EventTypeV4 = mongoose.model<HL7EventTypeV4Document> ("HL7EventTypeV4", HL7EventTypeV4Schema);

