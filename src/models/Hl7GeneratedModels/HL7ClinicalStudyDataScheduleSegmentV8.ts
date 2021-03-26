
// Generated typescript code of HL7v 2.8 CSS  (Clinical Study Data Schedule Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyDataScheduleSegmentV8Document = mongoose.Document & HL7ClinicalStudyDataScheduleSegmentV8I

const HL7ClinicalStudyDataScheduleSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  studyScheduledTimePoint: String,
  studyScheduledPatientTimePoint: String,
  studyQualityControlCodes: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyDataScheduleSegmentV8I extends Segment{
  studyScheduledTimePoint: string
  studyScheduledPatientTimePoint: string
  studyQualityControlCodes: string[]
  
  }
  export const HL7ClinicalStudyDataScheduleSegmentV8 = mongoose.model<HL7ClinicalStudyDataScheduleSegmentV8Document> ("HL7ClinicalStudyDataScheduleSegmentV8", HL7ClinicalStudyDataScheduleSegmentV8Schema);

