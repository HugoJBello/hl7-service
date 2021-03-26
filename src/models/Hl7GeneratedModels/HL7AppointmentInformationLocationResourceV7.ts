
// Generated typescript code of HL7v 2.7 AIL  (Appointment Information - Location Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationLocationResourceV7Document = mongoose.Document & HL7AppointmentInformationLocationResourceV7I

const HL7AppointmentInformationLocationResourceV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAil: String,
  segmentActionCode: String,
  locationResourceId: Array(String),
  locationTypeAil: String,
  locationGroup: String,
  startDateTime: String,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationLocationResourceV7I extends Segment{
  setIdAil: string
  segmentActionCode: string
  locationResourceId: string[]
  locationTypeAil: string
  locationGroup: string
  startDateTime: string
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationLocationResourceV7 = mongoose.model<HL7AppointmentInformationLocationResourceV7Document> ("HL7AppointmentInformationLocationResourceV7", HL7AppointmentInformationLocationResourceV7Schema);

