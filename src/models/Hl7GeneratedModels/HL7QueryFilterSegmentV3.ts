
// Generated typescript code of HL7v 2.3 QRF  (Query filter segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryFilterSegmentV3Document = mongoose.Document & HL7QueryFilterSegmentV3I

const HL7QueryFilterSegmentV3Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7QueryFilterSegmentV3I extends Segment{
  whereSubjectFilter: string[]
  whenDataStartDateTime: Date
  whenDataEndDateTime: Date
  whatUserQualifier: string[]
  otherQRYSubjectFilter: string[]
  whichDateTimeQualifier: string[]
  whichDateTimeStatusQualifier: string[]
  dateTimeSelectionQualifier: string[]
  whenQuantityTimingQualifier: string
  
  }
  export const HL7QueryFilterSegmentV3 = mongoose.model<HL7QueryFilterSegmentV3Document> ("HL7QueryFilterSegmentV3", HL7QueryFilterSegmentV3Schema);

