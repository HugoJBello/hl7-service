
// Generated typescript code of HL7v 2.3 AIL  (Appointment Information - Location)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationLocationV3Document = mongoose.Document & HL7AppointmentInformationLocationV3I

const HL7AppointmentInformationLocationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIL: String,
  segmentActionCode: String,
  locationResourceID: String,
  locationType: String,
  locationGroup: String,
  startDateTime: Date,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationLocationV3I extends Segment{
  setIDAIL: string
  segmentActionCode: string
  locationResourceID: string
  locationType: string
  locationGroup: string
  startDateTime: Date
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationLocationV3 = mongoose.model<HL7AppointmentInformationLocationV3Document> ("HL7AppointmentInformationLocationV3", HL7AppointmentInformationLocationV3Schema);

