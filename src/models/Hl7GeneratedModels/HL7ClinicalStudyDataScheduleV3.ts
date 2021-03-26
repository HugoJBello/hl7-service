
// Generated typescript code of HL7v 2.3 CSS  (Clinical Study Data Schedule)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyDataScheduleV3Document = mongoose.Document & HL7ClinicalStudyDataScheduleV3I

const HL7ClinicalStudyDataScheduleV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyScheduledTimePoint: String,
  studyScheduledPatientTimePoint: Date,
  studyQualityControlCodes: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyDataScheduleV3I extends Segment{
  studyScheduledTimePoint: string
  studyScheduledPatientTimePoint: Date
  studyQualityControlCodes: string[]
  
  }
  export const HL7ClinicalStudyDataScheduleV3 = mongoose.model<HL7ClinicalStudyDataScheduleV3Document> ("HL7ClinicalStudyDataScheduleV3", HL7ClinicalStudyDataScheduleV3Schema);

