
// Generated typescript code of HL7v 2.5 BTX  (Blood Product Transfusion/Disposition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductTransfusionDispositionV5Document = mongoose.Document & HL7BloodProductTransfusionDispositionV5I

const HL7BloodProductTransfusionDispositionV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDBTX: String,
  bCDonationID: String,
  bCComponent: String,
  bCBloodGroup: String,
  cPCommercialProduct: String,
  cPManufacturer: String,
  cPLotNumber: String,
  bPQuantity: Number,
  bPAmount: Number,
  bPUnits: String,
  bPTransfusionDispositionStatus: String,
  bPMessageStatus: String,
  bPDateTimeOfStatus: Date,
  bPAdministrator: String,
  bPVerifier: String,
  bPTransfusionStartDateTimeOfStatus: Date,
  bPTransfusionEndDateTimeOfStatus: Date,
  bPAdverseReactionType: Array(String),
  bPTransfusionInterruptedReason: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductTransfusionDispositionV5I extends Segment{
  setIDBTX: string
  bCDonationID: string
  bCComponent: string
  bCBloodGroup: string
  cPCommercialProduct: string
  cPManufacturer: string
  cPLotNumber: string
  bPQuantity: number
  bPAmount: number
  bPUnits: string
  bPTransfusionDispositionStatus: string
  bPMessageStatus: string
  bPDateTimeOfStatus: Date
  bPAdministrator: string
  bPVerifier: string
  bPTransfusionStartDateTimeOfStatus: Date
  bPTransfusionEndDateTimeOfStatus: Date
  bPAdverseReactionType: string[]
  bPTransfusionInterruptedReason: string
  
  }
  export const HL7BloodProductTransfusionDispositionV5 = mongoose.model<HL7BloodProductTransfusionDispositionV5Document> ("HL7BloodProductTransfusionDispositionV5", HL7BloodProductTransfusionDispositionV5Schema);

