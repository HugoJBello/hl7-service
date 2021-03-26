
// Generated typescript code of HL7v 2.3 AIS  (Appointment Information - Service)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationServiceV3Document = mongoose.Document & HL7AppointmentInformationServiceV3I

const HL7AppointmentInformationServiceV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIS: String,
  segmentActionCode: String,
  universalServiceIdentifier: String,
  startDateTime: Date,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationServiceV3I extends Segment{
  setIDAIS: string
  segmentActionCode: string
  universalServiceIdentifier: string
  startDateTime: Date
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationServiceV3 = mongoose.model<HL7AppointmentInformationServiceV3Document> ("HL7AppointmentInformationServiceV3", HL7AppointmentInformationServiceV3Schema);

