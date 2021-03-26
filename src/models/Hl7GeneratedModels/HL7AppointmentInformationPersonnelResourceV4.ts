
// Generated typescript code of HL7v 2.4 AIP  (Appointment Information - Personnel Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationPersonnelResourceV4Document = mongoose.Document & HL7AppointmentInformationPersonnelResourceV4I

const HL7AppointmentInformationPersonnelResourceV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIP: String,
  segmentActionCode: String,
  personnelResourceID: Array(String),
  resourceRole: String,
  resourceGroup: String,
  startDateTime: Date,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationPersonnelResourceV4I extends Segment{
  setIDAIP: string
  segmentActionCode: string
  personnelResourceID: string[]
  resourceRole: string
  resourceGroup: string
  startDateTime: Date
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationPersonnelResourceV4 = mongoose.model<HL7AppointmentInformationPersonnelResourceV4Document> ("HL7AppointmentInformationPersonnelResourceV4", HL7AppointmentInformationPersonnelResourceV4Schema);

