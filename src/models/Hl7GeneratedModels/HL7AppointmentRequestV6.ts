
// Generated typescript code of HL7v 2.6 ARQ  (Appointment Request)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentRequestV6Document = mongoose.Document & HL7AppointmentRequestV6I

const HL7AppointmentRequestV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  placerAppointmentID: String,
  fillerAppointmentID: String,
  occurrenceNumber: Number,
  placerGroupNumber: String,
  scheduleID: String,
  requestEventReason: String,
  appointmentReason: String,
  appointmentType: String,
  appointmentDuration: Number,
  appointmentDurationUnits: String,
  requestedStartDateTimeRange: Array(String),
  priorityARQ: String,
  repeatingInterval: String,
  repeatingIntervalDuration: String,
  placerContactPerson: Array(String),
  placerContactPhoneNumber: Array(String),
  placerContactAddress: Array(String),
  placerContactLocation: String,
  enteredByPerson: Array(String),
  enteredByPhoneNumber: Array(String),
  enteredByLocation: String,
  parentPlacerAppointmentID: String,
  parentFillerAppointmentID: String,
  placerOrderNumber: Array(String),
  fillerOrderNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentRequestV6I extends Segment{
  placerAppointmentID: string
  fillerAppointmentID: string
  occurrenceNumber: number
  placerGroupNumber: string
  scheduleID: string
  requestEventReason: string
  appointmentReason: string
  appointmentType: string
  appointmentDuration: number
  appointmentDurationUnits: string
  requestedStartDateTimeRange: string[]
  priorityARQ: string
  repeatingInterval: string
  repeatingIntervalDuration: string
  placerContactPerson: string[]
  placerContactPhoneNumber: string[]
  placerContactAddress: string[]
  placerContactLocation: string
  enteredByPerson: string[]
  enteredByPhoneNumber: string[]
  enteredByLocation: string
  parentPlacerAppointmentID: string
  parentFillerAppointmentID: string
  placerOrderNumber: string[]
  fillerOrderNumber: string[]
  
  }
  export const HL7AppointmentRequestV6 = mongoose.model<HL7AppointmentRequestV6Document> ("HL7AppointmentRequestV6", HL7AppointmentRequestV6Schema);

