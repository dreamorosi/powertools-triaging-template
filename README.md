# Sample Triage Project

This repository contains a sample Node.js project to deploy a AWS Lambda function using the AWS Cloud Development Kit (CDK). The main goal of this project is to provide a testing ground for triaging issues and bug reports related to Powertools for AWS Lambda (TypeScript).

## Triaging workflow

1. Fork the repository using the "Use this template" button (green, top right).
2. Clone your forked repository to your local machine.
3. Run `npm ci` to install dependencies.
4. Install any missing dependencies by running `npm install <package-name>`.
5. Make changes to the Lambda function code in `src/index.ts` or the CDK stack in `lib/triage-stack.ts`.
6. Deploy the stack using `npm run cdk deploy`.
7. Test the Lambda function by invoking it with a sample event payload from the issue report or by creating a new one in the `events/` directory.
8. Observe the logs in CloudWatch to verify the function's behavior.
9. If you are able to reproduce the issue, update this `README.md` file with the details of the issue, including:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Any relevant logs or error messages
10. Push your changes to your forked repository and report your findings in the original issue report on the Powertools for AWS Lambda GitHub repository.

> [!note]
> The project comes with a `devcontainer.json` file, if you know how to use it, you can open the project in a development container with all dependencies pre-installed. This is especially useful if you want to avoid installing Node.js and other dependencies on your local machine. You can use Visual Studio Code with the Remote - Containers extension to open the project in a dev container - more information can be found in the [VS Code documentation](https://code.visualstudio.com/docs/devcontainers/containers).

## Architecture

The project follows a standard AWS CDK project structure:

- `bin/` - Contains the entry point for the CDK application
- `lib/` - Contains the CDK stack definition
- `src/` - Contains the Lambda function code
- `test/` - Contains test files
- `events/` - Contains sample event payloads for testing

The main stack is defined in `lib/triage-stack.ts` and creates:

1. A Lambda function running Node.js called `TriageFn`
2. A CloudWatch Log Group for the Lambda function
3. CloudFormation outputs for key resources

The Lambda function code is in `src/index.ts` and is currently a simple "Hello World" function that returns a 200 status code.

## Commands

### Deployment Commands

```bash
# Deploy the CDK stack
npm run cdk deploy

# Deploy the stack in watch mode (auto-redeploy on changes + stream logs)
npm run cdk deploy -- --watch

# Deploy function with hotswap enabled (faster iterations for code changes)
npm run cdk deploy -- --hotswap

# Synthesize CloudFormation template without deploying
npm run cdk synth

# Bootstrap the CDK environment (only needed once per environment)
npm run cdk bootstrap
```

### Unit Tests

```bash
# Run all tests
npm test

# Run a specific test file
npx vitest src/path/to/test.test.ts

# Run tests in watch mode
npx vitest
```

### Linting Commands

```bash
# Run Biome linter
npm run lint

# Run Biome formatter
npm run lint:fix
```

## Useful information

- The Lambda function is written in TypeScript, but if you need to troubleshoot JavaScript issues, you can:
  - Rename the file from `src/index.ts` to `src/index.js`
  - Update the `entry` in `lib/triage-stack.ts` to point to `src/index.js`
  - Remove types from the handler function signature in `src/index.js`:

    ```javascript
    export const handler = async (event, context) => {
      return {
        statusCode: 200,
        body: JSON.stringify('Hello, World!'),
      };
    };
    ```

- The project uses ESM modules (note the `"type": "module"` in package.json) and outputs JavaScript files in ESM format. If you need to switch to CommonJS, you only need to:
  - change the `format: OutputFormat.ESM,` line in `lib/triage-stack.ts` to `format: OutputFormat.CJS,`
  - remove the `banner` in the `bundling` options of the `NodejsFunction` construct.
- The project comes with the three Powertools for AWS core utilities installed, you can add more as needed by running `npm install @aws-lambda-powertools/<utility>`.
