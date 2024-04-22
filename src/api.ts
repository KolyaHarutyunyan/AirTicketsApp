import jsonData from "./tickets.json";

export function fakeFetchTickets() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jsonData.tickets), 3000);
  });
}
