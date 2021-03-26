
// Generated typescript code of HL7v 2.7 CM2  (Clinical Study Schedule Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyScheduleMasterV7Document = mongoose.Document & HL7ClinicalStudyScheduleMasterV7I

const HL7ClinicalStudyScheduleMasterV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdCm2: String,
  scheduledTimePoint: String,
  descriptionOfTimePoint: String,
  eventsScheduledThisTimePoint: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyScheduleMasterV7I extends Segment{
  setIdCm2: string
  scheduledTimePoint: string
  descriptionOfTimePoint: string
  eventsScheduledThisTimePoint: string[]
  
  }
  export const HL7ClinicalStudyScheduleMasterV7 = mongoose.model<HL7ClinicalStudyScheduleMasterV7Document> ("HL7ClinicalStudyScheduleMasterV7", HL7ClinicalStudyScheduleMasterV7Schema);

