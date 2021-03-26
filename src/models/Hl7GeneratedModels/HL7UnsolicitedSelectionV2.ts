
// Generated typescript code of HL7v 2.2 URS  (Unsolicited Selection)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UnsolicitedSelectionV2Document = mongoose.Document & HL7UnsolicitedSelectionV2I

const HL7UnsolicitedSelectionV2Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7UnsolicitedSelectionV2I extends Segment{
  rUWhereSubjectDefinition: string[]
  rUWhenDataStartDateTime: Date
  rUWhenDataEndDateTime: Date
  rUWhatUserQualifier: string[]
  rUOtherResultsSubjectDefinition: string[]
  rUWhichDateTimeQualifier: string[]
  rUWhichDateTimeStatusQualifier: string[]
  rUDateTimeSelectionQualifier: string[]
  
  }
  export const HL7UnsolicitedSelectionV2 = mongoose.model<HL7UnsolicitedSelectionV2Document> ("HL7UnsolicitedSelectionV2", HL7UnsolicitedSelectionV2Schema);

