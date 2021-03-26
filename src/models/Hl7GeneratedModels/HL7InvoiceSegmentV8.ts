
// Generated typescript code of HL7v 2.8 IVC  (Invoice Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InvoiceSegmentV8Document = mongoose.Document & HL7InvoiceSegmentV8I

const HL7InvoiceSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerInvoiceNumber: String,
  payerInvoiceNumber: String,
  contractAgreementNumber: String,
  invoiceControl: String,
  invoiceReason: String,
  invoiceType: String,
  invoiceDateTime: String,
  invoiceAmount: String,
  paymentTerms: String,
  providerOrganization: String,
  payerOrganization: String,
  attention: String,
  lastInvoiceIndicator: String,
  invoiceBookingPeriod: String,
  origin: String,
  invoiceFixedAmount: String,
  specialCosts: String,
  amountForDoctorsTreatment: String,
  responsiblePhysician: String,
  costCenter: String,
  invoicePrepaidAmount: String,
  totalInvoiceAmountWithoutPrepaidAmount: String,
  totalamountOfVat: String,
  vatratesApplied: Array(Number),
  benefitGroup: String,
  providerTaxId: String,
  payerTaxId: String,
  providerTaxStatus: String,
  payerTaxStatus: String,
  salesTaxId: String,
  
  }, { timestamps: true });
  
export interface HL7InvoiceSegmentV8I extends Segment{
  providerInvoiceNumber: string
  payerInvoiceNumber: string
  contractAgreementNumber: string
  invoiceControl: string
  invoiceReason: string
  invoiceType: string
  invoiceDateTime: string
  invoiceAmount: string
  paymentTerms: string
  providerOrganization: string
  payerOrganization: string
  attention: string
  lastInvoiceIndicator: string
  invoiceBookingPeriod: string
  origin: string
  invoiceFixedAmount: string
  specialCosts: string
  amountForDoctorsTreatment: string
  responsiblePhysician: string
  costCenter: string
  invoicePrepaidAmount: string
  totalInvoiceAmountWithoutPrepaidAmount: string
  totalamountOfVat: string
  vatratesApplied: number[]
  benefitGroup: string
  providerTaxId: string
  payerTaxId: string
  providerTaxStatus: string
  payerTaxStatus: string
  salesTaxId: string
  
  }
  export const HL7InvoiceSegmentV8 = mongoose.model<HL7InvoiceSegmentV8Document> ("HL7InvoiceSegmentV8", HL7InvoiceSegmentV8Schema);

