
// Generated typescript code of HL7v 2.7 EVN  (Event Type)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EventTypeV7Document = mongoose.Document & HL7EventTypeV7I

const HL7EventTypeV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventTypeCode: String,
  recordedDateTime: String,
  dateTimePlannedEvent: String,
  eventReasonCode: String,
  operatorId: Array(String),
  eventOccurred: String,
  eventFacility: String,
  
  }, { timestamps: true });
  
export interface HL7EventTypeV7I extends Segment{
  eventTypeCode: string
  recordedDateTime: string
  dateTimePlannedEvent: string
  eventReasonCode: string
  operatorId: string[]
  eventOccurred: string
  eventFacility: string
  
  }
  export const HL7EventTypeV7 = mongoose.model<HL7EventTypeV7Document> ("HL7EventTypeV7", HL7EventTypeV7Schema);

