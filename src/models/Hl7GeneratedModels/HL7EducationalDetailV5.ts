
// Generated typescript code of HL7v 2.5 EDU  (Educational Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EducationalDetailV5Document = mongoose.Document & HL7EducationalDetailV5I

const HL7EducationalDetailV5Schema = new mongoose.Schema({
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
  
export interface HL7EducationalDetailV5I extends Segment{
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
  export const HL7EducationalDetailV5 = mongoose.model<HL7EducationalDetailV5Document> ("HL7EducationalDetailV5", HL7EducationalDetailV5Schema);

