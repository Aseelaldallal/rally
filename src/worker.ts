import { Worker } from "@temporalio/worker";
import * as activities from './activities'

/**
 * Run a Temporal Server
 * 
 * This worker will execute the workflow and activities.
 */

const run = async () => {
    console.log('Starting temporal worker');
    console.log('This worker will run the interview Aseel workflow');
    console.log('Make sure you have temporal server running locally');
    console.log('Run: temporal server start-dev');

    const worker = await Worker.create({
        workflowsPath: require.resolve('./workflow'),
        activities,
        taskQueue: 'interview-aseel-at-rally'
    })

    console.log('Worker is ready. Waiting for workflows to execute');
    console.log('Run the client in another terminal: npm run start.workflow')

    await worker.run();
}

run().catch((err) => {
    console.error('Worker failed', err);
    process.exit(1);
})

