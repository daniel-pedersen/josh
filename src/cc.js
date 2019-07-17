const cc = module.exports = {
  NUL: '\u0000', // Null
  SOH: '\u0001', // Start of Heading
  STX: '\u0002', // Start of Text
  ETX: '\u0003', // End of Text
  EOT: '\u0004', // End of Transmission
  ENQ: '\u0005', // Enquiry
  ACK: '\u0006', // Acknowledge
  BEL: '\u0007', // Alert
  BS: '\u0008', // Backspace
  HT: '\u0009', // Character Tabulation
  LF: '\u000A', // End of Line
  VT: '\u000B', // Line Tabulation
  FF: '\u000C', // Form Feed
  CR: '\u000D', // Carriage Return
  SO: '\u000E', // Locking-Shift One
  SI: '\u000F', // Locking-Shift Zero
  DLE: '\u0010', // Data Link Escape
  DC1: '\u0011', // Device Control One
  DC2: '\u0012', // Device Control Two
  DC3: '\u0013', // Device Control Three
  DC4: '\u0014', // Device Control Four
  NAK: '\u0015', // Negative Acknowledge
  SYN: '\u0016', // Synchronous Idle
  ETB: '\u0017', // End of Transmission Block
  CAN: '\u0018', // Cancel
  EOM: '\u0019', // End of Medium
  SUB: '\u001A', // Substitute
  ESC: '\u001B', // Escape
  FS: '\u001C', // File Separator
  GS: '\u001D', // Group Separator
  RS: '\u001E', // Information Separator Two
  US: '\u001F', // Information Separator One
  DEL: '\u007F', // Delete
  PAD: '\u0080', // Padding Character
  HOP: '\u0081', // High Octet Preset
  BPH: '\u0082', // Break Permitted Here
  NBH: '\u0083', // No Break Here
  IND: '\u0084', // Index
  NEL: '\u0085', // Next Line
  SSA: '\u0086', // Start of Selected Area
  ESA: '\u0087', // End of Selected Area
  HTS: '\u0088', // Character Tabulation Set
  HTJ: '\u0089', // Character Tabulation with Justification
  VTS: '\u008A', // Line Tabulation Set
  PLD: '\u008B', // Partial Line Down
  PLU: '\u008C', // Partial Line Backward
  RI: '\u008D', // Reverse Index
  SS2: '\u008E', // Single Shift Two
  SS3: '\u008F', // Single Shift Three
  DCS: '\u0090', // Device Control String
  PU1: '\u0091', // Private Use One
  PU2: '\u0092', // Private Use Two
  STS: '\u0093', // Set Transmit State
  CCH: '\u0094', // Cancel Character
  MW: '\u0095', // Message Waiting
  SPA: '\u0096', // Start of Guarded Area
  EPA: '\u0097', // End of Guarded Area
  SOS: '\u0098', // Start of String
  SGC: '\u0099', // Single Graphic Character Introducer
  SCI: '\u009A', // Single Character Introducer
  CSI: '\u009B', // Control Sequence Introducer
  ST: '\u009C', // String Terminator
  OSC: '\u009D', // Operating System Command
  PM: '\u009E', // Privacy Message
  APC: '\u009F' // Application Program Command
}

const ccStr = Object.values(cc).join('')
cc.isControl = s => ccStr.includes(s[0])
