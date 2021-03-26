
// Generated typescript code of HL7v 2.7 PMT  (Payment Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PaymentInformationV7Document = mongoose.Document & HL7PaymentInformationV7I

const HL7PaymentInformationV7Schema = new mongoose.Schema({
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
  payeeBankAccountId: String,
  paymentOrganization: String,
  esrcodeline: String,
  
  }, { timestamps: true });
  
export interface HL7PaymentInformationV7I extends Segment{
  paymentRemittanceAdviceNumber: string
  paymentRemittanceEffectiveDateTime: string
  paymentRemittanceExpirationDateTime: string
  paymentMethod: string
  paymentRemittanceDateTime: string
  paymentRemittanceAmount: string
  checkNumber: string
  payeeBankIdentification: string
  payeeTransitNumber: string
  payeeBankAccountId: string
  paymentOrganization: string
  esrcodeline: string
  
  }
  export const HL7PaymentInformationV7 = mongoose.model<HL7PaymentInformationV7Document> ("HL7PaymentInformationV7", HL7PaymentInformationV7Schema);

