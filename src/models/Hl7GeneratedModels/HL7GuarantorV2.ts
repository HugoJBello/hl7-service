
// Generated typescript code of HL7v 2.2 GT1  (Guarantor)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GuarantorV2Document = mongoose.Document & HL7GuarantorV2I

const HL7GuarantorV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdGuarantor: String,
  guarantorNumber: String,
  guarantorName: String,
  guarantorSpouseName: String,
  guarantorAddress: String,
  guarantorPhoneNumberHome: Array(String),
  guarantorPhoneNumberBusiness: Array(String),
  guarantorDateOfBirth: String,
  guarantorSex: String,
  guarantorType: String,
  guarantorRelationship: String,
  guarantorSocialSecurityNumber: String,
  guarantorDateBegin: String,
  guarantorDateEnd: String,
  guarantorPriority: Number,
  guarantorEmployerName: String,
  guarantorEmployerAddress: String,
  guarantorEmployPhoneNumber: Array(String),
  guarantorEmployeeIdNumber: String,
  guarantorEmploymentStatus: String,
  guarantorOrganization: String,
  
  }, { timestamps: true });
  
export interface HL7GuarantorV2I extends Segment{
  setIdGuarantor: string
  guarantorNumber: string
  guarantorName: string
  guarantorSpouseName: string
  guarantorAddress: string
  guarantorPhoneNumberHome: string[]
  guarantorPhoneNumberBusiness: string[]
  guarantorDateOfBirth: string
  guarantorSex: string
  guarantorType: string
  guarantorRelationship: string
  guarantorSocialSecurityNumber: string
  guarantorDateBegin: string
  guarantorDateEnd: string
  guarantorPriority: number
  guarantorEmployerName: string
  guarantorEmployerAddress: string
  guarantorEmployPhoneNumber: string[]
  guarantorEmployeeIdNumber: string
  guarantorEmploymentStatus: string
  guarantorOrganization: string
  
  }
  export const HL7GuarantorV2 = mongoose.model<HL7GuarantorV2Document> ("HL7GuarantorV2", HL7GuarantorV2Schema);

