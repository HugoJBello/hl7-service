
// Generated typescript code of HL7v 2.3 SCH  (Schedule Activity Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ScheduleActivityInformationV3Document = mongoose.Document & HL7ScheduleActivityInformationV3I

const HL7ScheduleActivityInformationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  placerAppointmentID: String,
  fillerAppointmentID: String,
  occurrenceNumber: Number,
  placerGroupNumber: String,
  scheduleID: String,
  eventReason: String,
  appointmentReason: String,
  appointmentType: String,
  appointmentDuration: Number,
  appointmentDurationUnits: String,
  appointmentTimingQuantity: Array(String),
  placerContactPerson: String,
  placerContactPhoneNumber: String,
  placerContactAddress: String,
  placerContactLocation: String,
  fillerContactPerson: String,
  fillerContactPhoneNumber: String,
  fillerContactAddress: String,
  fillerContactLocation: String,
  enteredByPerson: String,
  enteredByPhoneNumber: Array(String),
  enteredByLocation: String,
  parentPlacerAppointmentID: String,
  parentFillerAppointmentID: String,
  fillerStatusCode: String,
  
  }, { timestamps: true });
  
export interface HL7ScheduleActivityInformationV3I extends Segment{
  placerAppointmentID: string
  fillerAppointmentID: string
  occurrenceNumber: number
  placerGroupNumber: string
  scheduleID: string
  eventReason: string
  appointmentReason: string
  appointmentType: string
  appointmentDuration: number
  appointmentDurationUnits: string
  appointmentTimingQuantity: string[]
  placerContactPerson: string
  placerContactPhoneNumber: string
  placerContactAddress: string
  placerContactLocation: string
  fillerContactPerson: string
  fillerContactPhoneNumber: string
  fillerContactAddress: string
  fillerContactLocation: string
  enteredByPerson: string
  enteredByPhoneNumber: string[]
  enteredByLocation: string
  parentPlacerAppointmentID: string
  parentFillerAppointmentID: string
  fillerStatusCode: string
  
  }
  export const HL7ScheduleActivityInformationV3 = mongoose.model<HL7ScheduleActivityInformationV3Document> ("HL7ScheduleActivityInformationV3", HL7ScheduleActivityInformationV3Schema);

