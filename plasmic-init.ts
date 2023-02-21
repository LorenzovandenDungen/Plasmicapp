import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "4UWuoUxBjJSz5QMN4ogHwp",  // ID of a project you are using
      token: "FDm5TKnkIsfkPEp5Fk2dIfQVCOGX14YqQh6SDr7y9Rw6FQ9g2WfKVHeCMXVNzTCwP5m8we99GTKIHiqGvUEGKg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})