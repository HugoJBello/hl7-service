
// Generated typescript code of HL7v 2.5 CER  (Certificate Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CertificateDetailV5Document = mongoose.Document & HL7CertificateDetailV5I

const HL7CertificateDetailV5Schema = new mongoose.Schema({
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
  subjectDirectoryAttributeExtensionHealthProfessionalData: Array(String),
  subjectPublicKeyInfo: String,
  authorityKeyIdentifier: String,
  basicConstraint: String,
  cRLDistributionPoint: Array(String),
  jurisdictionCountry: String,
  jurisdictionStateProvince: String,
  jurisdictionCountyParish: String,
  jurisdictionBreadth: Array(String),
  grantingDate: Date,
  issuingDate: Date,
  activationDate: Date,
  inactivationDate: Date,
  expirationDate: Date,
  renewalDate: Date,
  revocationDate: Date,
  revocationReasonCode: String,
  certificateStatus: String,
  
  }, { timestamps: true });
  
export interface HL7CertificateDetailV5I extends Segment{
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
  subjectDirectoryAttributeExtensionHealthProfessionalData: string[]
  subjectPublicKeyInfo: string
  authorityKeyIdentifier: string
  basicConstraint: string
  cRLDistributionPoint: string[]
  jurisdictionCountry: string
  jurisdictionStateProvince: string
  jurisdictionCountyParish: string
  jurisdictionBreadth: string[]
  grantingDate: Date
  issuingDate: Date
  activationDate: Date
  inactivationDate: Date
  expirationDate: Date
  renewalDate: Date
  revocationDate: Date
  revocationReasonCode: string
  certificateStatus: string
  
  }
  export const HL7CertificateDetailV5 = mongoose.model<HL7CertificateDetailV5Document> ("HL7CertificateDetailV5", HL7CertificateDetailV5Schema);

