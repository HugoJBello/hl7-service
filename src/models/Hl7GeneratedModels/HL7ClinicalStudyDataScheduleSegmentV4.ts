
// Generated typescript code of HL7v 2.4 CSS  (Clinical Study Data Schedule Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyDataScheduleSegmentV4Document = mongoose.Document & HL7ClinicalStudyDataScheduleSegmentV4I

const HL7ClinicalStudyDataScheduleSegmentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyScheduledTimePoint: String,
  studyScheduledPatientTimePoint: Date,
  studyQualityControlCodes: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyDataScheduleSegmentV4I extends Segment{
  studyScheduledTimePoint: string
  studyScheduledPatientTimePoint: Date
  studyQualityControlCodes: string[]
  
  }
  export const HL7ClinicalStudyDataScheduleSegmentV4 = mongoose.model<HL7ClinicalStudyDataScheduleSegmentV4Document> ("HL7ClinicalStudyDataScheduleSegmentV4", HL7ClinicalStudyDataScheduleSegmentV4Schema);

