
// Generated typescript code of HL7v 2.8 IPR  (Invoice Processing Results)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InvoiceProcessingResultsV8Document = mongoose.Document & HL7InvoiceProcessingResultsV8I

const HL7InvoiceProcessingResultsV8Schema = new mongoose.Schema({
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
  
export interface HL7InvoiceProcessingResultsV8I extends Segment{
  iprIdentifier: string
  providerCrossReferenceIdentifier: string
  payerCrossReferenceIdentifier: string
  iprStatus: string
  iprDateTime: string
  adjudicatedPaidAmount: string
  expectedPaymentDateTime: string
  iprChecksum: string
  
  }
  export const HL7InvoiceProcessingResultsV8 = mongoose.model<HL7InvoiceProcessingResultsV8Document> ("HL7InvoiceProcessingResultsV8", HL7InvoiceProcessingResultsV8Schema);

