
// Generated typescript code of HL7v 2.8 EVN  (Event Type)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EventTypeV8Document = mongoose.Document & HL7EventTypeV8I

const HL7EventTypeV8Schema = new mongoose.Schema({
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
  
export interface HL7EventTypeV8I extends Segment{
  eventTypeCode: string
  recordedDateTime: string
  dateTimePlannedEvent: string
  eventReasonCode: string
  operatorId: string[]
  eventOccurred: string
  eventFacility: string
  
  }
  export const HL7EventTypeV8 = mongoose.model<HL7EventTypeV8Document> ("HL7EventTypeV8", HL7EventTypeV8Schema);

