
// Generated typescript code of HL7v 2.5 APR  (Appointment Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentPreferencesV5Document = mongoose.Document & HL7AppointmentPreferencesV5I

const HL7AppointmentPreferencesV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  timeSelectionCriteria: Array(String),
  resourceSelectionCriteria: Array(String),
  locationSelectionCriteria: Array(String),
  slotSpacingCriteria: Number,
  fillerOverrideCriteria: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentPreferencesV5I extends Segment{
  timeSelectionCriteria: string[]
  resourceSelectionCriteria: string[]
  locationSelectionCriteria: string[]
  slotSpacingCriteria: number
  fillerOverrideCriteria: string[]
  
  }
  export const HL7AppointmentPreferencesV5 = mongoose.model<HL7AppointmentPreferencesV5Document> ("HL7AppointmentPreferencesV5", HL7AppointmentPreferencesV5Schema);

