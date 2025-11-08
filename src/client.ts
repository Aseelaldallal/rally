import { Connection, Client } from '@temporalio/client';
import { interviewAseelWorkflow } from './workflow';



const run = async () =>{

    // Connect to temporal server
    const connection = await Connection.connect({
        address: 'localhost:7233'
    });

    const client = new Client({ connection });

    const handle = await client.workflow.start(interviewAseelWorkflow, {
        taskQueue: 'interview-aseel-at-rally', // this must match the worker
        workflowId: `interview-aseel-${Date.now()}`,
    })

    console.log(`Started workflow: ${handle.workflowId}`);
    const result = await handle.result();
    console.log('Workflow result: ', result);
}

run().catch((err) => {
    console.error('Client error', err);
    process.exit(1)
})
