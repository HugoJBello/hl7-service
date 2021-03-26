
// Generated typescript code of HL7v 2.4 QRF  (Original Style Query Filter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OriginalStyleQueryFilterV4Document = mongoose.Document & HL7OriginalStyleQueryFilterV4I

const HL7OriginalStyleQueryFilterV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whereSubjectFilter: Array(String),
  whenDataStartDateTime: Date,
  whenDataEndDateTime: Date,
  whatUserQualifier: Array(String),
  otherQRYSubjectFilter: Array(String),
  whichDateTimeQualifier: Array(String),
  whichDateTimeStatusQualifier: Array(String),
  dateTimeSelectionQualifier: Array(String),
  whenQuantityTimingQualifier: String,
  searchConfidenceThreshold: Number,
  
  }, { timestamps: true });
  
export interface HL7OriginalStyleQueryFilterV4I extends Segment{
  whereSubjectFilter: string[]
  whenDataStartDateTime: Date
  whenDataEndDateTime: Date
  whatUserQualifier: string[]
  otherQRYSubjectFilter: string[]
  whichDateTimeQualifier: string[]
  whichDateTimeStatusQualifier: string[]
  dateTimeSelectionQualifier: string[]
  whenQuantityTimingQualifier: string
  searchConfidenceThreshold: number
  
  }
  export const HL7OriginalStyleQueryFilterV4 = mongoose.model<HL7OriginalStyleQueryFilterV4Document> ("HL7OriginalStyleQueryFilterV4", HL7OriginalStyleQueryFilterV4Schema);

