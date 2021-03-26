
// Generated typescript code of HL7v 2.6 CDM  (Charge Description Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ChargeDescriptionMasterV6Document = mongoose.Document & HL7ChargeDescriptionMasterV6I

const HL7ChargeDescriptionMasterV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueCDM: String,
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
  contractOrganization: Array(String),
  roomFeeIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7ChargeDescriptionMasterV6I extends Segment{
  primaryKeyValueCDM: string
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
  contractOrganization: string[]
  roomFeeIndicator: string
  
  }
  export const HL7ChargeDescriptionMasterV6 = mongoose.model<HL7ChargeDescriptionMasterV6Document> ("HL7ChargeDescriptionMasterV6", HL7ChargeDescriptionMasterV6Schema);

