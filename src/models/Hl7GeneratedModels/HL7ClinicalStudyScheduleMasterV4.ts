
// Generated typescript code of HL7v 2.4 CM2  (Clinical Study Schedule Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyScheduleMasterV4Document = mongoose.Document & HL7ClinicalStudyScheduleMasterV4I

const HL7ClinicalStudyScheduleMasterV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCM2: String,
  scheduledTimePoint: String,
  descriptionOfTimePoint: String,
  eventsScheduledThisTimePoint: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyScheduleMasterV4I extends Segment{
  setIDCM2: string
  scheduledTimePoint: string
  descriptionOfTimePoint: string
  eventsScheduledThisTimePoint: string[]
  
  }
  export const HL7ClinicalStudyScheduleMasterV4 = mongoose.model<HL7ClinicalStudyScheduleMasterV4Document> ("HL7ClinicalStudyScheduleMasterV4", HL7ClinicalStudyScheduleMasterV4Schema);

