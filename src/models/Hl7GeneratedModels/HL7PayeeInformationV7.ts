
// Generated typescript code of HL7v 2.7 PYE  (Payee Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PayeeInformationV7Document = mongoose.Document & HL7PayeeInformationV7I

const HL7PayeeInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPye: String,
  payeeType: String,
  payeeRelationshipToInvoicePatient: String,
  payeeIdentificationList: String,
  payeePersonName: String,
  payeeAddress: String,
  paymentMethod: String,
  
  }, { timestamps: true });
  
export interface HL7PayeeInformationV7I extends Segment{
  setIdPye: string
  payeeType: string
  payeeRelationshipToInvoicePatient: string
  payeeIdentificationList: string
  payeePersonName: string
  payeeAddress: string
  paymentMethod: string
  
  }
  export const HL7PayeeInformationV7 = mongoose.model<HL7PayeeInformationV7Document> ("HL7PayeeInformationV7", HL7PayeeInformationV7Schema);

