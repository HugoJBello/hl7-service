
// Generated typescript code of HL7v 2.5 CSS  (Clinical Study Data Schedule Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyDataScheduleSegmentV5Document = mongoose.Document & HL7ClinicalStudyDataScheduleSegmentV5I

const HL7ClinicalStudyDataScheduleSegmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyScheduledTimePoint: String,
  studyScheduledPatientTimePoint: Date,
  studyQualityControlCodes: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyDataScheduleSegmentV5I extends Segment{
  studyScheduledTimePoint: string
  studyScheduledPatientTimePoint: Date
  studyQualityControlCodes: string[]
  
  }
  export const HL7ClinicalStudyDataScheduleSegmentV5 = mongoose.model<HL7ClinicalStudyDataScheduleSegmentV5Document> ("HL7ClinicalStudyDataScheduleSegmentV5", HL7ClinicalStudyDataScheduleSegmentV5Schema);

