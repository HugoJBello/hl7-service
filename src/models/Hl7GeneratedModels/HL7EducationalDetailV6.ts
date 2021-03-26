
// Generated typescript code of HL7v 2.6 EDU  (Educational Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EducationalDetailV6Document = mongoose.Document & HL7EducationalDetailV6I

const HL7EducationalDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDEDU: String,
  academicDegree: String,
  academicDegreeProgramDateRange: String,
  academicDegreeProgramParticipationDateRange: String,
  academicDegreeGrantedDate: String,
  school: String,
  schoolTypeCode: String,
  schoolAddress: String,
  majorFieldOfStudy: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EducationalDetailV6I extends Segment{
  setIDEDU: string
  academicDegree: string
  academicDegreeProgramDateRange: string
  academicDegreeProgramParticipationDateRange: string
  academicDegreeGrantedDate: string
  school: string
  schoolTypeCode: string
  schoolAddress: string
  majorFieldOfStudy: string[]
  
  }
  export const HL7EducationalDetailV6 = mongoose.model<HL7EducationalDetailV6Document> ("HL7EducationalDetailV6", HL7EducationalDetailV6Schema);

