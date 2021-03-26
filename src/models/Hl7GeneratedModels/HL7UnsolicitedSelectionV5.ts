
// Generated typescript code of HL7v 2.5 URS  (Unsolicited Selection)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UnsolicitedSelectionV5Document = mongoose.Document & HL7UnsolicitedSelectionV5I

const HL7UnsolicitedSelectionV5Schema = new mongoose.Schema({
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
  
export interface HL7UnsolicitedSelectionV5I extends Segment{
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
  export const HL7UnsolicitedSelectionV5 = mongoose.model<HL7UnsolicitedSelectionV5Document> ("HL7UnsolicitedSelectionV5", HL7UnsolicitedSelectionV5Schema);

