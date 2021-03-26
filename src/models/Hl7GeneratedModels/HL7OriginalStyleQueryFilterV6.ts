
// Generated typescript code of HL7v 2.6 QRF  (Original style query filter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OriginalStyleQueryFilterV6Document = mongoose.Document & HL7OriginalStyleQueryFilterV6I

const HL7OriginalStyleQueryFilterV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whereSubjectFilter: Array(String),
  whenDataStartDateTime: String,
  whenDataEndDateTime: String,
  whatUserQualifier: Array(String),
  otherQRYSubjectFilter: Array(String),
  whichDateTimeQualifier: Array(String),
  whichDateTimeStatusQualifier: Array(String),
  dateTimeSelectionQualifier: Array(String),
  whenQuantityTimingQualifier: String,
  searchConfidenceThreshold: Number,
  
  }, { timestamps: true });
  
export interface HL7OriginalStyleQueryFilterV6I extends Segment{
  whereSubjectFilter: string[]
  whenDataStartDateTime: string
  whenDataEndDateTime: string
  whatUserQualifier: string[]
  otherQRYSubjectFilter: string[]
  whichDateTimeQualifier: string[]
  whichDateTimeStatusQualifier: string[]
  dateTimeSelectionQualifier: string[]
  whenQuantityTimingQualifier: string
  searchConfidenceThreshold: number
  
  }
  export const HL7OriginalStyleQueryFilterV6 = mongoose.model<HL7OriginalStyleQueryFilterV6Document> ("HL7OriginalStyleQueryFilterV6", HL7OriginalStyleQueryFilterV6Schema);

