
// Generated typescript code of HL7v 2.6 APR  (Appointment Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentPreferencesV6Document = mongoose.Document & HL7AppointmentPreferencesV6I

const HL7AppointmentPreferencesV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  timeSelectionCriteria: Array(String),
  resourceSelectionCriteria: Array(String),
  locationSelectionCriteria: Array(String),
  slotSpacingCriteria: Number,
  fillerOverrideCriteria: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentPreferencesV6I extends Segment{
  timeSelectionCriteria: string[]
  resourceSelectionCriteria: string[]
  locationSelectionCriteria: string[]
  slotSpacingCriteria: number
  fillerOverrideCriteria: string[]
  
  }
  export const HL7AppointmentPreferencesV6 = mongoose.model<HL7AppointmentPreferencesV6Document> ("HL7AppointmentPreferencesV6", HL7AppointmentPreferencesV6Schema);

