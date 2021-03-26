
// Generated typescript code of HL7v 2.5 AIG  (Appointment Information - General Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationGeneralResourceV5Document = mongoose.Document & HL7AppointmentInformationGeneralResourceV5I

const HL7AppointmentInformationGeneralResourceV5Schema = new mongoose.Schema({
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
  
export interface HL7AppointmentInformationGeneralResourceV5I extends Segment{
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
  export const HL7AppointmentInformationGeneralResourceV5 = mongoose.model<HL7AppointmentInformationGeneralResourceV5Document> ("HL7AppointmentInformationGeneralResourceV5", HL7AppointmentInformationGeneralResourceV5Schema);

