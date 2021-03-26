
// Generated typescript code of HL7v 2.3 ARQ  (Appointment Request)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AppointmentRequestV3Document = mongoose.Document & HL7AppointmentRequestV3I

const HL7AppointmentRequestV3Schema = new mongoose.Schema({
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
  priority: String,
  repeatingInterval: String,
  repeatingIntervalDuration: String,
  placerContactPerson: String,
  placerContactPhoneNumber: Array(String),
  placerContactAddress: String,
  placerContactLocation: String,
  enteredByPerson: String,
  enteredByPhoneNumber: Array(String),
  enteredByLocation: String,
  parentPlacerAppointmentID: String,
  parentFillerAppointmentID: String,
  
  }, { timestamps: true });
  
export interface HL7AppointmentRequestV3I extends Segment{
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
  priority: string
  repeatingInterval: string
  repeatingIntervalDuration: string
  placerContactPerson: string
  placerContactPhoneNumber: string[]
  placerContactAddress: string
  placerContactLocation: string
  enteredByPerson: string
  enteredByPhoneNumber: string[]
  enteredByLocation: string
  parentPlacerAppointmentID: string
  parentFillerAppointmentID: string
  
  }
  export const HL7AppointmentRequestV3 = mongoose.model<HL7AppointmentRequestV3Document> ("HL7AppointmentRequestV3", HL7AppointmentRequestV3Schema);

