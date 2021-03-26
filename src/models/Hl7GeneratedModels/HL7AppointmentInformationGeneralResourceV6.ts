
// Generated typescript code of HL7v 2.6 AIG  (Appointment Information - General Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationGeneralResourceV6Document = mongoose.Document & HL7AppointmentInformationGeneralResourceV6I

const HL7AppointmentInformationGeneralResourceV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIG: String,
  segmentActionCode: String,
  resourceID: String,
  resourceType: String,
  resourceGroup: Array(String),
  resourceQuantity: Number,
  resourceQuantityUnits: String,
  startDateTime: String,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationGeneralResourceV6I extends Segment{
  setIDAIG: string
  segmentActionCode: string
  resourceID: string
  resourceType: string
  resourceGroup: string[]
  resourceQuantity: number
  resourceQuantityUnits: string
  startDateTime: string
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationGeneralResourceV6 = mongoose.model<HL7AppointmentInformationGeneralResourceV6Document> ("HL7AppointmentInformationGeneralResourceV6", HL7AppointmentInformationGeneralResourceV6Schema);

