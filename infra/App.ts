import { App } from "aws-cdk-lib";
import RelayStack from "./RelayStack";

const app = new App();

new RelayStack(app, "RelayStack");
