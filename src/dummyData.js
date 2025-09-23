export const initialReports = [
  { id: 1, householdId: "A-101", status: "Compliant", area: "Ward A", reviewed: true },
  { id: 2, householdId: "B-205", status: "Non-Compliant", area: "Ward B", reviewed: false, photo: "/images/waste-photo.jpg" },
  { id: 3, householdId: "C-310", status: "Compliant", area: "Ward C", reviewed: true },
];

export const scrapItems = [
  { id: 1, name: 'Plastic Bottles (PET)', pricePerKg: 25 },
  { id: 2, name: 'Cardboard', pricePerKg: 10 },
  { id: 3, name: 'Glass Bottles', pricePerKg: 5 },
  { id: 4, name: 'Newspaper', pricePerKg: 15 },
];

export const initialWorkerEarnings = [
  { id: 1, date: '2025-09-22', item: 'Plastic Bottles (PET)', weightKg: 5, value: 125 },
  { id: 2, date: '2025-09-22', item: 'Newspaper', weightKg: 10, value: 150 },
];
