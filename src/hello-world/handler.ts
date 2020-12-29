import AWS from "aws-sdk";
import { JSONResponse } from "@shared/api-gateway";
AWS.config.logger = console;

export async function handler(event) {
  try {
    console.info("Event", event);

    return JSONResponse({
      message: "success",
    });
  } catch (error) {
    console.error(error);

    return JSONResponse({ message: "error" });
  }
}
