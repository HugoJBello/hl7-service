
// Generated typescript code of HL7v 2.6 PMT  (Payment Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PaymentInformationV6Document = mongoose.Document & HL7PaymentInformationV6I

const HL7PaymentInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  paymentRemittanceAdviceNumber: String,
  paymentRemittanceEffectiveDateTime: String,
  paymentRemittanceExpirationDateTime: String,
  paymentMethod: String,
  paymentRemittanceDateTime: String,
  paymentRemittanceAmount: String,
  checkNumber: String,
  payeeBankIdentification: String,
  payeeTransitNumber: String,
  payeeBankAccountID: String,
  paymentOrganization: String,
  eSRCodeLine: String,
  
  }, { timestamps: true });
  
export interface HL7PaymentInformationV6I extends Segment{
  paymentRemittanceAdviceNumber: string
  paymentRemittanceEffectiveDateTime: string
  paymentRemittanceExpirationDateTime: string
  paymentMethod: string
  paymentRemittanceDateTime: string
  paymentRemittanceAmount: string
  checkNumber: string
  payeeBankIdentification: string
  payeeTransitNumber: string
  payeeBankAccountID: string
  paymentOrganization: string
  eSRCodeLine: string
  
  }
  export const HL7PaymentInformationV6 = mongoose.model<HL7PaymentInformationV6Document> ("HL7PaymentInformationV6", HL7PaymentInformationV6Schema);

