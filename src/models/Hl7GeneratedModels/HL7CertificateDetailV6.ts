
// Generated typescript code of HL7v 2.6 CER  (Certificate Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CertificateDetailV6Document = mongoose.Document & HL7CertificateDetailV6I

const HL7CertificateDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCER: String,
  serialNumber: String,
  version: String,
  grantingAuthority: String,
  issuingAuthority: String,
  signatureOfIssuingAuthority: String,
  grantingCountry: String,
  grantingStateProvince: String,
  grantingCountyParish: String,
  certificateType: String,
  certificateDomain: String,
  subjectID: String,
  subjectName: String,
  subjectDirectoryAttributeExtension: Array(String),
  subjectPublicKeyInfo: String,
  authorityKeyIdentifier: String,
  basicConstraint: String,
  cRLDistributionPoint: Array(String),
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
  
export interface HL7CertificateDetailV6I extends Segment{
  setIDCER: string
  serialNumber: string
  version: string
  grantingAuthority: string
  issuingAuthority: string
  signatureOfIssuingAuthority: string
  grantingCountry: string
  grantingStateProvince: string
  grantingCountyParish: string
  certificateType: string
  certificateDomain: string
  subjectID: string
  subjectName: string
  subjectDirectoryAttributeExtension: string[]
  subjectPublicKeyInfo: string
  authorityKeyIdentifier: string
  basicConstraint: string
  cRLDistributionPoint: string[]
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
  export const HL7CertificateDetailV6 = mongoose.model<HL7CertificateDetailV6Document> ("HL7CertificateDetailV6", HL7CertificateDetailV6Schema);

