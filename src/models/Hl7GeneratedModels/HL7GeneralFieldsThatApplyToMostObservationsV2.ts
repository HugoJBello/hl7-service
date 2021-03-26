
// Generated typescript code of HL7v 2.2 OM1  (General - Fields That Apply To Most Observations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GeneralFieldsThatApplyToMostObservationsV2Document = mongoose.Document & HL7GeneralFieldsThatApplyToMostObservationsV2I

const HL7GeneralFieldsThatApplyToMostObservationsV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  segmentTypeId: String,
  sequenceNumberTestObservationMasterFile: Number,
  producersTestObservationId: String,
  permittedDataTypes: Array(String),
  specimenRequired: String,
  producerId: String,
  observationDescription: String,
  otherTestObservationIdsForTheObservation: String,
  otherNames: Array(String),
  preferredReportNameForTheObservation: String,
  preferredShortNameOrMnemonicForObservation: String,
  preferredLongNameForTheObservation: String,
  orderability: String,
  identityOfInstrumentUsedToPerformThisStudy: Array(String),
  codedRepresentationOfMethod: Array(String),
  portable: String,
  observationProducingDepartmentSection: Array(String),
  telephoneNumberOfSection: String,
  natureOfTestObservation: String,
  reportSubheader: String,
  reportDisplayOrder: String,
  dateTimeStampForAnyChangeInDefinitionForObs: Date,
  effectiveDateTimeOfChange: Date,
  typicalTurnaroundTime: Number,
  processingTime: Number,
  processingPriority: Array(String),
  reportingPriority: String,
  outsideSitesWhereObservationMayBePerformed: Array(String),
  addressOfOutsideSites: String,
  phoneNumberOfOutsideSite: String,
  confidentialityCode: String,
  observationsRequiredToInterpretTheObservation: String,
  interpretationOfObservations: String,
  contraindicationsToObservations: String,
  reflexTestsObservations: Array(String),
  rulesThatTriggerReflexTesting: String,
  fixedCannedMessage: String,
  patientPreparation: String,
  procedureMedication: String,
  factorsThatMayAffectTheObservation: String,
  testObservationPerformanceSchedule: Array(String),
  descriptionOfTestMethods: String,
  
  }, { timestamps: true });
  
export interface HL7GeneralFieldsThatApplyToMostObservationsV2I extends Segment{
  segmentTypeId: string
  sequenceNumberTestObservationMasterFile: number
  producersTestObservationId: string
  permittedDataTypes: string[]
  specimenRequired: string
  producerId: string
  observationDescription: string
  otherTestObservationIdsForTheObservation: string
  otherNames: string[]
  preferredReportNameForTheObservation: string
  preferredShortNameOrMnemonicForObservation: string
  preferredLongNameForTheObservation: string
  orderability: string
  identityOfInstrumentUsedToPerformThisStudy: string[]
  codedRepresentationOfMethod: string[]
  portable: string
  observationProducingDepartmentSection: string[]
  telephoneNumberOfSection: string
  natureOfTestObservation: string
  reportSubheader: string
  reportDisplayOrder: string
  dateTimeStampForAnyChangeInDefinitionForObs: Date
  effectiveDateTimeOfChange: Date
  typicalTurnaroundTime: number
  processingTime: number
  processingPriority: string[]
  reportingPriority: string
  outsideSitesWhereObservationMayBePerformed: string[]
  addressOfOutsideSites: string
  phoneNumberOfOutsideSite: string
  confidentialityCode: string
  observationsRequiredToInterpretTheObservation: string
  interpretationOfObservations: string
  contraindicationsToObservations: string
  reflexTestsObservations: string[]
  rulesThatTriggerReflexTesting: string
  fixedCannedMessage: string
  patientPreparation: string
  procedureMedication: string
  factorsThatMayAffectTheObservation: string
  testObservationPerformanceSchedule: string[]
  descriptionOfTestMethods: string
  
  }
  export const HL7GeneralFieldsThatApplyToMostObservationsV2 = mongoose.model<HL7GeneralFieldsThatApplyToMostObservationsV2Document> ("HL7GeneralFieldsThatApplyToMostObservationsV2", HL7GeneralFieldsThatApplyToMostObservationsV2Schema);

