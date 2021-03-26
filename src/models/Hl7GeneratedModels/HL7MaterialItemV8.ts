
// Generated typescript code of HL7v 2.8 ITM  (Material Item)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialItemV8Document = mongoose.Document & HL7MaterialItemV8I

const HL7MaterialItemV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  itemIdentifier: String,
  itemDescription: String,
  itemStatus: String,
  itemType: String,
  itemCategory: String,
  subjectToExpirationIndicator: String,
  manufacturerIdentifier: String,
  manufacturerName: String,
  manufacturerCatalogNumber: String,
  manufacturerLabelerIdentificationCode: String,
  patientChargeableIndicator: String,
  transactionCode: String,
  transactionAmountUnit: String,
  stockedItemIndicator: String,
  supplyRiskCodes: String,
  approvingRegulatoryAgency: Array(String),
  latexIndicator: String,
  rulingAct: Array(String),
  itemNaturalAccountCode: String,
  approvedToBuyQuantity: Number,
  approvedToBuyPrice: String,
  taxableItemIndicator: String,
  freightChargeIndicator: String,
  itemSetIndicator: String,
  itemSetIdentifier: String,
  trackDepartmentUsageIndicator: String,
  procedureCode: String,
  procedureCodeModifier: Array(String),
  specialHandlingCode: String,
  hazardousIndicator: String,
  sterileIndicator: String,
  materialDataSafetySheetNumber: String,
  unitedNationsStandardProductsAndServicesCodeUNSPSC: String,
  
  }, { timestamps: true });
  
export interface HL7MaterialItemV8I extends Segment{
  itemIdentifier: string
  itemDescription: string
  itemStatus: string
  itemType: string
  itemCategory: string
  subjectToExpirationIndicator: string
  manufacturerIdentifier: string
  manufacturerName: string
  manufacturerCatalogNumber: string
  manufacturerLabelerIdentificationCode: string
  patientChargeableIndicator: string
  transactionCode: string
  transactionAmountUnit: string
  stockedItemIndicator: string
  supplyRiskCodes: string
  approvingRegulatoryAgency: string[]
  latexIndicator: string
  rulingAct: string[]
  itemNaturalAccountCode: string
  approvedToBuyQuantity: number
  approvedToBuyPrice: string
  taxableItemIndicator: string
  freightChargeIndicator: string
  itemSetIndicator: string
  itemSetIdentifier: string
  trackDepartmentUsageIndicator: string
  procedureCode: string
  procedureCodeModifier: string[]
  specialHandlingCode: string
  hazardousIndicator: string
  sterileIndicator: string
  materialDataSafetySheetNumber: string
  unitedNationsStandardProductsAndServicesCodeUNSPSC: string
  
  }
  export const HL7MaterialItemV8 = mongoose.model<HL7MaterialItemV8Document> ("HL7MaterialItemV8", HL7MaterialItemV8Schema);

