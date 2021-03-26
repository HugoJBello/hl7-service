
// Generated typescript code of HL7v 2.7 ITM  (Material Item)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialItemV7Document = mongoose.Document & HL7MaterialItemV7I

const HL7MaterialItemV7Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7MaterialItemV7I extends Segment{
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
  
  }
  export const HL7MaterialItemV7 = mongoose.model<HL7MaterialItemV7Document> ("HL7MaterialItemV7", HL7MaterialItemV7Schema);

