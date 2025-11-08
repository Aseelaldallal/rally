import { proxyActivities } from "@temporalio/workflow";

/**
 * Temporal workflows run in an isolated sandbox and cannot
 * directly import activity code. They can only import
 * type definitions.
 * The workflow needs to know what the activity functions look like
 * (their signatures) but it doesn't run the actual activity code.
 * The actual activity code runs in the worker */
import  type * as activities from "./activities";


/** Set up activities with timeouts
 * proxyActivities: temporal function that creats proxy versions of your activities
 * These proxies don't run the actual code - they send messages to the worker to run them
*/
const { readAseelResume } = proxyActivities<typeof activities>({
    startToCloseTimeout: "1 minute", // Activity doesn't finish in 1 min? Fail it
});


// Main workflow
export const interviewAseelWorkflow = async(): Promise<string> => {
    console.log('Starting workflow for interviewing Aseel');
    const result = await readAseelResume();
    console.log(result);
    console.log('Workflow complete');
    return 'Done'
}