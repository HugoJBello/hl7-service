
// Generated typescript code of HL7v 2.5 ABS  (Abstract)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AbstractV5Document = mongoose.Document & HL7AbstractV5I

const HL7AbstractV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  dischargeCareProvider: String,
  transferMedicalServiceCode: String,
  severityOfIllnessCode: String,
  dateTimeOfAttestation: Date,
  attestedBy: String,
  triageCode: String,
  abstractCompletionDateTime: Date,
  abstractedBy: String,
  caseCategoryCode: String,
  caesarianSectionIndicator: String,
  gestationCategoryCode: String,
  gestationPeriodWeeks: Number,
  newbornCode: String,
  stillbornIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7AbstractV5I extends Segment{
  dischargeCareProvider: string
  transferMedicalServiceCode: string
  severityOfIllnessCode: string
  dateTimeOfAttestation: Date
  attestedBy: string
  triageCode: string
  abstractCompletionDateTime: Date
  abstractedBy: string
  caseCategoryCode: string
  caesarianSectionIndicator: string
  gestationCategoryCode: string
  gestationPeriodWeeks: number
  newbornCode: string
  stillbornIndicator: string
  
  }
  export const HL7AbstractV5 = mongoose.model<HL7AbstractV5Document> ("HL7AbstractV5", HL7AbstractV5Schema);

