
// Generated typescript code of HL7v 2.6 IPR  (Invoice Processing Results)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InvoiceProcessingResultsV6Document = mongoose.Document & HL7InvoiceProcessingResultsV6I

const HL7InvoiceProcessingResultsV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  iPRIdentifier: String,
  providerCrossReferenceIdentifier: String,
  payerCrossReferenceIdentifier: String,
  iPRStatus: String,
  iPRDateTime: String,
  adjudicatedPaidAmount: String,
  expectedPaymentDateTime: String,
  iPRChecksum: String,
  
  }, { timestamps: true });
  
export interface HL7InvoiceProcessingResultsV6I extends Segment{
  iPRIdentifier: string
  providerCrossReferenceIdentifier: string
  payerCrossReferenceIdentifier: string
  iPRStatus: string
  iPRDateTime: string
  adjudicatedPaidAmount: string
  expectedPaymentDateTime: string
  iPRChecksum: string
  
  }
  export const HL7InvoiceProcessingResultsV6 = mongoose.model<HL7InvoiceProcessingResultsV6Document> ("HL7InvoiceProcessingResultsV6", HL7InvoiceProcessingResultsV6Schema);

