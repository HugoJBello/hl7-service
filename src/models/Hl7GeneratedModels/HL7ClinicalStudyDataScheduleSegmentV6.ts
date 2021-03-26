
// Generated typescript code of HL7v 2.6 CSS  (Clinical Study Data Schedule Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyDataScheduleSegmentV6Document = mongoose.Document & HL7ClinicalStudyDataScheduleSegmentV6I

const HL7ClinicalStudyDataScheduleSegmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyScheduledTimePoint: String,
  studyScheduledPatientTimePoint: String,
  studyQualityControlCodes: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyDataScheduleSegmentV6I extends Segment{
  studyScheduledTimePoint: string
  studyScheduledPatientTimePoint: string
  studyQualityControlCodes: string[]
  
  }
  export const HL7ClinicalStudyDataScheduleSegmentV6 = mongoose.model<HL7ClinicalStudyDataScheduleSegmentV6Document> ("HL7ClinicalStudyDataScheduleSegmentV6", HL7ClinicalStudyDataScheduleSegmentV6Schema);

