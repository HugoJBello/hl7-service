
// Generated typescript code of HL7v 2.5 OM1  (General Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GeneralSegmentV5Document = mongoose.Document & HL7GeneralSegmentV5I

const HL7GeneralSegmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  producersServiceTestObservationID: String,
  permittedDataTypes: Array(String),
  specimenRequired: String,
  producerID: String,
  observationDescription: String,
  otherServiceTestObservationIDsForTheObservation: String,
  otherNames: Array(String),
  preferredReportNameForTheObservation: String,
  preferredShortNameOrMnemonicForObservation: String,
  preferredLongNameForTheObservation: String,
  orderability: String,
  identityOfInstrumentUsedToPerformThisStudy: Array(String),
  codedRepresentationOfMethod: Array(String),
  portableDeviceIndicator: String,
  observationProducingDepartmentSection: Array(String),
  telephoneNumberOfSection: String,
  natureOfServiceTestObservation: String,
  reportSubheader: String,
  reportDisplayOrder: String,
  dateTimeStampForAnyChangeInDefinitionForTheObservation: Date,
  effectiveDateTimeOfChange: Date,
  typicalTurnAroundTime: Number,
  processingTime: Number,
  processingPriority: Array(String),
  reportingPriority: String,
  outsideSitesWhereObservationMayBePerformed: Array(String),
  addressOfOutsideSites: Array(String),
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
  serviceTestObservationPerformanceSchedule: Array(String),
  descriptionOfTestMethods: String,
  kindOfQuantityObserved: String,
  pointVersusInterval: String,
  challengeInformation: String,
  relationshipModifier: String,
  targetAnatomicSiteOfTest: String,
  modalityOfImagingMeasurement: String,
  
  }, { timestamps: true });
  
export interface HL7GeneralSegmentV5I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  producersServiceTestObservationID: string
  permittedDataTypes: string[]
  specimenRequired: string
  producerID: string
  observationDescription: string
  otherServiceTestObservationIDsForTheObservation: string
  otherNames: string[]
  preferredReportNameForTheObservation: string
  preferredShortNameOrMnemonicForObservation: string
  preferredLongNameForTheObservation: string
  orderability: string
  identityOfInstrumentUsedToPerformThisStudy: string[]
  codedRepresentationOfMethod: string[]
  portableDeviceIndicator: string
  observationProducingDepartmentSection: string[]
  telephoneNumberOfSection: string
  natureOfServiceTestObservation: string
  reportSubheader: string
  reportDisplayOrder: string
  dateTimeStampForAnyChangeInDefinitionForTheObservation: Date
  effectiveDateTimeOfChange: Date
  typicalTurnAroundTime: number
  processingTime: number
  processingPriority: string[]
  reportingPriority: string
  outsideSitesWhereObservationMayBePerformed: string[]
  addressOfOutsideSites: string[]
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
  serviceTestObservationPerformanceSchedule: string[]
  descriptionOfTestMethods: string
  kindOfQuantityObserved: string
  pointVersusInterval: string
  challengeInformation: string
  relationshipModifier: string
  targetAnatomicSiteOfTest: string
  modalityOfImagingMeasurement: string
  
  }
  export const HL7GeneralSegmentV5 = mongoose.model<HL7GeneralSegmentV5Document> ("HL7GeneralSegmentV5", HL7GeneralSegmentV5Schema);

