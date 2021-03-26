
// Generated typescript code of HL7v 2.6 AIS  (Appointment Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationV6Document = mongoose.Document & HL7AppointmentInformationV6I

const HL7AppointmentInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIS: String,
  segmentActionCode: String,
  universalServiceIdentifier: String,
  startDateTime: String,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  placerSupplementalServiceInformation: Array(String),
  fillerSupplementalServiceInformation: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationV6I extends Segment{
  setIDAIS: string
  segmentActionCode: string
  universalServiceIdentifier: string
  startDateTime: string
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  placerSupplementalServiceInformation: string[]
  fillerSupplementalServiceInformation: string[]
  
  }
  export const HL7AppointmentInformationV6 = mongoose.model<HL7AppointmentInformationV6Document> ("HL7AppointmentInformationV6", HL7AppointmentInformationV6Schema);

