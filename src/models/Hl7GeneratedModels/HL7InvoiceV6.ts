
// Generated typescript code of HL7v 2.6 IVC  (Invoice)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InvoiceV6Document = mongoose.Document & HL7InvoiceV6I

const HL7InvoiceV6Schema = new mongoose.Schema({
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
  totalAmountOfVAT: String,
  vATRatesApplied: Array(Number),
  benefitGroup: String,
  providerTaxID: String,
  payerTaxID: String,
  providerTaxStatus: String,
  payerTaxStatus: String,
  salesTaxID: String,
  
  }, { timestamps: true });
  
export interface HL7InvoiceV6I extends Segment{
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
  totalAmountOfVAT: string
  vATRatesApplied: number[]
  benefitGroup: string
  providerTaxID: string
  payerTaxID: string
  providerTaxStatus: string
  payerTaxStatus: string
  salesTaxID: string
  
  }
  export const HL7InvoiceV6 = mongoose.model<HL7InvoiceV6Document> ("HL7InvoiceV6", HL7InvoiceV6Schema);

