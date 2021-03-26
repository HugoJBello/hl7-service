
// Generated typescript code of HL7v 2.8 CM2  (Clinical Study Schedule Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyScheduleMasterV8Document = mongoose.Document & HL7ClinicalStudyScheduleMasterV8I

const HL7ClinicalStudyScheduleMasterV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdCm2: String,
  scheduledTimePoint: String,
  descriptionOfTimePoint: String,
  eventsScheduledThisTimePoint: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyScheduleMasterV8I extends Segment{
  setIdCm2: string
  scheduledTimePoint: string
  descriptionOfTimePoint: string
  eventsScheduledThisTimePoint: string[]
  
  }
  export const HL7ClinicalStudyScheduleMasterV8 = mongoose.model<HL7ClinicalStudyScheduleMasterV8Document> ("HL7ClinicalStudyScheduleMasterV8", HL7ClinicalStudyScheduleMasterV8Schema);

