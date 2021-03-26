
// Generated typescript code of HL7v 2.3 OM1  (General - fields that apply to most observations)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GeneralFieldsThatApplyToMostObservationsV3Document = mongoose.Document & HL7GeneralFieldsThatApplyToMostObservationsV3I

const HL7GeneralFieldsThatApplyToMostObservationsV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumber: Number,
  producersTestObservationID: String,
  permittedDataTypes: Array(String),
  specimenRequired: String,
  producerID: String,
  observationDescription: String,
  otherTestObservationIDsForTheObservation: String,
  otherNames: Array(String),
  preferredReportNameForTheObservation: String,
  preferredShortNameOrMnemonicForObservation: String,
  preferredLongNameForTheObservation: String,
  orderability: String,
  identityOfInstrumentUsedToPerfromThisStudy: Array(String),
  codedRepresentationOfMethod: Array(String),
  portable: String,
  observationProducingDepartmentSection: Array(String),
  telephoneNumberOfSection: String,
  natureOfTestObservation: String,
  reportSubheader: String,
  reportDisplayOrder: String,
  dateTimeStampForAnyChangeInDefAttriForObs: Date,
  effectiveDateTimeOfChangeInTestProcThatMakeResultsNonComparable: Date,
  typicalTurnAroundTime: Number,
  processingTime: Number,
  processingPriority: Array(String),
  reportingPriority: String,
  outsideSite: Array(String),
  addressOfOutsideSite: String,
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
  factorsThatMayEffectTheObservation: String,
  testObservationPerformanceSchedule: Array(String),
  descriptionOfTestMethods: String,
  kindOfQuantityObserved: String,
  pointVersusInterval: String,
  challengeInformation: String,
  relationshipModifier: String,
  targetAnatomicSiteOfTest: String,
  modalityOfImagingMeasurement: String,
  
  }, { timestamps: true });
  
export interface HL7GeneralFieldsThatApplyToMostObservationsV3I extends Segment{
  sequenceNumber: number
  producersTestObservationID: string
  permittedDataTypes: string[]
  specimenRequired: string
  producerID: string
  observationDescription: string
  otherTestObservationIDsForTheObservation: string
  otherNames: string[]
  preferredReportNameForTheObservation: string
  preferredShortNameOrMnemonicForObservation: string
  preferredLongNameForTheObservation: string
  orderability: string
  identityOfInstrumentUsedToPerfromThisStudy: string[]
  codedRepresentationOfMethod: string[]
  portable: string
  observationProducingDepartmentSection: string[]
  telephoneNumberOfSection: string
  natureOfTestObservation: string
  reportSubheader: string
  reportDisplayOrder: string
  dateTimeStampForAnyChangeInDefAttriForObs: Date
  effectiveDateTimeOfChangeInTestProcThatMakeResultsNonComparable: Date
  typicalTurnAroundTime: number
  processingTime: number
  processingPriority: string[]
  reportingPriority: string
  outsideSite: string[]
  addressOfOutsideSite: string
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
  factorsThatMayEffectTheObservation: string
  testObservationPerformanceSchedule: string[]
  descriptionOfTestMethods: string
  kindOfQuantityObserved: string
  pointVersusInterval: string
  challengeInformation: string
  relationshipModifier: string
  targetAnatomicSiteOfTest: string
  modalityOfImagingMeasurement: string
  
  }
  export const HL7GeneralFieldsThatApplyToMostObservationsV3 = mongoose.model<HL7GeneralFieldsThatApplyToMostObservationsV3Document> ("HL7GeneralFieldsThatApplyToMostObservationsV3", HL7GeneralFieldsThatApplyToMostObservationsV3Schema);

