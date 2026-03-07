import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '7110174a8c84860948b7cb1d57c84402b3e5a720', queries,  });
export default client;
  