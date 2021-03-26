
// Generated typescript code of HL7v 2.6 URS  (Unsolicited Selection)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UnsolicitedSelectionV6Document = mongoose.Document & HL7UnsolicitedSelectionV6I

const HL7UnsolicitedSelectionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rUWhereSubjectDefinition: Array(String),
  rUWhenDataStartDateTime: String,
  rUWhenDataEndDateTime: String,
  rUWhatUserQualifier: Array(String),
  rUOtherResultsSubjectDefinition: Array(String),
  rUWhichDateTimeQualifier: Array(String),
  rUWhichDateTimeStatusQualifier: Array(String),
  rUDateTimeSelectionQualifier: Array(String),
  rUQuantityTimingQualifier: String,
  
  }, { timestamps: true });
  
export interface HL7UnsolicitedSelectionV6I extends Segment{
  rUWhereSubjectDefinition: string[]
  rUWhenDataStartDateTime: string
  rUWhenDataEndDateTime: string
  rUWhatUserQualifier: string[]
  rUOtherResultsSubjectDefinition: string[]
  rUWhichDateTimeQualifier: string[]
  rUWhichDateTimeStatusQualifier: string[]
  rUDateTimeSelectionQualifier: string[]
  rUQuantityTimingQualifier: string
  
  }
  export const HL7UnsolicitedSelectionV6 = mongoose.model<HL7UnsolicitedSelectionV6Document> ("HL7UnsolicitedSelectionV6", HL7UnsolicitedSelectionV6Schema);

