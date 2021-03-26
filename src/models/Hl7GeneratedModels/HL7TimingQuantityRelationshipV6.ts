
// Generated typescript code of HL7v 2.6 TQ2  (Timing/Quantity Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TimingQuantityRelationshipV6Document = mongoose.Document & HL7TimingQuantityRelationshipV6I

const HL7TimingQuantityRelationshipV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDTQ2: String,
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
  
export interface HL7TimingQuantityRelationshipV6I extends Segment{
  setIDTQ2: string
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
  export const HL7TimingQuantityRelationshipV6 = mongoose.model<HL7TimingQuantityRelationshipV6Document> ("HL7TimingQuantityRelationshipV6", HL7TimingQuantityRelationshipV6Schema);

