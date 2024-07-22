﻿/*********************** 
 * Task_Switching *
 ***********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'task_switching';  // from the Builder filename that created this script
let expInfo = {
    '姓名': '王小明',
    '電話': '0900-012-345',
    '電子郵件': 'yourEmail@google.com',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
const Instruction_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Instruction_LoopLoopBegin(Instruction_LoopLoopScheduler));
flowScheduler.add(Instruction_LoopLoopScheduler);
flowScheduler.add(Instruction_LoopLoopEnd);


flowScheduler.add(ReadyNumbersRoutineBegin());
flowScheduler.add(ReadyNumbersRoutineEachFrame());
flowScheduler.add(ReadyNumbersRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(ReadyLettersRoutineBegin());
flowScheduler.add(ReadyLettersRoutineEachFrame());
flowScheduler.add(ReadyLettersRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);



flowScheduler.add(ReadyMixedRoutineBegin());
flowScheduler.add(ReadyMixedRoutineEachFrame());
flowScheduler.add(ReadyMixedRoutineEnd());
const BlockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlockLoopBegin(BlockLoopScheduler));
flowScheduler.add(BlockLoopScheduler);
flowScheduler.add(BlockLoopEnd);






flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimuli/opening.mp4', 'path': 'stimuli/opening.mp4'},
    {'name': 'stimuli/task_switch_backimg.png', 'path': 'stimuli/task_switch_backimg.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/readynumbers.png', 'path': 'stimuli/readynumbers.png'},
    {'name': 'stimuli/grid.png', 'path': 'stimuli/grid.png'},
    {'name': 'stimuli/task2.png', 'path': 'stimuli/task2.png'},
    {'name': 'stimuli/readyletters.png', 'path': 'stimuli/readyletters.png'},
    {'name': 'stimuli/task1.png', 'path': 'stimuli/task1.png'},
    {'name': 'stimuli/readylettersnumbers.png', 'path': 'stimuli/readylettersnumbers.png'},
    {'name': 'stimuli/grid.png', 'path': 'stimuli/grid.png'},
    {'name': 'stimuli/instructions1.png', 'path': 'stimuli/instructions1.png'},
    {'name': 'stimuli/instructions2.png', 'path': 'stimuli/instructions2.png'},
    {'name': 'stimuli/instructions3.png', 'path': 'stimuli/instructions3.png'},
    {'name': 'stimuli/instructions4.png', 'path': 'stimuli/instructions4.png'},
    {'name': 'stimuli/instructions5.png', 'path': 'stimuli/instructions5.png'},
    {'name': 'stimuli/readyletters.png', 'path': 'stimuli/readyletters.png'},
    {'name': 'stimuli/readylettersnumbers.png', 'path': 'stimuli/readylettersnumbers.png'},
    {'name': 'stimuli/readynumbers.png', 'path': 'stimuli/readynumbers.png'},
    {'name': 'stimuli/stimuli.svg', 'path': 'stimuli/stimuli.svg'},
    {'name': 'stimuli/task_switch_backimg.png', 'path': 'stimuli/task_switch_backimg.png'},
    {'name': 'stimuli/task1.png', 'path': 'stimuli/task1.png'},
    {'name': 'stimuli/task2.png', 'path': 'stimuli/task2.png'},
    {'name': 'stimuli/thankyou.png', 'path': 'stimuli/thankyou.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u59d3\u540d"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var IntroClock;
var movieClock;
var movie;
var Left_Rectangle;
var Right_Rectangle;
var Left_Click;
var Right_Click;
var endKey;
var InstructionClock;
var previousTask;
var slideN;
var maxSlideN;
var minSlideN;
var key_resp;
var back_img;
var instr_image;
var ReadyNumbersClock;
var back_img_6;
var Instr_numbers_Only;
var key_resp_2;
var NumberTask_PracticeClock;
var back_img_2;
var grid;
var previousNumber;
var previousLetter;
var NumberStim;
var NumberResponse;
var FeedbackClock;
var back_img_3;
var FeedBack_NumberTask;
var ErrorImage;
var ReadyLettersClock;
var back_img_7;
var Readyletter_img;
var key_resp_3;
var LetterTask_PracticeClock;
var back_img_5;
var grid_3;
var LetterStim;
var LetterResponse;
var Letter_FeedbackClock;
var back_img_8;
var FeedBack_LetterTask;
var ErrorImage_2;
var ReadyMixedClock;
var back_img_9;
var ReadyMix_img;
var key_resp_4;
var reset_MixedClock;
var Mixed_TaskClock;
var back_img_4;
var grid_2;
var Task_switch_stim;
var MixedResponse;
var Mixed_FeedbackClock;
var back_img_10;
var FeedBack_LetterTask_2;
var ErrorImage_3;
var endClock;
var back_img_11;
var Thank_you;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  movieClock = new util.Clock();
  movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie',
    units: psychoJS.window.units,
    movie: 'stimuli/opening.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [1.789, 1],
    ori: 0.0,
    opacity: undefined,
    loop: true,
    noAudio: false,
    depth: 0
    });
  Left_Rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'Left_Rectangle', units : 'norm', 
    width: [1, 2][0], height: [1, 2][1],
    ori: 0.0, pos: [(- 0.5), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 0.0, depth: -1, interpolate: true,
  });
  
  Right_Rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'Right_Rectangle', units : 'norm', 
    width: [1, 2][0], height: [1, 2][1],
    ori: 0.0, pos: [0.5, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, 0.7882, 0.5373]),
    fillColor: new util.Color([1.0, 0.7882, 0.5373]),
    fillColor: [1.0, 0.7882, 0.5373],
    opacity: 0.0, depth: -2, interpolate: true,
  });
  
  Left_Click = new core.Mouse({
    win: psychoJS.window,
  });
  Left_Click.mouseClock = new util.Clock();
  Right_Click = new core.Mouse({
    win: psychoJS.window,
  });
  Right_Click.mouseClock = new util.Clock();
  endKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  previousTask = null;
  slideN = 1;
  maxSlideN = 5;
  minSlideN = 1;
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  back_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 0.995],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  instr_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.05)], size : [1.5, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "ReadyNumbers"
  ReadyNumbersClock = new util.Clock();
  back_img_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_6', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Instr_numbers_Only = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instr_numbers_Only', units : undefined, 
    image : 'stimuli/readynumbers.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.05)], size : [1.5, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "NumberTask_Practice"
  NumberTask_PracticeClock = new util.Clock();
  back_img_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_2', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  grid = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid', units : undefined, 
    image : 'stimuli/grid.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Run 'Begin Experiment' code from NumberTask_Code
  previousNumber = null;
  previousLetter = null;
  
  NumberStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'NumberStim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -3.0 
  });
  
  NumberResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  back_img_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_3', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  FeedBack_NumberTask = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedBack_NumberTask',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -2.0 
  });
  
  ErrorImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ErrorImage', units : undefined, 
    image : 'stimuli/task2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.6, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "ReadyLetters"
  ReadyLettersClock = new util.Clock();
  back_img_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_7', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Readyletter_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Readyletter_img', units : undefined, 
    image : 'stimuli/readyletters.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.05)], size : [1.5, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "LetterTask_Practice"
  LetterTask_PracticeClock = new util.Clock();
  back_img_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_5', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  grid_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_3', units : undefined, 
    image : 'stimuli/grid.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Run 'Begin Experiment' code from LetterTask_Code
  previousNumber = null;
  previousLetter = null;
  
  LetterStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'LetterStim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -3.0 
  });
  
  LetterResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Letter_Feedback"
  Letter_FeedbackClock = new util.Clock();
  back_img_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_8', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  FeedBack_LetterTask = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedBack_LetterTask',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -2.0 
  });
  
  ErrorImage_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ErrorImage_2', units : undefined, 
    image : 'stimuli/task1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0.125], size : [0.5, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "ReadyMixed"
  ReadyMixedClock = new util.Clock();
  back_img_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_9', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ReadyMix_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ReadyMix_img', units : undefined, 
    image : 'stimuli/readylettersnumbers.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.05)], size : [1.5, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reset_Mixed"
  reset_MixedClock = new util.Clock();
  // Initialize components for Routine "Mixed_Task"
  Mixed_TaskClock = new util.Clock();
  back_img_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_4', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  grid_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_2', units : undefined, 
    image : 'stimuli/grid.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  Task_switch_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'Task_switch_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -3.0 
  });
  
  MixedResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Mixed_Feedback"
  Mixed_FeedbackClock = new util.Clock();
  back_img_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_10', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  FeedBack_LetterTask_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedBack_LetterTask_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -2.0 
  });
  
  ErrorImage_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ErrorImage_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  back_img_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_img_11', units : undefined, 
    image : 'stimuli/task_switch_backimg.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.775, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'Thank_you',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var _endKey_allKeys;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro' ---
    t = 0;
    IntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Intro.started', globalClock.getTime());
    // setup some python lists for storing info about the Left_Click
    // current position of the mouse:
    Left_Click.x = [];
    Left_Click.y = [];
    Left_Click.leftButton = [];
    Left_Click.midButton = [];
    Left_Click.rightButton = [];
    Left_Click.time = [];
    Left_Click.clicked_name = [];
    gotValidClick = false; // until a click is received
    // setup some python lists for storing info about the Right_Click
    // current position of the mouse:
    Right_Click.x = [];
    Right_Click.y = [];
    Right_Click.leftButton = [];
    Right_Click.midButton = [];
    Right_Click.rightButton = [];
    Right_Click.time = [];
    Right_Click.clicked_name = [];
    gotValidClick = false; // until a click is received
    endKey.keys = undefined;
    endKey.rt = undefined;
    _endKey_allKeys = [];
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(movie);
    IntroComponents.push(Left_Rectangle);
    IntroComponents.push(Right_Rectangle);
    IntroComponents.push(Left_Click);
    IntroComponents.push(Right_Click);
    IntroComponents.push(endKey);
    
    for (const thisComponent of IntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro' ---
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie* updates
    if (t >= 0.0 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
      movie.play();
    }
    
    
    // *Left_Rectangle* updates
    if (t >= 0.0 && Left_Rectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Left_Rectangle.tStart = t;  // (not accounting for frame time here)
      Left_Rectangle.frameNStart = frameN;  // exact frame index
      
      Left_Rectangle.setAutoDraw(true);
    }
    
    
    // *Right_Rectangle* updates
    if (t >= 0.0 && Right_Rectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Right_Rectangle.tStart = t;  // (not accounting for frame time here)
      Right_Rectangle.frameNStart = frameN;  // exact frame index
      
      Right_Rectangle.setAutoDraw(true);
    }
    
    // *Left_Click* updates
    if (t >= 0.0 && Left_Click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Left_Click.tStart = t;  // (not accounting for frame time here)
      Left_Click.frameNStart = frameN;  // exact frame index
      
      Left_Click.status = PsychoJS.Status.STARTED;
      Left_Click.mouseClock.reset();
      prevButtonState = Left_Click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Left_Click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Left_Click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [Left_Rectangle]) {
            if (obj.contains(Left_Click)) {
              gotValidClick = true;
              Left_Click.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = Left_Click.getPos();
          Left_Click.x.push(_mouseXYs[0]);
          Left_Click.y.push(_mouseXYs[1]);
          Left_Click.leftButton.push(_mouseButtons[0]);
          Left_Click.midButton.push(_mouseButtons[1]);
          Left_Click.rightButton.push(_mouseButtons[2]);
          Left_Click.time.push(Left_Click.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // *Right_Click* updates
    if (t >= 0.0 && Right_Click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Right_Click.tStart = t;  // (not accounting for frame time here)
      Right_Click.frameNStart = frameN;  // exact frame index
      
      Right_Click.status = PsychoJS.Status.STARTED;
      Right_Click.mouseClock.reset();
      prevButtonState = Right_Click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Right_Click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Right_Click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [Right_Rectangle]) {
            if (obj.contains(Right_Click)) {
              gotValidClick = true;
              Right_Click.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = Right_Click.getPos();
          Right_Click.x.push(_mouseXYs[0]);
          Right_Click.y.push(_mouseXYs[1]);
          Right_Click.leftButton.push(_mouseButtons[0]);
          Right_Click.midButton.push(_mouseButtons[1]);
          Right_Click.rightButton.push(_mouseButtons[2]);
          Right_Click.time.push(Right_Click.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *endKey* updates
    if (t >= 0.0 && endKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endKey.tStart = t;  // (not accounting for frame time here)
      endKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endKey.clearEvents(); });
    }
    
    if (endKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = endKey.getKeys({keyList: ['left', 'right', 'space', 'return'], waitRelease: false});
      _endKey_allKeys = _endKey_allKeys.concat(theseKeys);
      if (_endKey_allKeys.length > 0) {
        endKey.keys = _endKey_allKeys[_endKey_allKeys.length - 1].name;  // just the last key pressed
        endKey.rt = _endKey_allKeys[_endKey_allKeys.length - 1].rt;
        endKey.duration = _endKey_allKeys[_endKey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro' ---
    for (const thisComponent of IntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Intro.stopped', globalClock.getTime());
    movie.stop();  // ensure movie has stopped at end of Routine
    // store data for psychoJS.experiment (ExperimentHandler)
    if (Left_Click.x) {  psychoJS.experiment.addData('Left_Click.x', Left_Click.x[0])};
    if (Left_Click.y) {  psychoJS.experiment.addData('Left_Click.y', Left_Click.y[0])};
    if (Left_Click.leftButton) {  psychoJS.experiment.addData('Left_Click.leftButton', Left_Click.leftButton[0])};
    if (Left_Click.midButton) {  psychoJS.experiment.addData('Left_Click.midButton', Left_Click.midButton[0])};
    if (Left_Click.rightButton) {  psychoJS.experiment.addData('Left_Click.rightButton', Left_Click.rightButton[0])};
    if (Left_Click.time) {  psychoJS.experiment.addData('Left_Click.time', Left_Click.time[0])};
    if (Left_Click.clicked_name) {  psychoJS.experiment.addData('Left_Click.clicked_name', Left_Click.clicked_name[0])};
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (Right_Click.x) {  psychoJS.experiment.addData('Right_Click.x', Right_Click.x[0])};
    if (Right_Click.y) {  psychoJS.experiment.addData('Right_Click.y', Right_Click.y[0])};
    if (Right_Click.leftButton) {  psychoJS.experiment.addData('Right_Click.leftButton', Right_Click.leftButton[0])};
    if (Right_Click.midButton) {  psychoJS.experiment.addData('Right_Click.midButton', Right_Click.midButton[0])};
    if (Right_Click.rightButton) {  psychoJS.experiment.addData('Right_Click.rightButton', Right_Click.rightButton[0])};
    if (Right_Click.time) {  psychoJS.experiment.addData('Right_Click.time', Right_Click.time[0])};
    if (Right_Click.clicked_name) {  psychoJS.experiment.addData('Right_Click.clicked_name', Right_Click.clicked_name[0])};
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endKey.corr, level);
    }
    psychoJS.experiment.addData('endKey.keys', endKey.keys);
    if (typeof endKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endKey.rt', endKey.rt);
        psychoJS.experiment.addData('endKey.duration', endKey.duration);
        routineTimer.reset();
        }
    
    endKey.stop();
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instruction_Loop;
function Instruction_LoopLoopBegin(Instruction_LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Instruction_Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Instruction_Loop'
    });
    psychoJS.experiment.addLoop(Instruction_Loop); // add the loop to the experiment
    currentLoop = Instruction_Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstruction_Loop of Instruction_Loop) {
      snapshot = Instruction_Loop.getSnapshot();
      Instruction_LoopLoopScheduler.add(importConditions(snapshot));
      Instruction_LoopLoopScheduler.add(InstructionRoutineBegin(snapshot));
      Instruction_LoopLoopScheduler.add(InstructionRoutineEachFrame());
      Instruction_LoopLoopScheduler.add(InstructionRoutineEnd(snapshot));
      Instruction_LoopLoopScheduler.add(Instruction_LoopLoopEndIteration(Instruction_LoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Instruction_LoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Instruction_Loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Instruction_LoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(NumberTask_PracticeRoutineBegin(snapshot));
      trialsLoopScheduler.add(NumberTask_PracticeRoutineEachFrame());
      trialsLoopScheduler.add(NumberTask_PracticeRoutineEnd(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(LetterTask_PracticeRoutineBegin(snapshot));
      trials_2LoopScheduler.add(LetterTask_PracticeRoutineEachFrame());
      trials_2LoopScheduler.add(LetterTask_PracticeRoutineEnd(snapshot));
      trials_2LoopScheduler.add(Letter_FeedbackRoutineBegin(snapshot));
      trials_2LoopScheduler.add(Letter_FeedbackRoutineEachFrame());
      trials_2LoopScheduler.add(Letter_FeedbackRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Block;
function BlockLoopBegin(BlockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Block'
    });
    psychoJS.experiment.addLoop(Block); // add the loop to the experiment
    currentLoop = Block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of Block) {
      snapshot = Block.getSnapshot();
      BlockLoopScheduler.add(importConditions(snapshot));
      BlockLoopScheduler.add(reset_MixedRoutineBegin(snapshot));
      BlockLoopScheduler.add(reset_MixedRoutineEachFrame());
      BlockLoopScheduler.add(reset_MixedRoutineEnd(snapshot));
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      BlockLoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      BlockLoopScheduler.add(trials_3LoopScheduler);
      BlockLoopScheduler.add(trials_3LoopEnd);
      BlockLoopScheduler.add(BlockLoopEndIteration(BlockLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: switchInterval, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(Mixed_TaskRoutineBegin(snapshot));
      trials_3LoopScheduler.add(Mixed_TaskRoutineEachFrame());
      trials_3LoopScheduler.add(Mixed_TaskRoutineEnd(snapshot));
      trials_3LoopScheduler.add(Mixed_FeedbackRoutineBegin(snapshot));
      trials_3LoopScheduler.add(Mixed_FeedbackRoutineEachFrame());
      trials_3LoopScheduler.add(Mixed_FeedbackRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function BlockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function BlockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_allKeys;
var InstructionComponents;
function InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction' ---
    t = 0;
    InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    instr_image.setImage((("stimuli/instructions" + slideN.toString()) + ".png"));
    // keep track of which components have finished
    InstructionComponents = [];
    InstructionComponents.push(key_resp);
    InstructionComponents.push(back_img);
    InstructionComponents.push(instr_image);
    
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction' ---
    // get current time
    t = InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right', 'q', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *back_img* updates
    if (t >= 0.0 && back_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img.tStart = t;  // (not accounting for frame time here)
      back_img.frameNStart = frameN;  // exact frame index
      
      back_img.setAutoDraw(true);
    }
    
    
    // *instr_image* updates
    if (t >= 0.0 && instr_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_image.tStart = t;  // (not accounting for frame time here)
      instr_image.frameNStart = frameN;  // exact frame index
      
      instr_image.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction' ---
    for (const thisComponent of InstructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    if ((key_resp.keys === "left")) {
        slideN -= 1;
    } else {
        if ((key_resp.keys === "right")) {
            slideN += 1;
        } else {
            if ((key_resp.keys === "space")) {
                slideN += 1;
            } else {
                if ((key_resp.keys === "q")) {
                    Instruction_Loop.finished = true;
                }
            }
        }
    }
    if ((slideN < minSlideN)) {
        slideN = minSlideN;
    } else {
        if ((slideN > maxSlideN)) {
            slideN = maxSlideN;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var ReadyNumbersComponents;
function ReadyNumbersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ReadyNumbers' ---
    t = 0;
    ReadyNumbersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ReadyNumbers.started', globalClock.getTime());
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    ReadyNumbersComponents = [];
    ReadyNumbersComponents.push(back_img_6);
    ReadyNumbersComponents.push(Instr_numbers_Only);
    ReadyNumbersComponents.push(key_resp_2);
    
    for (const thisComponent of ReadyNumbersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ReadyNumbersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ReadyNumbers' ---
    // get current time
    t = ReadyNumbersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_6* updates
    if (t >= 0.0 && back_img_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_6.tStart = t;  // (not accounting for frame time here)
      back_img_6.frameNStart = frameN;  // exact frame index
      
      back_img_6.setAutoDraw(true);
    }
    
    
    // *Instr_numbers_Only* updates
    if (t >= 0.0 && Instr_numbers_Only.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_numbers_Only.tStart = t;  // (not accounting for frame time here)
      Instr_numbers_Only.frameNStart = frameN;  // exact frame index
      
      Instr_numbers_Only.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ReadyNumbersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ReadyNumbersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ReadyNumbers' ---
    for (const thisComponent of ReadyNumbersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ReadyNumbers.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "ReadyNumbers" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var basePos;
var bottomQuadrants;
var number;
var letter;
var selectedQuadrant;
var stimPos;
var correctKey;
var _NumberResponse_allKeys;
var NumberTask_PracticeComponents;
function NumberTask_PracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NumberTask_Practice' ---
    t = 0;
    NumberTask_PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('NumberTask_Practice.started', globalClock.getTime());
    // Run 'Begin Routine' code from NumberTask_Code
    basePos = 0.125;
    bottomQuadrants = [[(- basePos), (- basePos)], [basePos, (- basePos)]];
    function get_new_combination(previousNumber, previousLetter) {
        var newLetter, newNumber;
        util.shuffle(bottomQuadrants);
        util.shuffle(number);
        util.shuffle(letter);
        newNumber = number[0];
        newLetter = letter[0];
        while (((newNumber === previousNumber) || (newLetter === previousLetter))) {
            util.shuffle(number);
            util.shuffle(letter);
            newNumber = number[0];
            newLetter = letter[0];
        }
        return [newNumber, newLetter];
    }
    number = ["1", "2", "3", "4", "5", "6", "7", "8"];
    letter = ["A", "E", "I", "U", "G", "M", "K", "R"];
    [number, letter] = get_new_combination(previousNumber, previousLetter);
    selectedQuadrant = bottomQuadrants[0];
    stimPos = selectedQuadrant;
    if (((Number.parseInt(number) % 2) === 0)) {
        correctKey = "right";
    } else {
        correctKey = "left";
    }
    
    NumberStim.setPos(stimPos);
    NumberStim.setText((letter + number.toString()));
    NumberResponse.keys = undefined;
    NumberResponse.rt = undefined;
    _NumberResponse_allKeys = [];
    // keep track of which components have finished
    NumberTask_PracticeComponents = [];
    NumberTask_PracticeComponents.push(back_img_2);
    NumberTask_PracticeComponents.push(grid);
    NumberTask_PracticeComponents.push(NumberStim);
    NumberTask_PracticeComponents.push(NumberResponse);
    
    for (const thisComponent of NumberTask_PracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NumberTask_PracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NumberTask_Practice' ---
    // get current time
    t = NumberTask_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_2* updates
    if (t >= 0.0 && back_img_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_2.tStart = t;  // (not accounting for frame time here)
      back_img_2.frameNStart = frameN;  // exact frame index
      
      back_img_2.setAutoDraw(true);
    }
    
    
    // *grid* updates
    if (t >= 0.0 && grid.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid.tStart = t;  // (not accounting for frame time here)
      grid.frameNStart = frameN;  // exact frame index
      
      grid.setAutoDraw(true);
    }
    
    
    // *NumberStim* updates
    if (t >= 0.0 && NumberStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NumberStim.tStart = t;  // (not accounting for frame time here)
      NumberStim.frameNStart = frameN;  // exact frame index
      
      NumberStim.setAutoDraw(true);
    }
    
    
    // *NumberResponse* updates
    if (t >= 0.0 && NumberResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NumberResponse.tStart = t;  // (not accounting for frame time here)
      NumberResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { NumberResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { NumberResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { NumberResponse.clearEvents(); });
    }
    
    if (NumberResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = NumberResponse.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _NumberResponse_allKeys = _NumberResponse_allKeys.concat(theseKeys);
      if (_NumberResponse_allKeys.length > 0) {
        NumberResponse.keys = _NumberResponse_allKeys[_NumberResponse_allKeys.length - 1].name;  // just the last key pressed
        NumberResponse.rt = _NumberResponse_allKeys[_NumberResponse_allKeys.length - 1].rt;
        NumberResponse.duration = _NumberResponse_allKeys[_NumberResponse_allKeys.length - 1].duration;
        // was this correct?
        if (NumberResponse.keys == correctKey) {
            NumberResponse.corr = 1;
        } else {
            NumberResponse.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NumberTask_PracticeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NumberTask_PracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NumberTask_Practice' ---
    for (const thisComponent of NumberTask_PracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NumberTask_Practice.stopped', globalClock.getTime());
    // Run 'End Routine' code from NumberTask_Code
    previousNumber = number;
    previousLetter = letter;
    
    // was no response the correct answer?!
    if (NumberResponse.keys === undefined) {
      if (['None','none',undefined].includes(correctKey)) {
         NumberResponse.corr = 1;  // correct non-response
      } else {
         NumberResponse.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(NumberResponse.corr, level);
    }
    psychoJS.experiment.addData('NumberResponse.keys', NumberResponse.keys);
    psychoJS.experiment.addData('NumberResponse.corr', NumberResponse.corr);
    if (typeof NumberResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('NumberResponse.rt', NumberResponse.rt);
        psychoJS.experiment.addData('NumberResponse.duration', NumberResponse.duration);
        routineTimer.reset();
        }
    
    NumberResponse.stop();
    // the Routine "NumberTask_Practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var errorImagePos;
var feedbackText;
var showErrorImage;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from FeedBack_Code
    basePos = 0.125;
    if ((stimPos[1] > 0)) {
        errorImagePos = [(0.125 + 0.25), basePos];
    } else {
        errorImagePos = [((- 0.125) + 0.25), (- basePos)];
    }
    if (NumberResponse.corr) {
        feedbackText = "\u6b63\u78ba!";
        showErrorImage = false;
    } else {
        feedbackText = "\u932f\u8aa4!";
        showErrorImage = true;
    }
    
    FeedBack_NumberTask.setText(feedbackText);
    ErrorImage.setPos([0.5, (- 0.125)]);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(back_img_3);
    FeedbackComponents.push(FeedBack_NumberTask);
    FeedbackComponents.push(ErrorImage);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_3* updates
    if (t >= 0.0 && back_img_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_3.tStart = t;  // (not accounting for frame time here)
      back_img_3.frameNStart = frameN;  // exact frame index
      
      back_img_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (back_img_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      back_img_3.setAutoDraw(false);
    }
    
    
    // *FeedBack_NumberTask* updates
    if (t >= 0.0 && FeedBack_NumberTask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FeedBack_NumberTask.tStart = t;  // (not accounting for frame time here)
      FeedBack_NumberTask.frameNStart = frameN;  // exact frame index
      
      FeedBack_NumberTask.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FeedBack_NumberTask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FeedBack_NumberTask.setAutoDraw(false);
    }
    
    
    // *ErrorImage* updates
    if ((showErrorImage) && ErrorImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ErrorImage.tStart = t;  // (not accounting for frame time here)
      ErrorImage.frameNStart = frameN;  // exact frame index
      
      ErrorImage.setAutoDraw(true);
    }
    
    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((ErrorImage.status === PsychoJS.Status.STARTED || ErrorImage.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      ErrorImage.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var ReadyLettersComponents;
function ReadyLettersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ReadyLetters' ---
    t = 0;
    ReadyLettersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ReadyLetters.started', globalClock.getTime());
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    ReadyLettersComponents = [];
    ReadyLettersComponents.push(back_img_7);
    ReadyLettersComponents.push(Readyletter_img);
    ReadyLettersComponents.push(key_resp_3);
    
    for (const thisComponent of ReadyLettersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ReadyLettersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ReadyLetters' ---
    // get current time
    t = ReadyLettersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_7* updates
    if (t >= 0.0 && back_img_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_7.tStart = t;  // (not accounting for frame time here)
      back_img_7.frameNStart = frameN;  // exact frame index
      
      back_img_7.setAutoDraw(true);
    }
    
    
    // *Readyletter_img* updates
    if (t >= 0.0 && Readyletter_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Readyletter_img.tStart = t;  // (not accounting for frame time here)
      Readyletter_img.frameNStart = frameN;  // exact frame index
      
      Readyletter_img.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ReadyLettersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ReadyLettersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ReadyLetters' ---
    for (const thisComponent of ReadyLettersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ReadyLetters.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "ReadyLetters" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var quadrants;
var _LetterResponse_allKeys;
var LetterTask_PracticeComponents;
function LetterTask_PracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'LetterTask_Practice' ---
    t = 0;
    LetterTask_PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('LetterTask_Practice.started', globalClock.getTime());
    // Run 'Begin Routine' code from LetterTask_Code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    number = ["1", "2", "3", "4", "5", "6", "7", "8"];
    letter = ["A", "E", "I", "U", "G", "M", "K", "R"];
    basePos = 0.125;
    quadrants = [[basePos, basePos], [(- basePos), basePos]];
    function get_new_combination(previousNumber, previousLetter) {
        var newLetter, newNumber;
        util.shuffle(quadrants);
        util.shuffle(number);
        util.shuffle(letter);
        newNumber = number[0];
        newLetter = letter[0];
        while (((newNumber === previousNumber) || (newLetter === previousLetter))) {
            util.shuffle(number);
            util.shuffle(letter);
            newNumber = number[0];
            newLetter = letter[0];
        }
        return [newNumber, newLetter];
    }
    [number, letter] = get_new_combination(previousNumber, previousLetter);
    selectedQuadrant = quadrants[0];
    stimPos = selectedQuadrant;
    if ((stimPos[1] > 0)) {
        if (_pj.in_es6(letter, ["A", "E", "I", "U"])) {
            correctKey = "right";
        } else {
            correctKey = "left";
        }
    }
    
    LetterStim.setPos(stimPos);
    LetterStim.setText((letter + number.toString()));
    LetterResponse.keys = undefined;
    LetterResponse.rt = undefined;
    _LetterResponse_allKeys = [];
    // keep track of which components have finished
    LetterTask_PracticeComponents = [];
    LetterTask_PracticeComponents.push(back_img_5);
    LetterTask_PracticeComponents.push(grid_3);
    LetterTask_PracticeComponents.push(LetterStim);
    LetterTask_PracticeComponents.push(LetterResponse);
    
    for (const thisComponent of LetterTask_PracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function LetterTask_PracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'LetterTask_Practice' ---
    // get current time
    t = LetterTask_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_5* updates
    if (t >= 0.0 && back_img_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_5.tStart = t;  // (not accounting for frame time here)
      back_img_5.frameNStart = frameN;  // exact frame index
      
      back_img_5.setAutoDraw(true);
    }
    
    
    // *grid_3* updates
    if (t >= 0.0 && grid_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_3.tStart = t;  // (not accounting for frame time here)
      grid_3.frameNStart = frameN;  // exact frame index
      
      grid_3.setAutoDraw(true);
    }
    
    
    // *LetterStim* updates
    if (t >= 0.0 && LetterStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LetterStim.tStart = t;  // (not accounting for frame time here)
      LetterStim.frameNStart = frameN;  // exact frame index
      
      LetterStim.setAutoDraw(true);
    }
    
    
    // *LetterResponse* updates
    if (t >= 0.0 && LetterResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LetterResponse.tStart = t;  // (not accounting for frame time here)
      LetterResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { LetterResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { LetterResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { LetterResponse.clearEvents(); });
    }
    
    if (LetterResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = LetterResponse.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _LetterResponse_allKeys = _LetterResponse_allKeys.concat(theseKeys);
      if (_LetterResponse_allKeys.length > 0) {
        LetterResponse.keys = _LetterResponse_allKeys[_LetterResponse_allKeys.length - 1].name;  // just the last key pressed
        LetterResponse.rt = _LetterResponse_allKeys[_LetterResponse_allKeys.length - 1].rt;
        LetterResponse.duration = _LetterResponse_allKeys[_LetterResponse_allKeys.length - 1].duration;
        // was this correct?
        if (LetterResponse.keys == correctKey) {
            LetterResponse.corr = 1;
        } else {
            LetterResponse.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LetterTask_PracticeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LetterTask_PracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'LetterTask_Practice' ---
    for (const thisComponent of LetterTask_PracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('LetterTask_Practice.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (LetterResponse.keys === undefined) {
      if (['None','none',undefined].includes(correctKey)) {
         LetterResponse.corr = 1;  // correct non-response
      } else {
         LetterResponse.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(LetterResponse.corr, level);
    }
    psychoJS.experiment.addData('LetterResponse.keys', LetterResponse.keys);
    psychoJS.experiment.addData('LetterResponse.corr', LetterResponse.corr);
    if (typeof LetterResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('LetterResponse.rt', LetterResponse.rt);
        psychoJS.experiment.addData('LetterResponse.duration', LetterResponse.duration);
        routineTimer.reset();
        }
    
    LetterResponse.stop();
    // the Routine "LetterTask_Practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Letter_FeedbackComponents;
function Letter_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Letter_Feedback' ---
    t = 0;
    Letter_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Letter_Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from FeedBack_Code_2
    basePos = 0.125;
    if ((stimPos[1] > 0)) {
        errorImagePos = [(0.125 + 0.35), basePos];
    } else {
        errorImagePos = [((- 0.125) + 0.35), (- basePos)];
    }
    if (LetterResponse.corr) {
        feedbackText = "\u6b63\u78ba!";
        showErrorImage = false;
    } else {
        feedbackText = "\u932f\u8aa4!";
        showErrorImage = true;
    }
    
    FeedBack_LetterTask.setText(feedbackText);
    // keep track of which components have finished
    Letter_FeedbackComponents = [];
    Letter_FeedbackComponents.push(back_img_8);
    Letter_FeedbackComponents.push(FeedBack_LetterTask);
    Letter_FeedbackComponents.push(ErrorImage_2);
    
    for (const thisComponent of Letter_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Letter_FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Letter_Feedback' ---
    // get current time
    t = Letter_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_8* updates
    if (t >= 0.0 && back_img_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_8.tStart = t;  // (not accounting for frame time here)
      back_img_8.frameNStart = frameN;  // exact frame index
      
      back_img_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (back_img_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      back_img_8.setAutoDraw(false);
    }
    
    
    // *FeedBack_LetterTask* updates
    if (t >= 0.0 && FeedBack_LetterTask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FeedBack_LetterTask.tStart = t;  // (not accounting for frame time here)
      FeedBack_LetterTask.frameNStart = frameN;  // exact frame index
      
      FeedBack_LetterTask.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FeedBack_LetterTask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FeedBack_LetterTask.setAutoDraw(false);
    }
    
    
    // *ErrorImage_2* updates
    if ((showErrorImage) && ErrorImage_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ErrorImage_2.tStart = t;  // (not accounting for frame time here)
      ErrorImage_2.frameNStart = frameN;  // exact frame index
      
      ErrorImage_2.setAutoDraw(true);
    }
    
    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((ErrorImage_2.status === PsychoJS.Status.STARTED || ErrorImage_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      ErrorImage_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Letter_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Letter_FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Letter_Feedback' ---
    for (const thisComponent of Letter_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Letter_Feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var ReadyMixedComponents;
function ReadyMixedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ReadyMixed' ---
    t = 0;
    ReadyMixedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ReadyMixed.started', globalClock.getTime());
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    ReadyMixedComponents = [];
    ReadyMixedComponents.push(back_img_9);
    ReadyMixedComponents.push(ReadyMix_img);
    ReadyMixedComponents.push(key_resp_4);
    
    for (const thisComponent of ReadyMixedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ReadyMixedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ReadyMixed' ---
    // get current time
    t = ReadyMixedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_9* updates
    if (t >= 0.0 && back_img_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_9.tStart = t;  // (not accounting for frame time here)
      back_img_9.frameNStart = frameN;  // exact frame index
      
      back_img_9.setAutoDraw(true);
    }
    
    
    // *ReadyMix_img* updates
    if (t >= 0.0 && ReadyMix_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ReadyMix_img.tStart = t;  // (not accounting for frame time here)
      ReadyMix_img.frameNStart = frameN;  // exact frame index
      
      ReadyMix_img.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ReadyMixedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ReadyMixedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ReadyMixed' ---
    for (const thisComponent of ReadyMixedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ReadyMixed.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "ReadyMixed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialCounter;
var switchInterval;
var taskOrder;
var reset_MixedComponents;
function reset_MixedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reset_Mixed' ---
    t = 0;
    reset_MixedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('reset_Mixed.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    previousTask = null;
    trialCounter = 0;
    switchInterval = util.randint(3, 5);
    if (((Block.thisN % 2) === 0)) {
        taskOrder = "letter";
    } else {
        if (((Block.thisN % 2) === 1)) {
            taskOrder = "number";
        }
    }
    
    // keep track of which components have finished
    reset_MixedComponents = [];
    
    for (const thisComponent of reset_MixedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reset_MixedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reset_Mixed' ---
    // get current time
    t = reset_MixedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reset_MixedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reset_MixedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reset_Mixed' ---
    for (const thisComponent of reset_MixedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reset_Mixed.stopped', globalClock.getTime());
    // the Routine "reset_Mixed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var topPositions;
var bottomPositions;
var taskType;
var trialType;
var RT_list;
var trialtypelist;
var tasktypelist;
var acc_list;
var _MixedResponse_allKeys;
var Mixed_TaskComponents;
function Mixed_TaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Mixed_Task' ---
    t = 0;
    Mixed_TaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Mixed_Task.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    number = ["1", "2", "3", "4", "5", "6", "7", "8"];
    letter = ["A", "E", "I", "U", "G", "M", "K", "R"];
    basePos = 0.125;
    topPositions = [[(- basePos), basePos], [basePos, basePos]];
    bottomPositions = [[(- basePos), (- basePos)], [basePos, (- basePos)]];
    function get_new_combination(previousNumber, previousLetter) {
        var newLetter, newNumber;
        util.shuffle(topPositions);
        util.shuffle(bottomPositions);
        util.shuffle(number);
        util.shuffle(letter);
        newNumber = number[0];
        newLetter = letter[0];
        while (((newNumber === previousNumber) || (newLetter === previousLetter))) {
            util.shuffle(number);
            util.shuffle(letter);
            newNumber = number[0];
            newLetter = letter[0];
        }
        return [newNumber, newLetter];
    }
    [number, letter] = get_new_combination(previousNumber, previousLetter);
    if ((taskOrder === "letter")) {
        selectedQuadrant = topPositions[0];
    } else {
        if ((taskOrder === "number")) {
            selectedQuadrant = bottomPositions[0];
        }
    }
    stimPos = selectedQuadrant;
    if ((stimPos[1] > 0)) {
        taskType = "letter";
        if (_pj.in_es6(letter, ["A", "E", "I", "U"])) {
            correctKey = "right";
        } else {
            correctKey = "left";
        }
    } else {
        taskType = "number";
        if (((Number.parseInt(number) % 2) === 0)) {
            correctKey = "right";
        } else {
            correctKey = "left";
        }
    }
    if (((Block.thisN === 0) && (trials_3.thisN === 0))) {
        previousTask = taskType;
        trialType = "first";
        RT_list = [];
        trialtypelist = [];
        tasktypelist = [];
        acc_list = [];
    } else {
        if ((taskType === previousTask)) {
            trialType = "repeat";
        } else {
            trialType = "switch";
        }
        previousTask = taskType;
    }
    
    Task_switch_stim.setPos(stimPos);
    Task_switch_stim.setText((letter + number.toString()));
    MixedResponse.keys = undefined;
    MixedResponse.rt = undefined;
    _MixedResponse_allKeys = [];
    // keep track of which components have finished
    Mixed_TaskComponents = [];
    Mixed_TaskComponents.push(back_img_4);
    Mixed_TaskComponents.push(grid_2);
    Mixed_TaskComponents.push(Task_switch_stim);
    Mixed_TaskComponents.push(MixedResponse);
    
    for (const thisComponent of Mixed_TaskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Mixed_TaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Mixed_Task' ---
    // get current time
    t = Mixed_TaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_4* updates
    if (t >= 0.0 && back_img_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_4.tStart = t;  // (not accounting for frame time here)
      back_img_4.frameNStart = frameN;  // exact frame index
      
      back_img_4.setAutoDraw(true);
    }
    
    
    // *grid_2* updates
    if (t >= 0.0 && grid_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_2.tStart = t;  // (not accounting for frame time here)
      grid_2.frameNStart = frameN;  // exact frame index
      
      grid_2.setAutoDraw(true);
    }
    
    
    // *Task_switch_stim* updates
    if (t >= 0.0 && Task_switch_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Task_switch_stim.tStart = t;  // (not accounting for frame time here)
      Task_switch_stim.frameNStart = frameN;  // exact frame index
      
      Task_switch_stim.setAutoDraw(true);
    }
    
    
    // *MixedResponse* updates
    if (t >= 0.0 && MixedResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MixedResponse.tStart = t;  // (not accounting for frame time here)
      MixedResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { MixedResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { MixedResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { MixedResponse.clearEvents(); });
    }
    
    if (MixedResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = MixedResponse.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _MixedResponse_allKeys = _MixedResponse_allKeys.concat(theseKeys);
      if (_MixedResponse_allKeys.length > 0) {
        MixedResponse.keys = _MixedResponse_allKeys[_MixedResponse_allKeys.length - 1].name;  // just the last key pressed
        MixedResponse.rt = _MixedResponse_allKeys[_MixedResponse_allKeys.length - 1].rt;
        MixedResponse.duration = _MixedResponse_allKeys[_MixedResponse_allKeys.length - 1].duration;
        // was this correct?
        if (MixedResponse.keys == correctKey) {
            MixedResponse.corr = 1;
        } else {
            MixedResponse.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Mixed_TaskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Mixed_TaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Mixed_Task' ---
    for (const thisComponent of Mixed_TaskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Mixed_Task.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    psychoJS.experiment.addData("taskType", taskType);
    psychoJS.experiment.addData("trialType", trialType);
    RT_list.push(MixedResponse.rt);
    trialtypelist.push(trialType);
    tasktypelist.push(taskType);
    acc_list.push(MixedResponse.corr);
    previousNumber = number;
    previousLetter = letter;
    previousTask = taskType;
    
    // was no response the correct answer?!
    if (MixedResponse.keys === undefined) {
      if (['None','none',undefined].includes(correctKey)) {
         MixedResponse.corr = 1;  // correct non-response
      } else {
         MixedResponse.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(MixedResponse.corr, level);
    }
    psychoJS.experiment.addData('MixedResponse.keys', MixedResponse.keys);
    psychoJS.experiment.addData('MixedResponse.corr', MixedResponse.corr);
    if (typeof MixedResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('MixedResponse.rt', MixedResponse.rt);
        psychoJS.experiment.addData('MixedResponse.duration', MixedResponse.duration);
        routineTimer.reset();
        }
    
    MixedResponse.stop();
    // the Routine "Mixed_Task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var errorimgpth;
var Mixed_FeedbackComponents;
function Mixed_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Mixed_Feedback' ---
    t = 0;
    Mixed_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Mixed_Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from FeedBack_Code_3
    basePos = 0.125;
    if ((stimPos[1] > 0)) {
        errorImagePos = [(0.125 + 0.35), basePos];
        errorimgpth = "stimuli/task1.png";
    } else {
        errorImagePos = [(0.125 + 0.35), (- basePos)];
        errorimgpth = "stimuli/task2.png";
    }
    if (MixedResponse.corr) {
        feedbackText = "\u6b63\u78ba!";
        showErrorImage = false;
    } else {
        feedbackText = "\u932f\u8aa4!";
        showErrorImage = true;
    }
    
    FeedBack_LetterTask_2.setText(feedbackText);
    ErrorImage_3.setPos(errorImagePos);
    ErrorImage_3.setImage(errorimgpth);
    // keep track of which components have finished
    Mixed_FeedbackComponents = [];
    Mixed_FeedbackComponents.push(back_img_10);
    Mixed_FeedbackComponents.push(FeedBack_LetterTask_2);
    Mixed_FeedbackComponents.push(ErrorImage_3);
    
    for (const thisComponent of Mixed_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Mixed_FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Mixed_Feedback' ---
    // get current time
    t = Mixed_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_10* updates
    if (t >= 0.0 && back_img_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_10.tStart = t;  // (not accounting for frame time here)
      back_img_10.frameNStart = frameN;  // exact frame index
      
      back_img_10.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (back_img_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      back_img_10.setAutoDraw(false);
    }
    
    
    // *FeedBack_LetterTask_2* updates
    if (t >= 0.0 && FeedBack_LetterTask_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FeedBack_LetterTask_2.tStart = t;  // (not accounting for frame time here)
      FeedBack_LetterTask_2.frameNStart = frameN;  // exact frame index
      
      FeedBack_LetterTask_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FeedBack_LetterTask_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FeedBack_LetterTask_2.setAutoDraw(false);
    }
    
    
    // *ErrorImage_3* updates
    if ((showErrorImage) && ErrorImage_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ErrorImage_3.tStart = t;  // (not accounting for frame time here)
      ErrorImage_3.frameNStart = frameN;  // exact frame index
      
      ErrorImage_3.setAutoDraw(true);
    }
    
    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((ErrorImage_3.status === PsychoJS.Status.STARTED || ErrorImage_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      ErrorImage_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Mixed_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Mixed_FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Mixed_Feedback' ---
    for (const thisComponent of Mixed_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Mixed_Feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    // Provided arrays
    let RT_array = RT_list;
    let trialarray = trialtypelist;
    let taskarray = tasktypelist;
    let acc_array = acc_list;
    
    // Initialize variables
    let repeat_rts = [];
    let switch_rts = [];
    let repeat_correct = 0;
    let switch_correct = 0;
    let repeat_total = 0;
    let switch_total = 0;
    
    // Calculate metrics based on trial type and correctness
    for (let i = 0; i < trialarray.length; i++) {
        if (acc_array[i] === 1) {  // Only include correct trials
            if (trialarray[i] === "repeat") {
                repeat_rts.push(RT_array[i]);
                repeat_correct += 1;
                repeat_total += 1;
            } else if (trialarray[i] === "switch") {
                switch_rts.push(RT_array[i]);
                switch_correct += 1;
                switch_total += 1;
            }
        } else {
            if (trialarray[i] === "repeat") {
                repeat_total += 1;
            } else if (trialarray[i] === "switch") {
                switch_total += 1;
            }
        }
    }
    
    // Calculate means for correct trials only and convert to milliseconds
    let mean_repeat_rt = (repeat_rts.length > 0) ? (repeat_rts.reduce((a, b) => a + b, 0) / repeat_rts.length) * 1000 : 0;
    let mean_switch_rt = (switch_rts.length > 0) ? (switch_rts.reduce((a, b) => a + b, 0) / switch_rts.length) * 1000 : 0;
    
    // Calculate accuracy
    let repeat_accuracy = (repeat_total > 0) ? ((repeat_correct / repeat_total) * 100) : 0;
    let switch_accuracy = (switch_total > 0) ? ((switch_correct / switch_total) * 100) : 0;
    
    // Calculate switch cost based on correct trials and convert to milliseconds
    let switch_cost = (mean_switch_rt - mean_repeat_rt);
    
    // Store metrics in the experiment
    psychoJS.experiment.addData('mean_repeat_rt', mean_repeat_rt);
    psychoJS.experiment.addData('mean_switch_rt', mean_switch_rt);
    psychoJS.experiment.addData('repeat_accuracy', repeat_accuracy);
    psychoJS.experiment.addData('switch_accuracy', switch_accuracy);
    psychoJS.experiment.addData('switch_cost', switch_cost);
    
    // Combine metrics into one text component
    let performance_report_text = `重複試驗平均反應時間: ${mean_repeat_rt.toFixed(2)} 毫秒\n\n` +
                                  `切換試驗平均反應時間: ${mean_switch_rt.toFixed(2)} 毫秒\n\n` +
                                  `重複試驗正確率: ${repeat_accuracy.toFixed(2)}%\n\n` +
                                  `切換試驗正確率: ${switch_accuracy.toFixed(2)}%\n\n` +
                                  `切換成本: ${switch_cost.toFixed(2)} 毫秒`;
    
    Thank_you.setPos([0, 0]);
    Thank_you.setText(performance_report_text);
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(back_img_11);
    endComponents.push(Thank_you);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_img_11* updates
    if (t >= 0.0 && back_img_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_img_11.tStart = t;  // (not accounting for frame time here)
      back_img_11.frameNStart = frameN;  // exact frame index
      
      back_img_11.setAutoDraw(true);
    }
    
    
    // *Thank_you* updates
    if (t >= 0.0 && Thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Thank_you.tStart = t;  // (not accounting for frame time here)
      Thank_you.frameNStart = frameN;  // exact frame index
      
      Thank_you.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
