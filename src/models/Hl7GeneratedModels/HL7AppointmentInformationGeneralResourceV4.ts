
// Generated typescript code of HL7v 2.4 AIG  (Appointment Information - General Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationGeneralResourceV4Document = mongoose.Document & HL7AppointmentInformationGeneralResourceV4I

const HL7AppointmentInformationGeneralResourceV4Schema = new mongoose.Schema({
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
  startDateTime: Date,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationGeneralResourceV4I extends Segment{
  setIDAIG: string
  segmentActionCode: string
  resourceID: string
  resourceType: string
  resourceGroup: string[]
  resourceQuantity: number
  resourceQuantityUnits: string
  startDateTime: Date
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationGeneralResourceV4 = mongoose.model<HL7AppointmentInformationGeneralResourceV4Document> ("HL7AppointmentInformationGeneralResourceV4", HL7AppointmentInformationGeneralResourceV4Schema);

