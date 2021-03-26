
// Generated typescript code of HL7v 2.3 CDM  (Charge Description Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ChargeDescriptionMasterV3Document = mongoose.Document & HL7ChargeDescriptionMasterV3I

const HL7ChargeDescriptionMasterV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValue: String,
  chargeCodeAlias: Array(String),
  chargeDescriptionShort: String,
  chargeDescriptionLong: String,
  descriptionOverrideIndicator: String,
  explodingCharges: Array(String),
  procedureCode: Array(String),
  activeInactiveFlag: String,
  inventoryNumber: Array(String),
  resourceLoad: Number,
  contractNumber: Array(String),
  contractOrganization: String,
  roomFeeIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7ChargeDescriptionMasterV3I extends Segment{
  primaryKeyValue: string
  chargeCodeAlias: string[]
  chargeDescriptionShort: string
  chargeDescriptionLong: string
  descriptionOverrideIndicator: string
  explodingCharges: string[]
  procedureCode: string[]
  activeInactiveFlag: string
  inventoryNumber: string[]
  resourceLoad: number
  contractNumber: string[]
  contractOrganization: string
  roomFeeIndicator: string
  
  }
  export const HL7ChargeDescriptionMasterV3 = mongoose.model<HL7ChargeDescriptionMasterV3Document> ("HL7ChargeDescriptionMasterV3", HL7ChargeDescriptionMasterV3Schema);

