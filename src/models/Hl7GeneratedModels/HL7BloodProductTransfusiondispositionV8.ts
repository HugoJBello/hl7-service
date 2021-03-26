
// Generated typescript code of HL7v 2.8 BTX  (Blood Product Transfusion/disposition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductTransfusiondispositionV8Document = mongoose.Document & HL7BloodProductTransfusiondispositionV8I

const HL7BloodProductTransfusiondispositionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdBtx: String,
  bcDonationId: String,
  bcComponent: String,
  bcBloodGroup: String,
  cpCommercialProduct: String,
  cpManufacturer: String,
  cpLotNumber: String,
  bpQuantity: Number,
  bpAmount: Number,
  bpUnits: String,
  bpTransfusionDispositionStatus: String,
  bpMessageStatus: String,
  bpDateTimeOfStatus: String,
  bpTransfusionAdministrator: String,
  bpTransfusionVerifier: String,
  bpTransfusionStartDateTimeOfStatus: String,
  bpTransfusionEndDateTimeOfStatus: String,
  bpAdverseReactionType: Array(String),
  bpTransfusionInterruptedReason: String,
  bPUniqueID: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductTransfusiondispositionV8I extends Segment{
  setIdBtx: string
  bcDonationId: string
  bcComponent: string
  bcBloodGroup: string
  cpCommercialProduct: string
  cpManufacturer: string
  cpLotNumber: string
  bpQuantity: number
  bpAmount: number
  bpUnits: string
  bpTransfusionDispositionStatus: string
  bpMessageStatus: string
  bpDateTimeOfStatus: string
  bpTransfusionAdministrator: string
  bpTransfusionVerifier: string
  bpTransfusionStartDateTimeOfStatus: string
  bpTransfusionEndDateTimeOfStatus: string
  bpAdverseReactionType: string[]
  bpTransfusionInterruptedReason: string
  bPUniqueID: string
  
  }
  export const HL7BloodProductTransfusiondispositionV8 = mongoose.model<HL7BloodProductTransfusiondispositionV8Document> ("HL7BloodProductTransfusiondispositionV8", HL7BloodProductTransfusiondispositionV8Schema);

