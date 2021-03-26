
// Generated typescript code of HL7v 2.7 AIS  (Appointment Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationV7Document = mongoose.Document & HL7AppointmentInformationV7I

const HL7AppointmentInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAis: String,
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
  
export interface HL7AppointmentInformationV7I extends Segment{
  setIdAis: string
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
  export const HL7AppointmentInformationV7 = mongoose.model<HL7AppointmentInformationV7Document> ("HL7AppointmentInformationV7", HL7AppointmentInformationV7Schema);

