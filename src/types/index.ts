export type UpdateQuoteParamsType = {
  asteroid_collision?: number;
  deductible?: number;
};

export type FormValuesType = {
  first_name: string;
  last_name: string;
  line_1: string;
  line_2: string;
  city: string;
  region: string;
  postal: string;
};

type RatingAddressType = {
  line_1: string;
  line_2: string;
  city: string;
  region: string;
  postal: string;
};

type VariableOptionType = {
  description: string;
  title: string;
  values: number[];
};

type PolicyHolderType = {
  first_name: string;
  last_name: string;
};

type VariableSelectionType = {
  deductible: number;
  asteroid_collision: number;
};

export type AppStateType = {
  hasError: false;
  inProgress: false;
  isFetching: false;
  policy_holder: PolicyHolderType;
  premium: number;
  quote: {};
  quoteId: string;
  rating_address: RatingAddressType;
  variable_options: {
    deductible: VariableOptionType;
    asteroid_collision: VariableOptionType;
    variable_selections: VariableSelectionType;
  };
};
