import 'dotenv/config';

export const config = {
  apiKey: process.env.API_KEY!,

  joiOptions: {
    errors: {
      wrap: { label: '' },
    },
    abortEarly: true,
  },
};
