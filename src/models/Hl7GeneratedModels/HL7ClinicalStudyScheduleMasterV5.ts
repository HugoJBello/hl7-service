
// Generated typescript code of HL7v 2.5 CM2  (Clinical Study Schedule Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyScheduleMasterV5Document = mongoose.Document & HL7ClinicalStudyScheduleMasterV5I

const HL7ClinicalStudyScheduleMasterV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCM2: String,
  scheduledTimePoint: String,
  descriptionOfTimePoint: String,
  eventsScheduledThisTimePoint: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyScheduleMasterV5I extends Segment{
  setIDCM2: string
  scheduledTimePoint: string
  descriptionOfTimePoint: string
  eventsScheduledThisTimePoint: string[]
  
  }
  export const HL7ClinicalStudyScheduleMasterV5 = mongoose.model<HL7ClinicalStudyScheduleMasterV5Document> ("HL7ClinicalStudyScheduleMasterV5", HL7ClinicalStudyScheduleMasterV5Schema);

