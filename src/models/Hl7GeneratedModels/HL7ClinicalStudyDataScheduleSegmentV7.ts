
// Generated typescript code of HL7v 2.7 CSS  (Clinical Study Data Schedule Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyDataScheduleSegmentV7Document = mongoose.Document & HL7ClinicalStudyDataScheduleSegmentV7I

const HL7ClinicalStudyDataScheduleSegmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyScheduledTimePoint: String,
  studyScheduledPatientTimePoint: String,
  studyQualityControlCodes: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyDataScheduleSegmentV7I extends Segment{
  studyScheduledTimePoint: string
  studyScheduledPatientTimePoint: string
  studyQualityControlCodes: string[]
  
  }
  export const HL7ClinicalStudyDataScheduleSegmentV7 = mongoose.model<HL7ClinicalStudyDataScheduleSegmentV7Document> ("HL7ClinicalStudyDataScheduleSegmentV7", HL7ClinicalStudyDataScheduleSegmentV7Schema);

