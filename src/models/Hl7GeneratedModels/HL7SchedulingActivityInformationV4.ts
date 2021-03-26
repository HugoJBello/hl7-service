
// Generated typescript code of HL7v 2.4 SCH  (Scheduling Activity Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SchedulingActivityInformationV4Document = mongoose.Document & HL7SchedulingActivityInformationV4I

const HL7SchedulingActivityInformationV4Schema = new mongoose.Schema({
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
  placerContactPerson: Array(String),
  placerContactPhoneNumber: String,
  placerContactAddress: Array(String),
  placerContactLocation: String,
  fillerContactPerson: Array(String),
  fillerContactPhoneNumber: String,
  fillerContactAddress: Array(String),
  fillerContactLocation: String,
  enteredByPerson: Array(String),
  enteredByPhoneNumber: Array(String),
  enteredByLocation: String,
  parentPlacerAppointmentID: String,
  parentFillerAppointmentID: String,
  fillerStatusCode: String,
  placerOrderNumber: Array(String),
  fillerOrderNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7SchedulingActivityInformationV4I extends Segment{
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
  placerContactPerson: string[]
  placerContactPhoneNumber: string
  placerContactAddress: string[]
  placerContactLocation: string
  fillerContactPerson: string[]
  fillerContactPhoneNumber: string
  fillerContactAddress: string[]
  fillerContactLocation: string
  enteredByPerson: string[]
  enteredByPhoneNumber: string[]
  enteredByLocation: string
  parentPlacerAppointmentID: string
  parentFillerAppointmentID: string
  fillerStatusCode: string
  placerOrderNumber: string[]
  fillerOrderNumber: string[]
  
  }
  export const HL7SchedulingActivityInformationV4 = mongoose.model<HL7SchedulingActivityInformationV4Document> ("HL7SchedulingActivityInformationV4", HL7SchedulingActivityInformationV4Schema);

