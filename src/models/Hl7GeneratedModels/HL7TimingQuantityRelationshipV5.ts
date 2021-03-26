
// Generated typescript code of HL7v 2.5 TQ2  (Timing/Quantity Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TimingQuantityRelationshipV5Document = mongoose.Document & HL7TimingQuantityRelationshipV5I

const HL7TimingQuantityRelationshipV5Schema = new mongoose.Schema({
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
  
export interface HL7TimingQuantityRelationshipV5I extends Segment{
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
  export const HL7TimingQuantityRelationshipV5 = mongoose.model<HL7TimingQuantityRelationshipV5Document> ("HL7TimingQuantityRelationshipV5", HL7TimingQuantityRelationshipV5Schema);

