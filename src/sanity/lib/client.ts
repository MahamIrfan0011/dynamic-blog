import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "clo92o9z", // apni Sanity project ID yahan dalna
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-02-08",
});
