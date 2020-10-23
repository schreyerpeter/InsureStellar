type AddressType = {
  line_1: string;
  line_2: string;
  city: string;
  region: string;
  postal: string;
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

export type FormErrorsType = {
  first_name?: string;
  last_name?: string;
  line_1?: string;
  line_2?: string;
  city?: string;
  region?: string;
  postal?: string;
};
