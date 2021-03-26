
// Generated typescript code of HL7v 2.3 EVN  (Event type)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EventTypeV3Document = mongoose.Document & HL7EventTypeV3I

const HL7EventTypeV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventTypeCode: String,
  recordedDateTime: Date,
  dateTimePlannedEvent: Date,
  eventReasonCode: String,
  operatorID: String,
  eventOccurred: Date,
  
  }, { timestamps: true });
  
export interface HL7EventTypeV3I extends Segment{
  eventTypeCode: string
  recordedDateTime: Date
  dateTimePlannedEvent: Date
  eventReasonCode: string
  operatorID: string
  eventOccurred: Date
  
  }
  export const HL7EventTypeV3 = mongoose.model<HL7EventTypeV3Document> ("HL7EventTypeV3", HL7EventTypeV3Schema);

