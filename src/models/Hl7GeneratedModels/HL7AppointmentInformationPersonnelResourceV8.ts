
// Generated typescript code of HL7v 2.8 AIP  (Appointment Information - Personnel Resource)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentInformationPersonnelResourceV8Document = mongoose.Document & HL7AppointmentInformationPersonnelResourceV8I

const HL7AppointmentInformationPersonnelResourceV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAip: String,
  segmentActionCode: String,
  personnelResourceId: Array(String),
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
  
export interface HL7AppointmentInformationPersonnelResourceV8I extends Segment{
  setIdAip: string
  segmentActionCode: string
  personnelResourceId: string[]
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
  export const HL7AppointmentInformationPersonnelResourceV8 = mongoose.model<HL7AppointmentInformationPersonnelResourceV8Document> ("HL7AppointmentInformationPersonnelResourceV8", HL7AppointmentInformationPersonnelResourceV8Schema);

