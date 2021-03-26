
// Generated typescript code of HL7v 2.7 TCC  (Test Code Configuration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TestCodeConfigurationV7Document = mongoose.Document & HL7TestCodeConfigurationV7I

const HL7TestCodeConfigurationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  universalServiceIdentifier: String,
  equipmentTestApplicationIdentifier: String,
  specimenSource: String,
  autodilutionFactorDefault: String,
  rerunDilutionFactorDefault: String,
  predilutionFactorDefault: String,
  endogenousContentOfPredilutionDiluent: String,
  inventoryLimitsWarningLevel: Number,
  automaticRerunAllowed: String,
  automaticRepeatAllowed: String,
  automaticReflexAllowed: String,
  equipmentDynamicRange: String,
  units: String,
  processingType: String,
  
  }, { timestamps: true });
  
export interface HL7TestCodeConfigurationV7I extends Segment{
  universalServiceIdentifier: string
  equipmentTestApplicationIdentifier: string
  specimenSource: string
  autodilutionFactorDefault: string
  rerunDilutionFactorDefault: string
  predilutionFactorDefault: string
  endogenousContentOfPredilutionDiluent: string
  inventoryLimitsWarningLevel: number
  automaticRerunAllowed: string
  automaticRepeatAllowed: string
  automaticReflexAllowed: string
  equipmentDynamicRange: string
  units: string
  processingType: string
  
  }
  export const HL7TestCodeConfigurationV7 = mongoose.model<HL7TestCodeConfigurationV7Document> ("HL7TestCodeConfigurationV7", HL7TestCodeConfigurationV7Schema);

