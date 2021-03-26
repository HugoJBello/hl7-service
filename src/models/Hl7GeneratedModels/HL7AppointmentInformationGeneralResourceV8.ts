
// Generated typescript code of HL7v 2.8 AIG  (Appointment Information - General Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationGeneralResourceV8Document = mongoose.Document & HL7AppointmentInformationGeneralResourceV8I

const HL7AppointmentInformationGeneralResourceV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAig: String,
  segmentActionCode: String,
  resourceId: String,
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
  
export interface HL7AppointmentInformationGeneralResourceV8I extends Segment{
  setIdAig: string
  segmentActionCode: string
  resourceId: string
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
  export const HL7AppointmentInformationGeneralResourceV8 = mongoose.model<HL7AppointmentInformationGeneralResourceV8Document> ("HL7AppointmentInformationGeneralResourceV8", HL7AppointmentInformationGeneralResourceV8Schema);

