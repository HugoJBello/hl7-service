
// Generated typescript code of HL7v 2.6 REL  (Clinical Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalRelationshipV6Document = mongoose.Document & HL7ClinicalRelationshipV6I

const HL7ClinicalRelationshipV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDREL: String,
  relationshipType: String,
  thisRelationshipInstanceIdentifier: String,
  sourceInformationInstanceIdentifier: String,
  targetInformationInstanceIdentifier: String,
  assertingEntityInstanceID: String,
  assertingPerson: String,
  assertingOrganization: String,
  assertorAddress: String,
  assertorContact: String,
  assertionDateRange: String,
  negationIndicator: String,
  certaintyOfRelationship: String,
  priorityNo: Number,
  prioritySequenceNoRelPreferenceForConsideration: Number,
  separabilityIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalRelationshipV6I extends Segment{
  setIDREL: string
  relationshipType: string
  thisRelationshipInstanceIdentifier: string
  sourceInformationInstanceIdentifier: string
  targetInformationInstanceIdentifier: string
  assertingEntityInstanceID: string
  assertingPerson: string
  assertingOrganization: string
  assertorAddress: string
  assertorContact: string
  assertionDateRange: string
  negationIndicator: string
  certaintyOfRelationship: string
  priorityNo: number
  prioritySequenceNoRelPreferenceForConsideration: number
  separabilityIndicator: string
  
  }
  export const HL7ClinicalRelationshipV6 = mongoose.model<HL7ClinicalRelationshipV6Document> ("HL7ClinicalRelationshipV6", HL7ClinicalRelationshipV6Schema);

