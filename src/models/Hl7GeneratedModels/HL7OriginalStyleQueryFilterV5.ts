
// Generated typescript code of HL7v 2.5 QRF  (Original style query filter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OriginalStyleQueryFilterV5Document = mongoose.Document & HL7OriginalStyleQueryFilterV5I

const HL7OriginalStyleQueryFilterV5Schema = new mongoose.Schema({
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
  
export interface HL7OriginalStyleQueryFilterV5I extends Segment{
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
  export const HL7OriginalStyleQueryFilterV5 = mongoose.model<HL7OriginalStyleQueryFilterV5Document> ("HL7OriginalStyleQueryFilterV5", HL7OriginalStyleQueryFilterV5Schema);

