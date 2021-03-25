export enum Hl7Segment {
  OBSERVATION ="OBX",
  MESSAGE_HEADER= "MSH",
  TREATMENT_ADMINISTRATION= "RXA",
  PATIENT_IDENTIFICATION = "PID",
  NOTE = "NTE"
}

export enum Hl7Version {
  v5 ="2.5",
  v8= "2.8"
}


export interface DecodedSegmentBase {
  hl7Segment: Hl7Segment,
  hl7version: Hl7Version,
  id: string
}