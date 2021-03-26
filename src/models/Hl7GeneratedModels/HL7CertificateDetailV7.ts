
// Generated typescript code of HL7v 2.7 CER  (Certificate Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CertificateDetailV7Document = mongoose.Document & HL7CertificateDetailV7I

const HL7CertificateDetailV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdCer: String,
  serialNumber: String,
  version: String,
  grantingAuthority: String,
  issuingAuthority: String,
  signature: String,
  grantingCountry: String,
  grantingStateProvince: String,
  grantingCountyParish: String,
  certificateType: String,
  certificateDomain: String,
  subjectId: String,
  subjectName: String,
  subjectDirectoryAttributeExtension: Array(String),
  subjectPublicKeyInfo: String,
  authorityKeyIdentifier: String,
  basicConstraint: String,
  crlDistributionPoint: Array(String),
  jurisdictionCountry: String,
  jurisdictionStateProvince: String,
  jurisdictionCountyParish: String,
  jurisdictionBreadth: Array(String),
  grantingDate: String,
  issuingDate: String,
  activationDate: String,
  inactivationDate: String,
  expirationDate: String,
  renewalDate: String,
  revocationDate: String,
  revocationReasonCode: String,
  certificateStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7CertificateDetailV7I extends Segment{
  setIdCer: string
  serialNumber: string
  version: string
  grantingAuthority: string
  issuingAuthority: string
  signature: string
  grantingCountry: string
  grantingStateProvince: string
  grantingCountyParish: string
  certificateType: string
  certificateDomain: string
  subjectId: string
  subjectName: string
  subjectDirectoryAttributeExtension: string[]
  subjectPublicKeyInfo: string
  authorityKeyIdentifier: string
  basicConstraint: string
  crlDistributionPoint: string[]
  jurisdictionCountry: string
  jurisdictionStateProvince: string
  jurisdictionCountyParish: string
  jurisdictionBreadth: string[]
  grantingDate: string
  issuingDate: string
  activationDate: string
  inactivationDate: string
  expirationDate: string
  renewalDate: string
  revocationDate: string
  revocationReasonCode: string
  certificateStatusCode: string
  
  }
  export const HL7CertificateDetailV7 = mongoose.model<HL7CertificateDetailV7Document> ("HL7CertificateDetailV7", HL7CertificateDetailV7Schema);

