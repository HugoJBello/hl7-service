
// Generated typescript code of HL7v 2.6 TCC  (Test Code Configuration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TestCodeConfigurationV6Document = mongoose.Document & HL7TestCodeConfigurationV6I

const HL7TestCodeConfigurationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  universalServiceIdentifier: String,
  equipmentTestApplicationIdentifier: String,
  specimenSource: String,
  autoDilutionFactorDefault: String,
  rerunDilutionFactorDefault: String,
  preDilutionFactorDefault: String,
  endogenousContentOfPreDilutionDiluent: String,
  inventoryLimitsWarningLevel: Number,
  automaticRerunAllowed: String,
  automaticRepeatAllowed: String,
  automaticReflexAllowed: String,
  equipmentDynamicRange: String,
  units: String,
  processingType: String,
  
  }, { timestamps: true });
  
export interface HL7TestCodeConfigurationV6I extends Segment{
  universalServiceIdentifier: string
  equipmentTestApplicationIdentifier: string
  specimenSource: string
  autoDilutionFactorDefault: string
  rerunDilutionFactorDefault: string
  preDilutionFactorDefault: string
  endogenousContentOfPreDilutionDiluent: string
  inventoryLimitsWarningLevel: number
  automaticRerunAllowed: string
  automaticRepeatAllowed: string
  automaticReflexAllowed: string
  equipmentDynamicRange: string
  units: string
  processingType: string
  
  }
  export const HL7TestCodeConfigurationV6 = mongoose.model<HL7TestCodeConfigurationV6Document> ("HL7TestCodeConfigurationV6", HL7TestCodeConfigurationV6Schema);

