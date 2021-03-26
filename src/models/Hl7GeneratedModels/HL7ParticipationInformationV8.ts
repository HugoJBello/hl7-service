
// Generated typescript code of HL7v 2.8 PRT  (Participation Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ParticipationInformationV8Document = mongoose.Document & HL7ParticipationInformationV8I

const HL7ParticipationInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  participationInstanceId: String,
  actionCode: String,
  actionReason: String,
  participation: String,
  participationPerson: Array(String),
  participationPersonProviderType: String,
  participantOrganizationUnitType: String,
  participationOrganization: Array(String),
  participantLocation: Array(String),
  participationDevice: Array(String),
  participationBeginDateTimeArrivalTime: String,
  participationEndDateTimeDepartureTime: String,
  participationQualitativeDuration: String,
  participationAddress: Array(String),
  participantTelecommunicationAddress: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ParticipationInformationV8I extends Segment{
  participationInstanceId: string
  actionCode: string
  actionReason: string
  participation: string
  participationPerson: string[]
  participationPersonProviderType: string
  participantOrganizationUnitType: string
  participationOrganization: string[]
  participantLocation: string[]
  participationDevice: string[]
  participationBeginDateTimeArrivalTime: string
  participationEndDateTimeDepartureTime: string
  participationQualitativeDuration: string
  participationAddress: string[]
  participantTelecommunicationAddress: string[]
  
  }
  export const HL7ParticipationInformationV8 = mongoose.model<HL7ParticipationInformationV8Document> ("HL7ParticipationInformationV8", HL7ParticipationInformationV8Schema);

