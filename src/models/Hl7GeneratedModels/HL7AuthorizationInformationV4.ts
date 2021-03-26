
// Generated typescript code of HL7v 2.4 AUT  (Authorization Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AuthorizationInformationV4Document = mongoose.Document & HL7AuthorizationInformationV4I

const HL7AuthorizationInformationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  authorizingPayorPlanID: String,
  authorizingPayorCompanyID: String,
  authorizingPayorCompanyName: String,
  authorizationEffectiveDate: Date,
  authorizationExpirationDate: Date,
  authorizationIdentifier: String,
  reimbursementLimit: String,
  requestedNumberOfTreatments: Number,
  authorizedNumberOfTreatments: Number,
  processDate: Date,
  
  }, { timestamps: true });
  
export interface HL7AuthorizationInformationV4I extends Segment{
  authorizingPayorPlanID: string
  authorizingPayorCompanyID: string
  authorizingPayorCompanyName: string
  authorizationEffectiveDate: Date
  authorizationExpirationDate: Date
  authorizationIdentifier: string
  reimbursementLimit: string
  requestedNumberOfTreatments: number
  authorizedNumberOfTreatments: number
  processDate: Date
  
  }
  export const HL7AuthorizationInformationV4 = mongoose.model<HL7AuthorizationInformationV4Document> ("HL7AuthorizationInformationV4", HL7AuthorizationInformationV4Schema);

