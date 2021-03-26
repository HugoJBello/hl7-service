
// Generated typescript code of HL7v 2.6 PSL  (Product/Service Line Item)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductServiceLineItemV6Document = mongoose.Document & HL7ProductServiceLineItemV6I

const HL7ProductServiceLineItemV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerProductServiceLineItemNumber: String,
  payerProductServiceLineItemNumber: String,
  productServiceLineItemSequenceNumber: String,
  providerTrackingID: String,
  payerTrackingID: String,
  productServiceLineItemStatus: String,
  productServiceCode: String,
  productServiceCodeModifier: Array(String),
  productServiceCodeDescription: String,
  productServiceEffectiveDate: String,
  productServiceExpirationDate: String,
  productServiceQuantity: String,
  productServiceUnitCost: String,
  numberOfItemsPerUnit: Number,
  productServiceGrossAmount: String,
  productServiceBilledAmount: String,
  productServiceClarificationCodeType: Array(String),
  productServiceClarificationCodeValue: Array(String),
  healthDocumentReferenceIdentifier: Array(String),
  processingConsiderationCode: Array(String),
  restrictedDisclosureIndicator: String,
  relatedProductServiceCodeIndicator: String,
  productServiceAmountForPhysician: String,
  productServiceCostFactor: Number,
  costCenter: String,
  billingPeriod: String,
  daysWithoutBilling: Number,
  sessionNo: Number,
  executingPhysicianID: String,
  responsiblePhysicianID: String,
  roleExecutingPhysician: String,
  medicalRoleExecutingPhysician: String,
  sideOfBody: String,
  numberOfTPsPP: Number,
  tPValuePP: String,
  internalScalingFactorPP: Number,
  externalScalingFactorPP: Number,
  amountPP: String,
  numberOfTPsTechnicalPart: Number,
  tPValueTechnicalPart: String,
  internalScalingFactorTechnicalPart: Number,
  externalScalingFactorTechnicalPart: Number,
  amountTechnicalPart: String,
  totalAmountProfessionalPartTechnicalPart: String,
  vATRate: Number,
  mainService: String,
  validation: String,
  comment: String,
  
  }, { timestamps: true });
  
export interface HL7ProductServiceLineItemV6I extends Segment{
  providerProductServiceLineItemNumber: string
  payerProductServiceLineItemNumber: string
  productServiceLineItemSequenceNumber: string
  providerTrackingID: string
  payerTrackingID: string
  productServiceLineItemStatus: string
  productServiceCode: string
  productServiceCodeModifier: string[]
  productServiceCodeDescription: string
  productServiceEffectiveDate: string
  productServiceExpirationDate: string
  productServiceQuantity: string
  productServiceUnitCost: string
  numberOfItemsPerUnit: number
  productServiceGrossAmount: string
  productServiceBilledAmount: string
  productServiceClarificationCodeType: string[]
  productServiceClarificationCodeValue: string[]
  healthDocumentReferenceIdentifier: string[]
  processingConsiderationCode: string[]
  restrictedDisclosureIndicator: string
  relatedProductServiceCodeIndicator: string
  productServiceAmountForPhysician: string
  productServiceCostFactor: number
  costCenter: string
  billingPeriod: string
  daysWithoutBilling: number
  sessionNo: number
  executingPhysicianID: string
  responsiblePhysicianID: string
  roleExecutingPhysician: string
  medicalRoleExecutingPhysician: string
  sideOfBody: string
  numberOfTPsPP: number
  tPValuePP: string
  internalScalingFactorPP: number
  externalScalingFactorPP: number
  amountPP: string
  numberOfTPsTechnicalPart: number
  tPValueTechnicalPart: string
  internalScalingFactorTechnicalPart: number
  externalScalingFactorTechnicalPart: number
  amountTechnicalPart: string
  totalAmountProfessionalPartTechnicalPart: string
  vATRate: number
  mainService: string
  validation: string
  comment: string
  
  }
  export const HL7ProductServiceLineItemV6 = mongoose.model<HL7ProductServiceLineItemV6Document> ("HL7ProductServiceLineItemV6", HL7ProductServiceLineItemV6Schema);

