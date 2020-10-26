export const mockQuote = {
  quote: {
    policy_holder: {
      first_name: 'Peter',
      last_name: 'Schreyer',
    },
    first_name: 'Peter',
    last_name: 'Schreyer',
    premium: 26000,
    quoteId: 'UP7848281',
    rating_address: {
      line_1: '123 Main St.',
      line_2: '',
      city: 'Los Angeles',
      region: 'CA',
      postal: '98789',
    },
    city: 'Los Angeles',
    line_1: '123 Main St.',
    line_2: '',
    postal: '98789',
    region: 'CA',
    variable_options: {
      asteroid_collision: {
        description:
          'The maximum amount covered for damages caused by asteroid collisions.',
        title: 'Asteroid Collision Limit',
        values: [100000, 300000, 500000, 1000000],
      },
      deductible: {
        description:
          'The amount of money you will pay in an insurance claim before the insurance coverage kicks in.',
        title: 'Deductible',
        values: [500, 1000, 2000],
      },
    },
    variable_selections: { deductible: 500, asteroid_collision: 100000 },
    asteroid_collision: 100000,
    deductible: 500,
  },
};
