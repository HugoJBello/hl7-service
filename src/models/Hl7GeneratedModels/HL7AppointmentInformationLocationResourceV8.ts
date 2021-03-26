
// Generated typescript code of HL7v 2.8 AIL  (Appointment Information - Location Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationLocationResourceV8Document = mongoose.Document & HL7AppointmentInformationLocationResourceV8I

const HL7AppointmentInformationLocationResourceV8Schema = new mongoose.Schema({
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
  
export interface HL7AppointmentInformationLocationResourceV8I extends Segment{
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
  export const HL7AppointmentInformationLocationResourceV8 = mongoose.model<HL7AppointmentInformationLocationResourceV8Document> ("HL7AppointmentInformationLocationResourceV8", HL7AppointmentInformationLocationResourceV8Schema);

