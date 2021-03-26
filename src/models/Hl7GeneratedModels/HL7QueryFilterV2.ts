
// Generated typescript code of HL7v 2.2 QRF  (Query Filter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryFilterV2Document = mongoose.Document & HL7QueryFilterV2I

const HL7QueryFilterV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whereSubjectFilter: Array(String),
  whenDataStartDateTime: Date,
  whenDataEndDateTime: Date,
  whatUserQualifier: Array(String),
  otherQrySubjectFilter: Array(String),
  whichDateTimeQualifier: Array(String),
  whichDateTimeStatusQualifier: Array(String),
  dateTimeSelectionQualifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7QueryFilterV2I extends Segment{
  whereSubjectFilter: string[]
  whenDataStartDateTime: Date
  whenDataEndDateTime: Date
  whatUserQualifier: string[]
  otherQrySubjectFilter: string[]
  whichDateTimeQualifier: string[]
  whichDateTimeStatusQualifier: string[]
  dateTimeSelectionQualifier: string[]
  
  }
  export const HL7QueryFilterV2 = mongoose.model<HL7QueryFilterV2Document> ("HL7QueryFilterV2", HL7QueryFilterV2Schema);

