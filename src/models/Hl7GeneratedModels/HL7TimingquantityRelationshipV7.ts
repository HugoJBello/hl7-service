
// Generated typescript code of HL7v 2.7 TQ2  (Timing/quantity Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TimingquantityRelationshipV7Document = mongoose.Document & HL7TimingquantityRelationshipV7I

const HL7TimingquantityRelationshipV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdTq2: String,
  sequenceResultsFlag: String,
  relatedPlacerNumber: Array(String),
  relatedFillerNumber: Array(String),
  relatedPlacerGroupNumber: Array(String),
  sequenceConditionCode: String,
  cyclicEntryExitIndicator: String,
  sequenceConditionTimeInterval: String,
  cyclicGroupMaximumNumberOfRepeats: Number,
  specialServiceRequestRelationship: String,
  
  }, { timestamps: true });
  
export interface HL7TimingquantityRelationshipV7I extends Segment{
  setIdTq2: string
  sequenceResultsFlag: string
  relatedPlacerNumber: string[]
  relatedFillerNumber: string[]
  relatedPlacerGroupNumber: string[]
  sequenceConditionCode: string
  cyclicEntryExitIndicator: string
  sequenceConditionTimeInterval: string
  cyclicGroupMaximumNumberOfRepeats: number
  specialServiceRequestRelationship: string
  
  }
  export const HL7TimingquantityRelationshipV7 = mongoose.model<HL7TimingquantityRelationshipV7Document> ("HL7TimingquantityRelationshipV7", HL7TimingquantityRelationshipV7Schema);

