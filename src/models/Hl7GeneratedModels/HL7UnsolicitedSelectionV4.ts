
// Generated typescript code of HL7v 2.4 URS  (Unsolicited Selection)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UnsolicitedSelectionV4Document = mongoose.Document & HL7UnsolicitedSelectionV4I

const HL7UnsolicitedSelectionV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rUWhereSubjectDefinition: Array(String),
  rUWhenDataStartDateTime: Date,
  rUWhenDataEndDateTime: Date,
  rUWhatUserQualifier: Array(String),
  rUOtherResultsSubjectDefinition: Array(String),
  rUWhichDateTimeQualifier: Array(String),
  rUWhichDateTimeStatusQualifier: Array(String),
  rUDateTimeSelectionQualifier: Array(String),
  rUQuantityTimingQualifier: String,
  
  }, { timestamps: true });
  
export interface HL7UnsolicitedSelectionV4I extends Segment{
  rUWhereSubjectDefinition: string[]
  rUWhenDataStartDateTime: Date
  rUWhenDataEndDateTime: Date
  rUWhatUserQualifier: string[]
  rUOtherResultsSubjectDefinition: string[]
  rUWhichDateTimeQualifier: string[]
  rUWhichDateTimeStatusQualifier: string[]
  rUDateTimeSelectionQualifier: string[]
  rUQuantityTimingQualifier: string
  
  }
  export const HL7UnsolicitedSelectionV4 = mongoose.model<HL7UnsolicitedSelectionV4Document> ("HL7UnsolicitedSelectionV4", HL7UnsolicitedSelectionV4Schema);

