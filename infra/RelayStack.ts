import { App, CfnOutput, Stack } from "aws-cdk-lib";
import { CfnApi } from "aws-cdk-lib/aws-apigatewayv2";

class RelayStack extends Stack {
  constructor(scope: App, id: string) {
    super(scope, id);

    // create a websocket API using AWS CDK
    const api = new CfnApi(this, "RelayApi", {
      name: "nawstr-api",
      protocolType: "WEBSOCKET",
      routeSelectionExpression: "$request.body.action",
    });

    new CfnOutput(this, "RelayURL", {
      value:
        "wss://" +
        api.attrApiId +
        ".execute-api." +
        this.region +
        ".amazonaws.com/" +
        "undefined/",
    });
  }
}

export default RelayStack;
