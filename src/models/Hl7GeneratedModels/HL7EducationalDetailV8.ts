
// Generated typescript code of HL7v 2.8 EDU  (Educational Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EducationalDetailV8Document = mongoose.Document & HL7EducationalDetailV8I

const HL7EducationalDetailV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdEdu: String,
  academicDegree: String,
  academicDegreeProgramDateRange: String,
  academicDegreeProgramParticipationDateRange: String,
  academicDegreeGrantedDate: String,
  school: String,
  schoolTypeCode: String,
  schoolAddress: String,
  majorFieldOfStudy: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EducationalDetailV8I extends Segment{
  setIdEdu: string
  academicDegree: string
  academicDegreeProgramDateRange: string
  academicDegreeProgramParticipationDateRange: string
  academicDegreeGrantedDate: string
  school: string
  schoolTypeCode: string
  schoolAddress: string
  majorFieldOfStudy: string[]
  
  }
  export const HL7EducationalDetailV8 = mongoose.model<HL7EducationalDetailV8Document> ("HL7EducationalDetailV8", HL7EducationalDetailV8Schema);

