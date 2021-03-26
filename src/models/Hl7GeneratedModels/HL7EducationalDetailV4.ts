
// Generated typescript code of HL7v 2.4 EDU  (Educational Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EducationalDetailV4Document = mongoose.Document & HL7EducationalDetailV4I

const HL7EducationalDetailV4Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7EducationalDetailV4I extends Segment{
  setIDEDU: string
  academicDegree: string
  academicDegreeProgramDateRange: string
  academicDegreeProgramParticipationDateRange: string
  academicDegreeGrantedDate: string
  school: string
  schoolTypeCode: string
  schoolAddress: string
  
  }
  export const HL7EducationalDetailV4 = mongoose.model<HL7EducationalDetailV4Document> ("HL7EducationalDetailV4", HL7EducationalDetailV4Schema);

