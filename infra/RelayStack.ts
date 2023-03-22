import { App, Stack } from "aws-cdk-lib";
import { CfnApi } from "aws-cdk-lib/aws-apigatewayv2";

class RelayStack extends Stack {
  constructor(scope: App, id: string) {
    super(scope, id);

    // create a websocket API using AWS CDK
    new CfnApi(this, "RelayApi", {
      protocolType: "WEBSOCKET",
    });
  }
}

export default RelayStack;
