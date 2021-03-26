
// Generated typescript code of HL7v 2.7 IPR  (Invoice Processing Results)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InvoiceProcessingResultsV7Document = mongoose.Document & HL7InvoiceProcessingResultsV7I

const HL7InvoiceProcessingResultsV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  iprIdentifier: String,
  providerCrossReferenceIdentifier: String,
  payerCrossReferenceIdentifier: String,
  iprStatus: String,
  iprDateTime: String,
  adjudicatedPaidAmount: String,
  expectedPaymentDateTime: String,
  iprChecksum: String,
  
  }, { timestamps: true });
  
export interface HL7InvoiceProcessingResultsV7I extends Segment{
  iprIdentifier: string
  providerCrossReferenceIdentifier: string
  payerCrossReferenceIdentifier: string
  iprStatus: string
  iprDateTime: string
  adjudicatedPaidAmount: string
  expectedPaymentDateTime: string
  iprChecksum: string
  
  }
  export const HL7InvoiceProcessingResultsV7 = mongoose.model<HL7InvoiceProcessingResultsV7Document> ("HL7InvoiceProcessingResultsV7", HL7InvoiceProcessingResultsV7Schema);

