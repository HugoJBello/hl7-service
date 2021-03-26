
// Generated typescript code of HL7v 2.6 CM2  (Clinical Study Schedule Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyScheduleMasterV6Document = mongoose.Document & HL7ClinicalStudyScheduleMasterV6I

const HL7ClinicalStudyScheduleMasterV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCM2: String,
  scheduledTimePoint: String,
  descriptionOfTimePoint: String,
  eventsScheduledThisTimePoint: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyScheduleMasterV6I extends Segment{
  setIDCM2: string
  scheduledTimePoint: string
  descriptionOfTimePoint: string
  eventsScheduledThisTimePoint: string[]
  
  }
  export const HL7ClinicalStudyScheduleMasterV6 = mongoose.model<HL7ClinicalStudyScheduleMasterV6Document> ("HL7ClinicalStudyScheduleMasterV6", HL7ClinicalStudyScheduleMasterV6Schema);

