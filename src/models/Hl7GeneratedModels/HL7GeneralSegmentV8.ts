
// Generated typescript code of HL7v 2.8 OM1  (General Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GeneralSegmentV8Document = mongoose.Document & HL7GeneralSegmentV8I

const HL7GeneralSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  producersServiceTestObservationId: String,
  permittedDataTypes: Array(String),
  specimenRequired: String,
  producerId: String,
  observationDescription: String,
  otherServiceTestObservationIdsForTheObservation: String,
  otherNames: Array(String),
  preferredReportNameForTheObservation: String,
  preferredShortNameOrMnemonicForTheObservation: String,
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
  dateTimeStampForAnyChangeInDefinitionForTheObservation: String,
  effectiveDateTimeOfChange: String,
  typicalTurnaroundTime: Number,
  processingTime: Number,
  processingPriority: Array(String),
  reportingPriority: String,
  outsideSitesWhereObservationMayBePerformed: Array(String),
  addressOfOutsideSites: Array(String),
  phoneNumberOfOutsideSite: String,
  confidentialityCode: String,
  observationsRequiredToInterpretThisObservation: String,
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
  exclusiveTest: String,
  diagnosticServSectID: String,
  taxonomicClassificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7GeneralSegmentV8I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  producersServiceTestObservationId: string
  permittedDataTypes: string[]
  specimenRequired: string
  producerId: string
  observationDescription: string
  otherServiceTestObservationIdsForTheObservation: string
  otherNames: string[]
  preferredReportNameForTheObservation: string
  preferredShortNameOrMnemonicForTheObservation: string
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
  dateTimeStampForAnyChangeInDefinitionForTheObservation: string
  effectiveDateTimeOfChange: string
  typicalTurnaroundTime: number
  processingTime: number
  processingPriority: string[]
  reportingPriority: string
  outsideSitesWhereObservationMayBePerformed: string[]
  addressOfOutsideSites: string[]
  phoneNumberOfOutsideSite: string
  confidentialityCode: string
  observationsRequiredToInterpretThisObservation: string
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
  exclusiveTest: string
  diagnosticServSectID: string
  taxonomicClassificationCode: string
  
  }
  export const HL7GeneralSegmentV8 = mongoose.model<HL7GeneralSegmentV8Document> ("HL7GeneralSegmentV8", HL7GeneralSegmentV8Schema);

