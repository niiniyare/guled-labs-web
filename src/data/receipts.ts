// Sample receipts used by the printer demo. Prices are illustrative.
// Each line can carry a `note`: what the system did behind that line.
import type { IndustryKey } from '../config/site';

export type ReceiptRow =
  | { kind: 'head' | 'sub'; text: string }
  | { kind: 'rule' }
  | { kind: 'line' | 'total'; left: string; right: string; note?: string; tone?: 'industry' | 'ok' | 'signal' }
  | { kind: 'etims'; note?: string };

export const receipts: Record<IndustryKey, { label: string; rows: ReceiptRow[] }> = {
  fuel: {
    label: 'Fuel station',
    rows: [
      { kind: 'head', text: 'HIGHWAY SERVICE STATION' },
      { kind: 'sub', text: 'Pump 3, attendant 04' },
      { kind: 'rule' },
      { kind: 'line', left: 'PMS 20.00 L', right: '3,560.00', note: 'Read from the pump controller', tone: 'industry' },
      { kind: 'line', left: 'Engine oil 1 L', right: '1,150.00', note: 'Shop stock reduced', tone: 'industry' },
      { kind: 'rule' },
      { kind: 'total', left: 'TOTAL KES', right: '4,710.00', note: 'Posted to your accounts', tone: 'signal' },
      { kind: 'line', left: 'Paid by M-Pesa', right: 'QGH7XXXXXX', note: 'M-Pesa payment matched', tone: 'ok' },
      { kind: 'rule' },
      { kind: 'etims', note: 'Signed by KRA eTIMS' },
    ],
  },
  retail: {
    label: 'Supermarket',
    rows: [
      { kind: 'head', text: 'CORNER SUPERMARKET' },
      { kind: 'sub', text: 'Till 2, cashier 07' },
      { kind: 'rule' },
      { kind: 'line', left: 'Maize flour 2 kg x2', right: '460.00', note: 'Shelf stock updated', tone: 'industry' },
      { kind: 'line', left: 'Tomatoes 0.84 kg', right: '100.80', note: 'Weighed on the till scale', tone: 'industry' },
      { kind: 'line', left: 'Milk 500 ml x3', right: '195.00' },
      { kind: 'rule' },
      { kind: 'total', left: 'TOTAL KES', right: '755.80', note: 'Posted to your accounts', tone: 'signal' },
      { kind: 'line', left: 'Paid by M-Pesa', right: 'QGJ2XXXXXX', note: 'M-Pesa payment matched', tone: 'ok' },
      { kind: 'line', left: 'Loyalty points', right: '+7', note: 'Customer found by phone number', tone: 'industry' },
      { kind: 'rule' },
      { kind: 'etims', note: 'Signed by KRA eTIMS' },
    ],
  },
  restaurant: {
    label: 'Restaurant',
    rows: [
      { kind: 'head', text: 'STATION CAFE' },
      { kind: 'sub', text: 'Table 12, 4 guests' },
      { kind: 'rule' },
      { kind: 'line', left: 'Nyama choma 1/2 kg x2', right: '1,800.00', note: 'Sent to the grill screen', tone: 'industry' },
      { kind: 'line', left: 'Pilau', right: '450.00' },
      { kind: 'line', left: 'Chapati x4', right: '200.00', note: 'Ingredients taken from stock', tone: 'industry' },
      { kind: 'rule' },
      { kind: 'total', left: 'TOTAL KES', right: '2,450.00', note: 'Posted to your accounts', tone: 'signal' },
      { kind: 'line', left: 'Paid by M-Pesa at table', right: 'QGK5XXXXXX', note: 'M-Pesa payment matched', tone: 'ok' },
      { kind: 'rule' },
      { kind: 'etims', note: 'Signed by KRA eTIMS' },
    ],
  },
  pharmacy: {
    label: 'Pharmacy',
    rows: [
      { kind: 'head', text: 'TOWN PHARMACY' },
      { kind: 'sub', text: 'Prescription 0412' },
      { kind: 'rule' },
      { kind: 'line', left: 'Amoxicillin 500mg x21', right: '630.00', note: 'Earliest-expiry batch picked', tone: 'industry' },
      { kind: 'line', left: 'Paracetamol 500mg x20', right: '60.00' },
      { kind: 'line', left: 'Insurer pays', right: '-400.00', note: 'Claim queued for the insurer', tone: 'industry' },
      { kind: 'rule' },
      { kind: 'total', left: 'PATIENT PAYS KES', right: '290.00', note: 'Posted to your accounts', tone: 'signal' },
      { kind: 'line', left: 'Paid by M-Pesa', right: 'QGM8XXXXXX', note: 'M-Pesa payment matched', tone: 'ok' },
      { kind: 'rule' },
      { kind: 'etims', note: 'Signed by KRA eTIMS' },
    ],
  },
};
