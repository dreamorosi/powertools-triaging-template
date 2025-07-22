#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { TriageStack } from '../lib/triage-stack.js';

const app = new App();
new TriageStack(app, 'TriageStack', {});
