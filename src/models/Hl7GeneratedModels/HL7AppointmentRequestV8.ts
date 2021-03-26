
// Generated typescript code of HL7v 2.8 ARQ  (Appointment Request)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentRequestV8Document = mongoose.Document & HL7AppointmentRequestV8I

const HL7AppointmentRequestV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  placerAppointmentId: String,
  fillerAppointmentId: String,
  occurrenceNumber: Number,
  placerGroupNumber: String,
  scheduleId: String,
  requestEventReason: String,
  appointmentReason: String,
  appointmentType: String,
  appointmentDuration: Number,
  appointmentDurationUnits: String,
  requestedStartDateTimeRange: Array(String),
  priorityarq: String,
  repeatingInterval: String,
  repeatingIntervalDuration: String,
  placerContactPerson: Array(String),
  placerContactPhoneNumber: Array(String),
  placerContactAddress: Array(String),
  placerContactLocation: String,
  enteredByPerson: Array(String),
  enteredByPhoneNumber: Array(String),
  enteredByLocation: String,
  parentPlacerAppointmentId: String,
  parentFillerAppointmentId: String,
  placerOrderNumber: Array(String),
  fillerOrderNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AppointmentRequestV8I extends Segment{
  placerAppointmentId: string
  fillerAppointmentId: string
  occurrenceNumber: number
  placerGroupNumber: string
  scheduleId: string
  requestEventReason: string
  appointmentReason: string
  appointmentType: string
  appointmentDuration: number
  appointmentDurationUnits: string
  requestedStartDateTimeRange: string[]
  priorityarq: string
  repeatingInterval: string
  repeatingIntervalDuration: string
  placerContactPerson: string[]
  placerContactPhoneNumber: string[]
  placerContactAddress: string[]
  placerContactLocation: string
  enteredByPerson: string[]
  enteredByPhoneNumber: string[]
  enteredByLocation: string
  parentPlacerAppointmentId: string
  parentFillerAppointmentId: string
  placerOrderNumber: string[]
  fillerOrderNumber: string[]
  
  }
  export const HL7AppointmentRequestV8 = mongoose.model<HL7AppointmentRequestV8Document> ("HL7AppointmentRequestV8", HL7AppointmentRequestV8Schema);

