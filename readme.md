# Rally Interview Request - A Temporal Workflow

Just for fun.

## Prerequisites

- Node.js (v18 or higher)
- Temporal CLI

## Setup

### 1. Install Temporal CLI

```bash
brew install temporal
```

### 2. Start Temporal Server

```bash
temporal server start-dev
```

This starts the Temporal server and Web UI locally.

### 3. Install dependencies (in a new terminal)

```bash
npm install
```

### 4. Start the Worker (keep previous terminal running)

```bash
npm run start.worker
```

The worker executes your workflows and activities.

### 5. Run the Client (in another new terminal)

```bash
npm run start.workflow
```

The client starts the workflow execution.

## Viewing Results

- **Check the worker terminal** - You'll see all the console.log output from the activities
- **Open the Web UI** - Navigate to http://localhost:8233 to see the workflow execution timeline
