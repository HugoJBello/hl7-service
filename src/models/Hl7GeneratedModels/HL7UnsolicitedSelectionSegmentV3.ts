
// Generated typescript code of HL7v 2.3 URS  (Unsolicited selection segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UnsolicitedSelectionSegmentV3Document = mongoose.Document & HL7UnsolicitedSelectionSegmentV3I

const HL7UnsolicitedSelectionSegmentV3Schema = new mongoose.Schema({
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
  
export interface HL7UnsolicitedSelectionSegmentV3I extends Segment{
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
  export const HL7UnsolicitedSelectionSegmentV3 = mongoose.model<HL7UnsolicitedSelectionSegmentV3Document> ("HL7UnsolicitedSelectionSegmentV3", HL7UnsolicitedSelectionSegmentV3Schema);

