
// Generated typescript code of HL7v 2.7 AUT  (Authorization Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AuthorizationInformationV7Document = mongoose.Document & HL7AuthorizationInformationV7I

const HL7AuthorizationInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  authorizingPayorPlanId: String,
  authorizingPayorCompanyId: String,
  authorizingPayorCompanyName: String,
  authorizationEffectiveDate: String,
  authorizationExpirationDate: String,
  authorizationIdentifier: String,
  reimbursementLimit: String,
  requestedNumberOfTreatments: String,
  authorizedNumberOfTreatments: String,
  processDate: String,
  requestedDisciplines: Array(String),
  authorizedDisciplines: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AuthorizationInformationV7I extends Segment{
  authorizingPayorPlanId: string
  authorizingPayorCompanyId: string
  authorizingPayorCompanyName: string
  authorizationEffectiveDate: string
  authorizationExpirationDate: string
  authorizationIdentifier: string
  reimbursementLimit: string
  requestedNumberOfTreatments: string
  authorizedNumberOfTreatments: string
  processDate: string
  requestedDisciplines: string[]
  authorizedDisciplines: string[]
  
  }
  export const HL7AuthorizationInformationV7 = mongoose.model<HL7AuthorizationInformationV7Document> ("HL7AuthorizationInformationV7", HL7AuthorizationInformationV7Schema);

