
// Generated typescript code of HL7v 2.8 PCE  (Patient Charge Cost Center Exceptions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientChargeCostCenterExceptionsV8Document = mongoose.Document & HL7PatientChargeCostCenterExceptionsV8I

const HL7PatientChargeCostCenterExceptionsV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPce: String,
  costCenterAccountNumber: String,
  transactionCode: String,
  transactionAmountUnit: String,
  
  }, { timestamps: true });
  
export interface HL7PatientChargeCostCenterExceptionsV8I extends Segment{
  setIdPce: string
  costCenterAccountNumber: string
  transactionCode: string
  transactionAmountUnit: string
  
  }
  export const HL7PatientChargeCostCenterExceptionsV8 = mongoose.model<HL7PatientChargeCostCenterExceptionsV8Document> ("HL7PatientChargeCostCenterExceptionsV8", HL7PatientChargeCostCenterExceptionsV8Schema);

