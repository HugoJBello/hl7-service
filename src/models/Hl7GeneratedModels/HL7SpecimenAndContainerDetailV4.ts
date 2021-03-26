
// Generated typescript code of HL7v 2.4 SAC  (Specimen and container detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SpecimenAndContainerDetailV4Document = mongoose.Document & HL7SpecimenAndContainerDetailV4I

const HL7SpecimenAndContainerDetailV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  externalAccessionIdentifier: String,
  accessionIdentifier: String,
  containerIdentifier: String,
  primary: String,
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
  availableVolume: Number,
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
  specialHandlingConsiderations: Array(String),
  otherEnvironmentalFactors: Array(String),
  
  }, { timestamps: true });
  
export interface HL7SpecimenAndContainerDetailV4I extends Segment{
  externalAccessionIdentifier: string
  accessionIdentifier: string
  containerIdentifier: string
  primary: string
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
  availableVolume: number
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
  specialHandlingConsiderations: string[]
  otherEnvironmentalFactors: string[]
  
  }
  export const HL7SpecimenAndContainerDetailV4 = mongoose.model<HL7SpecimenAndContainerDetailV4Document> ("HL7SpecimenAndContainerDetailV4", HL7SpecimenAndContainerDetailV4Schema);

