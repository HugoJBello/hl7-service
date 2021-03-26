
// Generated typescript code of HL7v 2.6 AIP  (Appointment Information - Personnel Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationPersonnelResourceV6Document = mongoose.Document & HL7AppointmentInformationPersonnelResourceV6I

const HL7AppointmentInformationPersonnelResourceV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAIP: String,
  segmentActionCode: String,
  personnelResourceID: Array(String),
  resourceType: String,
  resourceGroup: String,
  startDateTime: String,
  startDateTimeOffset: Number,
  startDateTimeOffsetUnits: String,
  duration: Number,
  durationUnits: String,
  allowSubstitutionCode: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentInformationPersonnelResourceV6I extends Segment{
  setIDAIP: string
  segmentActionCode: string
  personnelResourceID: string[]
  resourceType: string
  resourceGroup: string
  startDateTime: string
  startDateTimeOffset: number
  startDateTimeOffsetUnits: string
  duration: number
  durationUnits: string
  allowSubstitutionCode: string
  fillerStatusCode: string
  
  }
  export const HL7AppointmentInformationPersonnelResourceV6 = mongoose.model<HL7AppointmentInformationPersonnelResourceV6Document> ("HL7AppointmentInformationPersonnelResourceV6", HL7AppointmentInformationPersonnelResourceV6Schema);

