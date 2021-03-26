
// Generated typescript code of HL7v 2.8 PYE  (Payee Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PayeeInformationV8Document = mongoose.Document & HL7PayeeInformationV8I

const HL7PayeeInformationV8Schema = new mongoose.Schema({
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
  
export interface HL7PayeeInformationV8I extends Segment{
  setIdPye: string
  payeeType: string
  payeeRelationshipToInvoicePatient: string
  payeeIdentificationList: string
  payeePersonName: string
  payeeAddress: string
  paymentMethod: string
  
  }
  export const HL7PayeeInformationV8 = mongoose.model<HL7PayeeInformationV8Document> ("HL7PayeeInformationV8", HL7PayeeInformationV8Schema);

