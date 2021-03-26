
// Generated typescript code of HL7v 2.6 EVN  (Event Type)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EventTypeV6Document = mongoose.Document & HL7EventTypeV6I

const HL7EventTypeV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventTypeCode: String,
  recordedDateTime: String,
  dateTimePlannedEvent: String,
  eventReasonCode: String,
  operatorID: Array(String),
  eventOccurred: String,
  eventFacility: String,
  
  }, { timestamps: true });
  
export interface HL7EventTypeV6I extends Segment{
  eventTypeCode: string
  recordedDateTime: string
  dateTimePlannedEvent: string
  eventReasonCode: string
  operatorID: string[]
  eventOccurred: string
  eventFacility: string
  
  }
  export const HL7EventTypeV6 = mongoose.model<HL7EventTypeV6Document> ("HL7EventTypeV6", HL7EventTypeV6Schema);

