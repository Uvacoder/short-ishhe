// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "nextauth_users",
    columns: [
      { name: "email", type: "email" },
      { name: "emailVerified", type: "datetime" },
      { name: "name", type: "string" },
      { name: "image", type: "string" },
    ],
  },
  {
    name: "nextauth_accounts",
    columns: [
      { name: "user", type: "link", link: { table: "nextauth_users" } },
      { name: "type", type: "string" },
      { name: "provider", type: "string" },
      { name: "providerAccountId", type: "string" },
      { name: "refresh_token", type: "string" },
      { name: "access_token", type: "string" },
      { name: "expires_at", type: "int" },
      { name: "token_type", type: "string" },
      { name: "scope", type: "string" },
      { name: "id_token", type: "text" },
      { name: "session_state", type: "string" },
    ],
  },
  {
    name: "nextauth_verificationTokens",
    columns: [
      { name: "identifier", type: "string" },
      { name: "token", type: "string" },
      { name: "expires", type: "datetime" },
    ],
  },
  {
    name: "nextauth_users_accounts",
    columns: [
      { name: "user", type: "link", link: { table: "nextauth_users" } },
      { name: "account", type: "link", link: { table: "nextauth_accounts" } },
    ],
  },
  {
    name: "nextauth_users_sessions",
    columns: [
      { name: "user", type: "link", link: { table: "nextauth_users" } },
      { name: "session", type: "link", link: { table: "nextauth_sessions" } },
    ],
  },
  {
    name: "nextauth_sessions",
    columns: [
      { name: "sessionToken", type: "string" },
      { name: "expires", type: "datetime" },
      { name: "user", type: "link", link: { table: "nextauth_users" } },
    ],
  },
  {
    name: "links",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "user_links", type: "text", notNull: true, defaultValue: "[]" },
    ],
  },
];
/** @type { import('../../client/src').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Ishaan-Bedi-s-workspace-tbb9k6.us-east-1.xata.sh/db/ishn_xyz_dev",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
