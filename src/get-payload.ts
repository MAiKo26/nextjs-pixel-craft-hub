import dotenv from "dotenv";
import path from "path";
import Args from "./interfaces/Args";
import payload from "payload";
dotenv.config({path: path.resolve(__dirname, "../.env")});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

export const getPayloadClient = async ({initOptions}: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is not set");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.client) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (error: unknown) {
    cached.process = null;
    throw error;
  }
};
