
// Generated typescript code of HL7v 2.5 AIS  (Appointment Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationV5Document = mongoose.Document & HL7AppointmentInformationV5I

const HL7AppointmentInformationV5Schema = new mongoose.Schema({
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
  
export interface HL7AppointmentInformationV5I extends Segment{
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
  export const HL7AppointmentInformationV5 = mongoose.model<HL7AppointmentInformationV5Document> ("HL7AppointmentInformationV5", HL7AppointmentInformationV5Schema);

