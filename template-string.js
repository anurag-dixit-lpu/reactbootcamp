// Template Strings

const firstName = "muthuswami chinnaswamy",
  middleName = "venugopal",
  lastName = "iyer",
  qty = 2,
  price = 20,
  event = "React boot camp",
  ticketAgent = "Micheal Gorge";

console.log(lastName + ", " + firstName + " " + middleName);

console.log(`${lastName}, ${firstName} ${middleName}`);

/** ts honor white space */

const email = `
Hello ${firstName},

Thanks for ordering ${qty} tickets to ${event}.
Order Details
${firstName} ${middleName} ${lastName}
${qty} x $${price} = $${qty * price} to ${event}
You can pick your tickets up 30 minutes before
the show.

Thanks,
${ticketAgent}
`;

console.log(email);
