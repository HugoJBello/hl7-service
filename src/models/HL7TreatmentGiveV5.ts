import mongoose from "mongoose";
import { DecodedSegmentBase, Hl7Segment } from "./Segment";

export type HL7DecodedTreatmentGiveDocument = mongoose.Document & HL7DecodedTreatmentGiveV5I

const HL7DecodedTreatmentGiveSchemaV5 = new mongoose.Schema({
  segment: String,
  id: String,
  hl7version: String,

  giveSubIdCounter: String,
  dispenseSubIdCounter: String,
  quantity: String,
  giveCode: String,
  giveAmountMinimum: String,
  giveAmountMaximum: String,
  giveUnits: String,
  giveDosage: String,
  substitutionStatus: String,
  dispenseToLocation: String,
  needsHumanReview: String,
  treatmentSpecialAdminInstruction: String,
  perGiveTimeUnit: String,
  giveRateAmount: String,
  giveRateUnits: String,
  giveStrength: String,
  giveStrengthUnits: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(Date),
  substanceManufacturerName: String,
  giveDrugStrengthVolume: String,
  giveDrugStrengthVolumeUnits: String,
  giveBarcodeIdentifier: String,
  pharmacyOrderType: String,
  dispenseToPharmacy: String,
  dispenseToPharmacyAddress: String,
  deliverToPatientLocation: String,
  deliverToAddress:String,
  giveTagIdentifier: String,
  dispenseAmount: String,
  dispenseUnits: String,
}, { timestamps: true });

export interface HL7DecodedTreatmentGiveV5I extends DecodedSegmentBase{
  giveSubIdCounter: string
  dispenseSubIdCounter: string
  quantity: string
  giveCode: string
  giveAmountMinimum: string
  giveAmountMaximum: string
  giveUnits: string
  giveDosage: string
  substitutionStatus: string
  dispenseToLocation: string
  needsHumanReview: string
  treatmentSpecialAdminInstruction: string
  perGiveTimeUnit: string
  giveRateAmount: string
  giveRateUnits: string
  giveStrength: string
  giveStrengthUnits: string
  substanceLotNumber: string[]
  substanceExpirationDate: Date[]
  substanceManufacturerName: string[]
  giveDrugStrengthVolume: string
  giveDrugStrengthVolumeUnits: string
  giveBarcodeIdentifier: string
  pharmacyOrderType: string
  dispenseToPharmacy: string
  dispenseToPharmacyAddress: string
  deliverToPatientLocation: string
  deliverToAddress: string
  giveTagIdentifier: string
  dispenseAmount: string
  dispenseUnits: string

}

export const HL7DecodedTreatmentGiveV5 = mongoose.model<HL7DecodedTreatmentGiveDocument>("HL7DecodedTreatmentGive", HL7DecodedTreatmentGiveSchemaV5);