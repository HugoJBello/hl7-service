
// Generated typescript code of HL7v 2.5 BPX  (Blood product dispense status)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductDispenseStatusV5Document = mongoose.Document & HL7BloodProductDispenseStatusV5I

const HL7BloodProductDispenseStatusV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDBPX: String,
  bPDispenseStatus: String,
  bPStatus: String,
  bPDateTimeOfStatus: Date,
  bCDonationID: String,
  bCComponent: String,
  bCDonationTypeIntendedUse: String,
  cPCommercialProduct: String,
  cPManufacturer: String,
  cPLotNumber: String,
  bPBloodGroup: String,
  bCSpecialTesting: Array(String),
  bPExpirationDateTime: Date,
  bPQuantity: Number,
  bPAmount: Number,
  bPUnits: String,
  bPUniqueID: String,
  bPActualDispensedToLocation: String,
  bPActualDispensedToAddress: String,
  bPDispensedToReceiver: String,
  bPDispensingIndividual: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductDispenseStatusV5I extends Segment{
  setIDBPX: string
  bPDispenseStatus: string
  bPStatus: string
  bPDateTimeOfStatus: Date
  bCDonationID: string
  bCComponent: string
  bCDonationTypeIntendedUse: string
  cPCommercialProduct: string
  cPManufacturer: string
  cPLotNumber: string
  bPBloodGroup: string
  bCSpecialTesting: string[]
  bPExpirationDateTime: Date
  bPQuantity: number
  bPAmount: number
  bPUnits: string
  bPUniqueID: string
  bPActualDispensedToLocation: string
  bPActualDispensedToAddress: string
  bPDispensedToReceiver: string
  bPDispensingIndividual: string
  
  }
  export const HL7BloodProductDispenseStatusV5 = mongoose.model<HL7BloodProductDispenseStatusV5Document> ("HL7BloodProductDispenseStatusV5", HL7BloodProductDispenseStatusV5Schema);

