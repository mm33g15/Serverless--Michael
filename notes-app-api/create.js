import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "Projects",
    Item: {
      //userId: event.requestContext.identity.cognitoIdentityId,
      userId: data.userId,
      projectId: uuid.v1(),
      title: data.title,
      description: data.description,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false, error: e, event: event });
  }
}