
// Generated typescript code of HL7v 2.4 APR  (Appointment Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentPreferencesV4Document = mongoose.Document & HL7AppointmentPreferencesV4I

const HL7AppointmentPreferencesV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  timeSelectionCriteria: Array(String),
  resourceSelectionCriteria: Array(String),
  locationSelectionCriteria: Array(String),
  slotSpacingCriteria: Number,
  fillerOverrideCriteria: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentPreferencesV4I extends Segment{
  timeSelectionCriteria: string[]
  resourceSelectionCriteria: string[]
  locationSelectionCriteria: string[]
  slotSpacingCriteria: number
  fillerOverrideCriteria: string[]
  
  }
  export const HL7AppointmentPreferencesV4 = mongoose.model<HL7AppointmentPreferencesV4Document> ("HL7AppointmentPreferencesV4", HL7AppointmentPreferencesV4Schema);

