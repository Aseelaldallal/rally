export const readAseelResume = async (): Promise<string> => {
  console.log("Reading Aseel's Resume");
  console.log("She's a cool human");
  console.log('She has relevant skills');
  console.log('She has valuable experience');
  return 'Resume reviewed: She has potential! Lets interview';
};

export const meetAndGreetAseel = async (): Promise<string> => {
  console.log('talk talk talk cool things good things');
  console.log('Wait a minute she has bears roaming around her backyard????');
  console.log('Bobcats and cougars too, her neighbor captured it');
  console.log('https://www.youtube.com/shorts/vZM6QMXuZ8M');
  sleep(100);
  return 'Passed interview!';
};

export const technicalInterviewOne = async (): Promise<string> => {
  console.log('some practical coding question non leet code style');
  sleep(300);
  return 'Passed!';
};

export const technicalInterviewTwo = async (): Promise<string> => {
  console.log('some system design question or something funny');
  sleep(300);
  return 'Passed!';
};

export const rallyEvaluatesAseel = async (): Promise<string> => {
  console.log('should we hire her?');
  sleep(50);
  return '<Insert Rally Evaluation>';
};

export const aseelEvaluatesRally = async (): Promise<string> => {
  console.log('Aseel checks out Rally...');
  console.log('✓ Cool product');
  console.log('✓ Interesting problems to solve');
  sleep(50);
  return 'This could be a great fit!';
};

export const makeMutualDecision = async (): Promise<string> => {
  console.log('Both sides think this could work...');
  console.log('Lets have a conversation!');
  sleep(75);
  return 'Time to talk!';
};

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
