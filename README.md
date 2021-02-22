# FullStack-Website-Template
A template for creating full deployment ready websites.

Comes bundled with Nuxt and NestJS however the system is designed to be usable with any client and any server as long as there is an output folder for each...

## Core Files
`run.ts` - Handles running both the client and server simultaneously for development mode.
`build.ts` - Houses code for building the client + server and combining them into dist
`config.ts` - Converts the config into a proper format usable by the client
`config.json` - Stores a shared configuration for both the client and server to use.

## Things to Note
- This template is optimized for Typescript... you should be familiar with Typescript when working with it.

Readme is still a work in progress... I will probably update it when I finish the template.