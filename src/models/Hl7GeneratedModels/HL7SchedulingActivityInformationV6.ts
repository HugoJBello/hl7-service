
// Generated typescript code of HL7v 2.6 SCH  (Scheduling Activity Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SchedulingActivityInformationV6Document = mongoose.Document & HL7SchedulingActivityInformationV6I

const HL7SchedulingActivityInformationV6Schema = new mongoose.Schema({
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
  
export interface HL7SchedulingActivityInformationV6I extends Segment{
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
  export const HL7SchedulingActivityInformationV6 = mongoose.model<HL7SchedulingActivityInformationV6Document> ("HL7SchedulingActivityInformationV6", HL7SchedulingActivityInformationV6Schema);

