
// Generated typescript code of HL7v 2.4 AIS  (Appointment Information - Service)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationServiceV4Document = mongoose.Document & HL7AppointmentInformationServiceV4I

const HL7AppointmentInformationServiceV4Schema = new mongoose.Schema({
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
  placerSupplementalServiceInformation: Array(String),
  fillerSupplementalServiceInformation: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationServiceV4I extends Segment{
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
  placerSupplementalServiceInformation: string[]
  fillerSupplementalServiceInformation: string[]
  
  }
  export const HL7AppointmentInformationServiceV4 = mongoose.model<HL7AppointmentInformationServiceV4Document> ("HL7AppointmentInformationServiceV4", HL7AppointmentInformationServiceV4Schema);

