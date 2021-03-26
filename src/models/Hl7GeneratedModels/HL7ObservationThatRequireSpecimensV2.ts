
// Generated typescript code of HL7v 2.2 OM4  (Observation That Require Specimens)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationThatRequireSpecimensV2Document = mongoose.Document & HL7ObservationThatRequireSpecimensV2I

const HL7ObservationThatRequireSpecimensV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  segmentTypeId: String,
  sequenceNumberTestObservationMasterFile: Number,
  derivedSpecimen: String,
  containerDescription: String,
  containerVolume: Number,
  containerUnits: String,
  specimen: String,
  additive: String,
  preparation: String,
  specialHandlingRequirements: String,
  normalCollectionVolume: String,
  minimumCollectionVolume: String,
  specimenRequirements: String,
  specimenPriorities: Array(String),
  specimenRetentionTime: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationThatRequireSpecimensV2I extends Segment{
  segmentTypeId: string
  sequenceNumberTestObservationMasterFile: number
  derivedSpecimen: string
  containerDescription: string
  containerVolume: number
  containerUnits: string
  specimen: string
  additive: string
  preparation: string
  specialHandlingRequirements: string
  normalCollectionVolume: string
  minimumCollectionVolume: string
  specimenRequirements: string
  specimenPriorities: string[]
  specimenRetentionTime: string
  
  }
  export const HL7ObservationThatRequireSpecimensV2 = mongoose.model<HL7ObservationThatRequireSpecimensV2Document> ("HL7ObservationThatRequireSpecimensV2", HL7ObservationThatRequireSpecimensV2Schema);

