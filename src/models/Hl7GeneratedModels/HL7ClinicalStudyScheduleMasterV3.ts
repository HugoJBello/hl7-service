
// Generated typescript code of HL7v 2.3 CM2  (Clinical Study Schedule Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyScheduleMasterV3Document = mongoose.Document & HL7ClinicalStudyScheduleMasterV3I

const HL7ClinicalStudyScheduleMasterV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  cM2SetID: String,
  scheduledTimePoint: String,
  descriptionOfTimePoint: String,
  eventsScheduledThisTimePoint: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyScheduleMasterV3I extends Segment{
  cM2SetID: string
  scheduledTimePoint: string
  descriptionOfTimePoint: string
  eventsScheduledThisTimePoint: string[]
  
  }
  export const HL7ClinicalStudyScheduleMasterV3 = mongoose.model<HL7ClinicalStudyScheduleMasterV3Document> ("HL7ClinicalStudyScheduleMasterV3", HL7ClinicalStudyScheduleMasterV3Schema);

