
// Generated typescript code of HL7v 2.6 PDA  (Patient Death and Autopsy)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientDeathAndAutopsyV6Document = mongoose.Document & HL7PatientDeathAndAutopsyV6I

const HL7PatientDeathAndAutopsyV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  deathCauseCode: Array(String),
  deathLocation: String,
  deathCertifiedIndicator: String,
  deathCertificateSignedDateTime: String,
  deathCertifiedBy: String,
  autopsyIndicator: String,
  autopsyStartAndEndDateTime: String,
  autopsyPerformedBy: String,
  coronerIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PatientDeathAndAutopsyV6I extends Segment{
  deathCauseCode: string[]
  deathLocation: string
  deathCertifiedIndicator: string
  deathCertificateSignedDateTime: string
  deathCertifiedBy: string
  autopsyIndicator: string
  autopsyStartAndEndDateTime: string
  autopsyPerformedBy: string
  coronerIndicator: string
  
  }
  export const HL7PatientDeathAndAutopsyV6 = mongoose.model<HL7PatientDeathAndAutopsyV6Document> ("HL7PatientDeathAndAutopsyV6", HL7PatientDeathAndAutopsyV6Schema);

