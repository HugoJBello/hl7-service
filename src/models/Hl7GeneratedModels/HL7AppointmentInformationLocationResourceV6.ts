
// Generated typescript code of HL7v 2.6 AIL  (Appointment Information - Location Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationLocationResourceV6Document = mongoose.Document & HL7AppointmentInformationLocationResourceV6I

const HL7AppointmentInformationLocationResourceV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIL: String,
  segmentActionCode: String,
  locationResourceID: Array(String),
  locationTypeAIL: String,
  locationGroup: String,
  startDateTime: String,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationLocationResourceV6I extends Segment{
  setIDAIL: string
  segmentActionCode: string
  locationResourceID: string[]
  locationTypeAIL: string
  locationGroup: string
  startDateTime: string
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationLocationResourceV6 = mongoose.model<HL7AppointmentInformationLocationResourceV6Document> ("HL7AppointmentInformationLocationResourceV6", HL7AppointmentInformationLocationResourceV6Schema);

