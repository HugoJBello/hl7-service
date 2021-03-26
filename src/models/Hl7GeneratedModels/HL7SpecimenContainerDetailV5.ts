
// Generated typescript code of HL7v 2.5 SAC  (Specimen Container detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SpecimenContainerDetailV5Document = mongoose.Document & HL7SpecimenContainerDetailV5I

const HL7SpecimenContainerDetailV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  externalAccessionIdentifier: String,
  accessionIdentifier: String,
  containerIdentifier: String,
  primaryParentContainerIdentifier: String,
  equipmentContainerIdentifier: String,
  specimenSource: String,
  registrationDateTime: Date,
  containerStatus: String,
  carrierType: String,
  carrierIdentifier: String,
  positionInCarrier: String,
  trayTypeSAC: String,
  trayIdentifier: String,
  positionInTray: String,
  location: Array(String),
  containerHeight: Number,
  containerDiameter: Number,
  barrierDelta: Number,
  bottomDelta: Number,
  containerHeightDiameterDeltaUnits: String,
  containerVolume: Number,
  availableSpecimenVolume: Number,
  initialSpecimenVolume: Number,
  volumeUnits: String,
  separatorType: String,
  capType: String,
  additive: Array(String),
  specimenComponent: String,
  dilutionFactor: String,
  treatment: String,
  temperature: String,
  hemolysisIndex: Number,
  hemolysisIndexUnits: String,
  lipemiaIndex: Number,
  lipemiaIndexUnits: String,
  icterusIndex: Number,
  icterusIndexUnits: String,
  fibrinIndex: Number,
  fibrinIndexUnits: String,
  systemInducedContaminants: Array(String),
  drugInterference: Array(String),
  artificialBlood: String,
  specialHandlingCode: Array(String),
  otherEnvironmentalFactors: Array(String),
  
  }, { timestamps: true });
  
export interface HL7SpecimenContainerDetailV5I extends Segment{
  externalAccessionIdentifier: string
  accessionIdentifier: string
  containerIdentifier: string
  primaryParentContainerIdentifier: string
  equipmentContainerIdentifier: string
  specimenSource: string
  registrationDateTime: Date
  containerStatus: string
  carrierType: string
  carrierIdentifier: string
  positionInCarrier: string
  trayTypeSAC: string
  trayIdentifier: string
  positionInTray: string
  location: string[]
  containerHeight: number
  containerDiameter: number
  barrierDelta: number
  bottomDelta: number
  containerHeightDiameterDeltaUnits: string
  containerVolume: number
  availableSpecimenVolume: number
  initialSpecimenVolume: number
  volumeUnits: string
  separatorType: string
  capType: string
  additive: string[]
  specimenComponent: string
  dilutionFactor: string
  treatment: string
  temperature: string
  hemolysisIndex: number
  hemolysisIndexUnits: string
  lipemiaIndex: number
  lipemiaIndexUnits: string
  icterusIndex: number
  icterusIndexUnits: string
  fibrinIndex: number
  fibrinIndexUnits: string
  systemInducedContaminants: string[]
  drugInterference: string[]
  artificialBlood: string
  specialHandlingCode: string[]
  otherEnvironmentalFactors: string[]
  
  }
  export const HL7SpecimenContainerDetailV5 = mongoose.model<HL7SpecimenContainerDetailV5Document> ("HL7SpecimenContainerDetailV5", HL7SpecimenContainerDetailV5Schema);

