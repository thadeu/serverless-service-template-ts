import AWSXRay from "aws-xray-sdk-core";
import ResponseBuilder from "response-builder";

const AWS = AWSXRay.captureAWS(require("aws-sdk"));
AWS.config.logger = console;

export async function handler(event, context) {
  try {
    console.info("Event", event);

    return {
      statusCode: 200,
      success: true,
    }
  } catch (error) {
    console.error(error);
    
    return {
      statusCode: 400
      message: error
    }
  }
}
