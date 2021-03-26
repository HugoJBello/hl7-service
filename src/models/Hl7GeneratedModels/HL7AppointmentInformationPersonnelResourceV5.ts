
// Generated typescript code of HL7v 2.5 AIP  (Appointment Information - Personnel Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationPersonnelResourceV5Document = mongoose.Document & HL7AppointmentInformationPersonnelResourceV5I

const HL7AppointmentInformationPersonnelResourceV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIP: String,
  segmentActionCode: String,
  personnelResourceID: Array(String),
  resourceType: String,
  resourceGroup: String,
  startDateTime: Date,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationPersonnelResourceV5I extends Segment{
  setIDAIP: string
  segmentActionCode: string
  personnelResourceID: string[]
  resourceType: string
  resourceGroup: string
  startDateTime: Date
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationPersonnelResourceV5 = mongoose.model<HL7AppointmentInformationPersonnelResourceV5Document> ("HL7AppointmentInformationPersonnelResourceV5", HL7AppointmentInformationPersonnelResourceV5Schema);

