
// Generated typescript code of HL7v 2.8 APR  (Appointment Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentPreferencesV8Document = mongoose.Document & HL7AppointmentPreferencesV8I

const HL7AppointmentPreferencesV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  timeSelectionCriteria: Array(String),
  resourceSelectionCriteria: Array(String),
  locationSelectionCriteria: Array(String),
  slotSpacingCriteria: Number,
  fillerOverrideCriteria: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentPreferencesV8I extends Segment{
  timeSelectionCriteria: string[]
  resourceSelectionCriteria: string[]
  locationSelectionCriteria: string[]
  slotSpacingCriteria: number
  fillerOverrideCriteria: string[]
  
  }
  export const HL7AppointmentPreferencesV8 = mongoose.model<HL7AppointmentPreferencesV8Document> ("HL7AppointmentPreferencesV8", HL7AppointmentPreferencesV8Schema);

