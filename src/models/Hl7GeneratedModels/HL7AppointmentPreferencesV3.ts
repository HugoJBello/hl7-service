
// Generated typescript code of HL7v 2.3 APR  (Appointment Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentPreferencesV3Document = mongoose.Document & HL7AppointmentPreferencesV3I

const HL7AppointmentPreferencesV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  timeSelectionCriteria: Array(String),
  resourceSelectionCriteria: Array(String),
  locationSelectionCriteria: Array(String),
  slotSpacingCriteria: Number,
  fillerOverrideCriteria: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentPreferencesV3I extends Segment{
  timeSelectionCriteria: string[]
  resourceSelectionCriteria: string[]
  locationSelectionCriteria: string[]
  slotSpacingCriteria: number
  fillerOverrideCriteria: string[]
  
  }
  export const HL7AppointmentPreferencesV3 = mongoose.model<HL7AppointmentPreferencesV3Document> ("HL7AppointmentPreferencesV3", HL7AppointmentPreferencesV3Schema);

