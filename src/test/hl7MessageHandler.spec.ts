import { extracHl7Version, messageHandler } from "../tcpHl7Handlers/hl7MessageHandler";
import { separateSegmentPart } from "../managers/payloadMessageManager";

const example = "MSH|^~&|LCS|LCA|LIS|TEST9999|199807311532||ORU^R01|3630|P|2.2\n" +
  "OBX|1|CWE|625-4^Bacteria identified in Stool by Culture^LN^^^^2.33^^result1|1|27268008^Salmonella^SCT^^^^20090731^^Salmonella species|||A^A^HL70078^^^^2.5|||P|||20120301|||^^^^^^^^Bacterial Culture||201203140957||||State Hygienic Laboratory^L^^^^IA Public Health Lab&2.16.840.1.114222.4.1.10411&ISO^FI^^^16D0648109|State Hygienic Laboratory^UIResearch Park -Coralville^Iowa City^IA^52242-5002^USA^B^^19103|^Atchison^Christopher^^^^^^^L"




describe("Hl7 message handler", () => {
  it("hl7 version should be detectedr", () => {
    const lines = separateSegmentPart(example)
    const result = extracHl7Version(lines)
    console.log(result)
    expect(result).toBe("2.2")

  });

    it("hl7 message handler", () => {
      const result = messageHandler(example)
      console.log(result)
      const obx = result.filter(item => item.hl7Segment === "OBX")

    });
});
