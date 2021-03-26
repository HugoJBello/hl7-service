
// Generated typescript code of HL7v 2.4 TCC  (Test Code Configuration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TestCodeConfigurationV4Document = mongoose.Document & HL7TestCodeConfigurationV4I

const HL7TestCodeConfigurationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  universalServiceIdentifier: String,
  testApplicationIdentifier: String,
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
  
export interface HL7TestCodeConfigurationV4I extends Segment{
  universalServiceIdentifier: string
  testApplicationIdentifier: string
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
  export const HL7TestCodeConfigurationV4 = mongoose.model<HL7TestCodeConfigurationV4Document> ("HL7TestCodeConfigurationV4", HL7TestCodeConfigurationV4Schema);

