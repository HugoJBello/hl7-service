
// Generated typescript code of HL7v 2.5 AIL  (Appointment Information - Location Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationLocationResourceV5Document = mongoose.Document & HL7AppointmentInformationLocationResourceV5I

const HL7AppointmentInformationLocationResourceV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIL: String,
  segmentActionCode: String,
  locationResourceID: Array(String),
  locationTypeAIL: String,
  locationGroup: String,
  startDateTime: Date,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationLocationResourceV5I extends Segment{
  setIDAIL: string
  segmentActionCode: string
  locationResourceID: string[]
  locationTypeAIL: string
  locationGroup: string
  startDateTime: Date
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationLocationResourceV5 = mongoose.model<HL7AppointmentInformationLocationResourceV5Document> ("HL7AppointmentInformationLocationResourceV5", HL7AppointmentInformationLocationResourceV5Schema);

