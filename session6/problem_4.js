class Ticket {
  constructor(flightDetails) {
    this.flightDetails = flightDetails;
  }

  getFlightDetails() {
    return this.flightDetails;
  }
}

let flightDetails = {
  departureCity: "Mumbai",
  arrivalCity: "Udaipur",
  flightNumber: "123AAS",
  seatAssignment: { row: 12, seat: "F" },
};

const ticket = new Ticket(flightDetails);
console.log(
  "Flight " +
    ticket.getFlightDetails().flightNumber +
    " is from " +
    ticket.getFlightDetails().departureCity +
    " to " +
    ticket.getFlightDetails().arrivalCity
);
