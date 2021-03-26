
// Generated typescript code of HL7v 2.2 EVN  (Event Type)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EventTypeV2Document = mongoose.Document & HL7EventTypeV2I

const HL7EventTypeV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventTypeCode: String,
  dateTimeOfEvent: Date,
  dateTimePlannedEvent: Date,
  eventReasonCode: String,
  operatorId: String,
  
  }, { timestamps: true });
  
export interface HL7EventTypeV2I extends Segment{
  eventTypeCode: string
  dateTimeOfEvent: Date
  dateTimePlannedEvent: Date
  eventReasonCode: string
  operatorId: string
  
  }
  export const HL7EventTypeV2 = mongoose.model<HL7EventTypeV2Document> ("HL7EventTypeV2", HL7EventTypeV2Schema);

