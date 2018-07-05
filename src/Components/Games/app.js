$(document).ready(function() {
  console.log('ready!')
  function onLoadHide() {
    $('#greenRecruiter').hide()
    $('#redRecruiter').hide()
    $('#phaseInstructions').hide()
    $('#phaseInstructionsOne').hide()
    $('#phaseTwoInstructionsDiv').hide()
    $('#phaseInstructionsThree').hide()
    $('#phaseInstructionsFour').hide()
    $('#passInstructions').hide()
    $('#passInstructionsOne').hide()
    $('#passInstructionsTwo').hide()
    $('#gameButtonDiv').hide()
    $('#codeForm').hide()
    $('#spongeBob').hide()
    $('#frame-1').hide()
    $('#frame-2').hide()
    $('#frame-3').hide()
    $('#frame-4').hide()
    $('#frame-5').hide()
    $('#frame-6').hide()
    $('.enemySpriteDisplay').hide()
    $('.enemySpriteText').hide()
    $('#applicantSpriteIcon').hide()
    $('#cheatOne').hide()
    $('#cheatTwo').hide()
    $('#cheatThree').hide()
  }
  function hideStatusBarFillers() {
    $('#resumeHpBarFillerLeft').hide()
    $('#resumeHpBarFillerOne').hide()
    $('#resumeHpBarFillerTwo').hide()
    $('#resumeHpBarFillerThree').hide()
    $('#resumeHpBarFillerRight').hide()
    $('#appleHpBarFillerLeft').hide()
    $('#appleHpBarFillerOne').hide()
    $('#appleHpBarFillerTwo').hide()
    $('#appleHpBarFillerThree').hide()
    $('#appleHpBarFillerRight').hide()
  }
  onLoadHide()
  hideStatusBarFillers()
  let questions = {
    q1: [
      'Which answer correctly identifies JavaScript primitive data types?',
      [
        'string, null, value, boolean, symbol, and undefined',
        'string, number, boolean, null, undefined, and symbol',
        'undefined, boolean, null, static, string, and value',
        'undefined, boolean, number, string, undefined, and object',
        '1a',
        '1b',
        '1c',
        '1d',
        'one',
        false,
        true,
        false,
        false,
        'radio',
        '1'
      ]
    ],
    q2: [
      'What is the difference between double equals (==) and triple equals (===) in JavaScript?',
      [
        'Double equals is used to initialize variables and triple equals reassigns variable values.',
        'Double equals checks a variables assigned value and triple equals checks object key-value pairs.',
        'Double equals compares value and triple equals compares value and type.',
        'Double equals are not used in JavaScript.',
        '2a',
        '2b',
        '2c',
        '2d',
        'two',
        false,
        false,
        true,
        false,
        'radio',
        '2'
      ]
    ],
    q3: [
      'What is the difference between let and const in JavaScript?',
      [
        'Const is a read only variable and let is a read and write variable.',
        'Const initializes a variable in the global scope and let initializes a variable in the local scope.',
        'Const polutes the global scope whereas let does not.',
        'Const is a read and write variable and let is a read only variable.',
        '3a',
        '3b',
        '3c',
        '3d',
        'three',
        true,
        false,
        false,
        false,
        'radio',
        '3'
      ]
    ],
    q4: [
      'Which of the following is NOT an anonymous JavaScript function?',
      [
        '( ) => { return 4 * 4 };',
        'function returnRemainder( ) { return 3 % 1 };',
        'catName => {return catName};',
        'const myFunction = ( myAge ) => { return myAge * 2};',
        '4a',
        '4b',
        '4c',
        '4d',
        'four',
        false,
        true,
        false,
        false,
        'radio',
        '4'
      ]
    ],
    q5: [
      'Which of the four pillars of Object Oriented Programming is the process of exposing the essential features of an entity while hiding other irrelevant detail?',
      [
        'Abstraction',
        'Encapsulation',
        'Polymorphism',
        'Inheritance',
        '5a',
        '5b',
        '5c',
        '5d',
        'five',
        true,
        false,
        false,
        false,
        'radio',
        '5'
      ]
    ],
    q6: [
      'Which answer best describes the JavaScript closure scope chain access?',
      [
        'Local only.',
        'Global only.',
        'Global and local only.',
        'Global, local, and the containing function.',
        '6a',
        '6b',
        '6c',
        '6d',
        'six',
        false,
        false,
        false,
        true,
        'radio',
        '6'
      ]
    ],
    q7: [
      'Which term is a parameter in the following JavaScript function: const pay = (cash, hours) => { return cash * hours }?',
      [
        'Pay',
        'Return',
        'Const',
        'Cash',
        '7a',
        '7b',
        '7c',
        '7d',
        'seven',
        false,
        false,
        false,
        true,
        'radio',
        '7'
      ]
    ],
    q8: [
      'Which of the following is an JavaScript array of elements?',
      [
        'const collection = “1, 2, 3, 4, 5”;',
        'const collection = [ 1, 2, 3, 4, 5 ];',
        'const collection = { a: 1, b: 2, c: 3, d: 4, e: 5 };',
        'const collection = Symbol( “1, 2, 3, 4, 5” );',
        '8a',
        '8b',
        '8c',
        '8d',
        'eight',
        false,
        true,
        false,
        false,
        'radio',
        '8'
      ]
    ],
    q9: [
      'What is the difference between null and undefined in JavaScript?',
      [
        'Null is an assignment value and undefined is the default value for declared and unassigned variables.',
        'Null resolves to 0 and undefined resolves to its most previous assigned value.',
        'Undefined values can be defined whereas null values can only be reassigned.',
        'There is no difference because both values resolve to 0 during runtime.',
        '9a',
        '9b',
        '9c',
        '9d',
        'nine',
        true,
        false,
        false,
        false,
        'radio',
        '9'
      ]
    ],
    q10: [
      'A JavaScript boolean represents one of two values, either true or false?',
      [
        'True',
        'False',
        '',
        '',
        '10a',
        '10b',
        '',
        '',
        'ten',
        true,
        false,
        '',
        '',
        'radio',
        '10',
        'hidden',
        'hidden'
      ]
    ]
  }
  class Applicant {
    constructor() {
      this._resumeHP = 0
      this._appleHP = 0
      this._cash = 10000
      this._animated = 0
    }
    get resumeHP() {
      return this._resumeHP
    }
    get appleHP() {
      return this._appleHP
    }
    get cash() {
      return this._cash
    }
    incrementResumeHP() {
      this._resumeHP += 1
    }
    decrementResumeHP() {
      this._resumeHP -= 1
    }
    resetResumeHP() {
      this._resumeHP = 0
    }
    incrementAppleHP() {
      this._appleHP += 1
    }
    decrementAppleHP() {
      this._appleHP -= 1
    }
    resetAppleHP() {
      this._appleHP = 0
    }
    decrementCash() {
      this._cash -= 200
    }
    get animation() {
      return this._animated
    }
    incrementAnimation() {
      this._animated += 1
    }
    resetAnimation() {
      this._animated = 0
    }
  }
  class Recruiter {
    constructor(quality) {
      this._quality = quality
    }
    get quality() {
      return this._quality
    }
  }
  class Questionnaire {
    constructor(questionAnswerObject) {
      this._questionAnswerObject = questionAnswerObject
      this._answeredCorrectly = 0
    }
    get questionAnswerObject() {
      return this._questionAnswerObject
    }
    get answeredCorrectly() {
      return this._answeredCorrectly
    }
    incrementAnsweredCorrectly(numCorrect) {
      this._answeredCorrectly += numCorrect
    }
  }
  let applicant = new Applicant()
  let questionnaire = new Questionnaire(questions)
  function reduceCash() {
    applicant.decrementCash()
    $('#cashText').text(`$${applicant.cash}`)
    console.log(applicant.cash)
  }
  let quality = () => {
    let returnRandom = () => {
      return Math.floor(Math.random() * 100 + 1)
    }
    if (returnRandom() >= 50) {
      return true
    } else {
      return false
    }
  }

  $('#cashText').text(`$${applicant.cash}`)
  $('#play').click(() => {
    console.log('playing')
    const reduceCashInterval = setInterval(reduceCash, 10000)
    const newRecruiterInterval = setInterval(newRecruiter, 2000)
    const checkProgressInterval = setInterval(checkProgress, 500)
    const animateApplicantInterval = setInterval(animateApplicant, 125)
    $('#cheatOne').show()
    $('#startInstructions').hide()
    $('#play').hide()
    $('#gameButtonDiv').show()
    $('#submitQuestionnaire').hide()
    $('#submitFizzBuzz').hide()
    $('#applicantSprite').show()
    $('#applicantSpriteIcon').show()
    $('.enemySpriteDisplay').show()
    $('.enemySpriteText').show()
    newRecruiter()
    function checkProgress() {
      if (applicant.resumeHP === 5 && applicant.appleHP === 5) {
        clearInterval(newRecruiterInterval)
        clearInterval(checkProgressInterval)
        clearInterval(animateApplicantInterval)
        phoneInterview()
        startQuestionnaire()
      }
    }
  })
  function animateApplicant() {
    applicant.incrementAnimation()
    switch (applicant.animation) {
      case 1:
        $('#frame-6').hide()
        $('#frame-1').show()
        break
      case 2:
        $('#frame-1').hide()
        $('#frame-2').show()
        break
      case 3:
        $('#frame-2').hide()
        $('#frame-3').show()
        break
      case 4:
        $('#frame-3').hide()
        $('#frame-4').show()
        break
      case 5:
        $('#frame-4').hide()
        $('#frame-5').show()
      case 6:
        $('#frame-5').hide()
        $('#frame-6').show()
        applicant.resetAnimation()
        break
    }
  }
  $('#resumeButton').click(() => {
    if (applicant.resumeHP < 5 && isGreenRecruiter === true) {
      applicant.incrementResumeHP()
      console.log(applicant.resumeHP)
      isGreenRecruiter = ''
      $('#greenRecruiter').animate({ opacity: 0 }, 400, () => {
        $('#greenRecruiter').hide()
        $('#greenRecruiter').animate({ opacity: 1 }, 0)
      })
      resumeHPAdd()
    } else if (applicant.resumeHP > 0 && isGreenRecruiter === false) {
      resumeHPRemove()
      applicant.decrementResumeHP()
      console.log(applicant.resumeHP)
      isGreenRecruiter = ''
      $('#redRecruiter').animate({ opacity: 0.1 }, 400, () => {
        $('#redRecruiter').hide()
        $('#redRecruiter').animate({ opacity: 1 }, 0)
      })
    } else {
      $('#greenRecruiter').hide()
      $('#redRecruiter').hide()
    }
  })
  $('#appleButton').click(() => {
    if (applicant.appleHP < 5 && isGreenRecruiter === false) {
      applicant.incrementAppleHP()
      console.log(applicant.appleHP)
      isGreenRecruiter = ''
      $('#redRecruiter').animate({ opacity: 0.1 }, 400, () => {
        $('#redRecruiter').hide()
        $('#redRecruiter').animate({ opacity: 1 }, 0)
      })
      appleHPAdd()
    } else if (applicant.appleHP > 0 && isGreenRecruiter === true) {
      appleHPRemove()
      applicant.decrementAppleHP()
      console.log(applicant.appleHP)
      isGreenRecruiter = ''
      $('#greenRecruiter').animate({ opacity: 0 }, 400, () => {
        $('#greenRecruiter').hide()
        $('#greenRecruiter').animate({ opacity: 1 }, 0)
      })
    } else {
      $('#greenRecruiter').hide()
      $('#redRecruiter').hide()
    }
  })
  $('#submitQuestionnaire').click(() => {
    console.log('You clicked submit!')
    $('#submitQuestionnaire').hide()
    const questionArray = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten'
    ]
    const answerArray = []
    questionArray.map(element => answerArray.push($(`input[name=${element}]:checked`).val()))
    const answeredCorrectly = answerArray.filter(answer => answer === 'true')
    if (answeredCorrectly.length >= 7) {
      passedQuestionnaire()
    } else {
      failedQuestionnaire()
    }
  })
  $('#submitFizzBuzz').click(() => {
    const passed = true
    if (passed === true) {
      $('h3:first').show()
      $('#codeForm').hide()
      $('#instructions').show()
      $('#passInstructions').show()
      $('#passInstructionsOne').show()
      $('#submitFizzBuzz').hide()
      let passInstructionsOne = setTimeout(passInstructionsOneTimeout, 4000)
      let passInstructionsTwo = setTimeout(passInstructionsTwoTimeout, 9000)
      let startOver = setTimeout(startOverTimeout, 13000)
      function passInstructionsOneTimeout() {
        $('#passInstructionsOne').hide()
        $('#spongeBob').show()
      }
      function passInstructionsTwoTimeout() {
        $('#spongeBob').hide()
        $('#passInstructionsTwo').show()
      }
      function startOverTimeout() {
        window.location.reload(false)
      }
    } else {
      $('#submitFizzBuzz').hide()
      $('#resumeButton').show()
      $('#appleButton').show()
      hideStatusBarFillers()
      applicant.resetResumeHP()
      applicant.resetAppleHP()
      failedRestart()
    }
  })
  $('#cheatOne').click(() => {
    phoneInterview()
    startQuestionnaire()
    console.log('You cheater, you!')
  })
  $('#cheatTwo').click(() => {
    passedQuestionnaire()
    $('#cheatTwo').hide()
    $('#cheatThree').show()
    $('#submitQuestionnaire').hide()
    console.log('You cheater, you!')
  })
  $('#cheatThree').click(() => {
    $('#submitFizzBuzz').click()
    $('#cheatThree').hide()
    console.log('You cheater, you!')
  })
  function greenRecruiter() {
    let greenBlinkPhaseOne = setTimeout(blinkPhaseOne, 875)
    let greenBlinkPhaseTwo = setTimeout(blinkPhaseTwo, 1125)
    $('#greenRecruiter').show()
    $('#greenRecruiter').animate({ opacity: 0 }, 0, () => {
      $('#greenRecruiter').animate({ opacity: 1 }, 400)
    })
    $('#greenRecruiterOpen').show()
    $('#greenRecruiterClosed').hide()
    function blinkPhaseOne() {
      $('#greenRecruiterOpen').hide()
      $('#greenRecruiterClosed').show()
    }
    function blinkPhaseTwo() {
      $('#greenRecruiterClosed').hide()
      $('#greenRecruiterOpen').show()
    }
  }
  function redRecruiter() {
    let redBlinkPhaseOne = setTimeout(blinkPhaseOne, 875)
    let redBlinkPhaseTwo = setTimeout(blinkPhaseTwo, 1125)
    $('#redRecruiter').animate({ opacity: 0 }, 0, () => {
      $('#redRecruiter').animate({ opacity: 1 }, 400)
    })
    $('#redRecruiter').show()
    $('#redRecruiterOpen').show()
    $('#redRecruiterClosed').hide()
    $('#redRecruiterWhack').hide()
    function blinkPhaseOne() {
      $('#redRecruiterOpen').hide()
      $('#redRecruiterClosed').show()
    }
    function blinkPhaseTwo() {
      $('#redRecruiterClosed').hide()
      $('#redRecruiterOpen').show()
    }
  }

  function newRecruiter() {
    $('#greenRecruiter').hide()
    $('#redRecruiter').hide()
    let newRecruiter = new Recruiter(quality())
    if (applicant.resumeHP < 5 || applicant.appleHP < 5) {
      if (newRecruiter.quality === true) {
        console.log('green recruiter sprite')
        greenRecruiter()
        isGreenRecruiter = true
      } else {
        console.log('red recruiter sprite')
        redRecruiter()
        isGreenRecruiter = false
      }
    }
  }
  function resumeHPAdd() {
    switch (applicant.resumeHP) {
      case 1:
        $('#resumeHpBarFillerLeft').show()
        break
      case 2:
        $('#resumeHpBarFillerOne').show()
        break
      case 3:
        $('#resumeHpBarFillerTwo').show()
        break
      case 4:
        $('#resumeHpBarFillerThree').show()
        break
      case 5:
        $('#resumeHpBarFillerRight').show()
        break
    }
  }
  function resumeHPRemove() {
    switch (applicant.resumeHP) {
      case 1:
        $('#resumeHpBarFillerLeft').hide()
        break
      case 2:
        $('#resumeHpBarFillerOne').hide()
        break
      case 3:
        $('#resumeHpBarFillerTwo').hide()
        break
      case 4:
        $('#resumeHpBarFillerThree').hide()
        break
      case 5:
        $('#resumeHpBarFillerRight').hide()
        break
    }
  }
  function appleHPRemove() {
    switch (applicant.appleHP) {
      case 1:
        $('#appleHpBarFillerLeft').hide()
        break
      case 2:
        $('#appleHpBarFillerOne').hide()
        break
      case 3:
        $('#appleHpBarFillerTwo').hide()
        break
      case 4:
        $('#appleHpBarFillerThree').hide()
        break
      case 5:
        $('#appleHpBarFillerRight').hide()
        break
    }
  }
  function appleHPAdd() {
    switch (applicant.appleHP) {
      case 1:
        $('#appleHpBarFillerLeft').show()
        break
      case 2:
        $('#appleHpBarFillerOne').show()
        break
      case 3:
        $('#appleHpBarFillerTwo').show()
        break
      case 4:
        $('#appleHpBarFillerThree').show()
        break
      case 5:
        $('#appleHpBarFillerRight').show()
        break
    }
  }
  function phoneInterview() {
    $('#gameTitle').hide()
    $('#phaseInstructionsOne').show()
    $('.enemySpriteDisplay').hide()
    $('.enemySpriteText').hide()
    $('h3:first').hide()
    $('#cheatOne').hide()
    $('#cheatTwo').show()
    hideApplicant()
    let phoneInterviewTimeout = setTimeout(phoneInterviewInstructionTimeout, 2000)
    $('#phaseTwoInstructionsDiv').show()
    function phoneInterviewInstructionTimeout() {
      $('#phaseInstructionsOne').hide()
    }
  }
  function onSubmitClearTimeout() {
    clearTimeout(phoneInterviewInstructionTimeout)
    clearTimeout(interviewInstructionsTimeout)
  }
  function startQuestionnaire() {
    $('#phaseInstructions').show()
    $('#resumeButton').hide()
    $('#appleButton').hide()
    $('#submitQuestionnaire').show()
    Object.values(questionnaire.questionAnswerObject).map(question => {
      $('#questionsDiv').append(`
        <div id="questionContainer">
          <p>${question[1][14]}) ${question[0]}</p>
          <div>
            <input type="${question[1][13]}" id="${question[1][4]}" name="${question[1][8]}" value="${question[1][9]}">
            <label for="${question[1][4]}">${question[1][0]}</label>
          </div>
          <div>
            <input type="${question[1][13]}" id="${question[1][5]}" name="${question[1][8]}" value="${question[1][10]}">
            <label for="${question[1][5]}">${question[1][1]}</label>
          </div>
          <div>
            <input ${question[1][15]} type="${question[1][13]}" id="${question[1][6]}" name="${question[1][8]}" value="${question[1][11]}">
            <label ${question[1][16]} for="${question[1][6]}">${question[1][2]}</label>
          </div>
          <div>
            <input ${question[1][15]} type="${question[1][13]}" id="${question[1][7]}" name="${question[1][8]}" value="${question[1][12]}">
            <label ${question[1][16]} for="${question[1][7]}">${question[1][3]}</label>
          </div>
        </div>
      `)
    })
  }
  function passedQuestionnaire() {
    let passTestTimeout = setTimeout(passedTest, 3000)
    function passedTest() {
      $('#phaseInstructionsFour').hide()
    }
    $('#phaseTwoInstructionsDiv').hide()
    $('#submitFizzBuzz').show()
    $('#resumeButton').hide()
    $('#appleButton').hide()
    $('#phaseInstructionsFour').show()
    $('#questionsDiv').empty()
    $('#instructions').hide()
    $('#phaseInstructionsFour').show()
    $('#codeForm').show()
  }
  function failedQuestionnaire() {
    const failedTestTimeout = setTimeout(failedTest, 3000)
    function failedTest() {
      $('#phaseInstructionsThree').hide()
    }
    $('#resumeButton').show()
    $('#appleButton').show()
    $('#phaseInstructionsThree').show()
    $('#questionsDiv').empty()
    hideStatusBarFillers()
    applicant.resetResumeHP()
    applicant.resetAppleHP()
    failedRestart()
  }
  function failedRestart() {
    $('#submitQuestionnaire').hide()
    $('#codeForm').hide()
    $('#instructions').show()
    $('#phaseInstructionsThree').show()
    failedRestartShowApplicant()
    const newRecruiterInterval = setInterval(newRecruiter, 2000)
    const checkProgressInterval = setInterval(checkProgress, 500)
    const hideInstructions = setTimeout(hideInstructionsTimeout, 3000)
    const animateApplicantInterval = setInterval(animateApplicant, 125)
    newRecruiter()
    function hideInstructionsTimeout() {
      $('#phaseInstructionsThree').hide()
    }
    function checkProgress() {
      if (applicant.resumeHP === 5 && applicant.appleHP === 5) {
        clearInterval(newRecruiterInterval)
        clearInterval(checkProgressInterval)
        clearInterval(animateApplicantInterval)
        phoneInterview()
        startQuestionnaire()
      }
    }
  }
  function failedRestartShowApplicant() {
    $('#enemySprites').show()
    $('#applicantSprite').show()
    $('.enemySpriteDisplay').show()
    $('.enemySpriteText').show()
  }
  function showApplicant() {
    $('#enemySprites').show()
    $('#applicantSprite').show()
    $('.enemySpriteDisplay').show()
    $('.enemySpriteText').show()
    $('#frame-1').show()
    $('#frame-2').show()
    $('#frame-3').show()
    $('#frame-4').show()
    $('#frame-5').show()
    $('#frame-6').show()
  }
  function hideApplicant() {
    $('#enemySprites').hide()
    $('#frame-1').hide()
    $('#frame-2').hide()
    $('#frame-3').hide()
    $('#frame-4').hide()
    $('#frame-5').hide()
    $('#frame-6').hide()
  }
  function evaluateApplicantCode() {
    const fizzBuzzArray = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
    const applicantInput = $('#fizzBuzzAnswer').val()
    const evaluator = new Function('input', 'return input')
    evaluator(applicantInput)
    fizzBuzz(fizzBuzzArray)
  }

  $('#tech').mouseenter(() => {
    $('#tech').hide()
    $('#stack').append(`
      <div id="stackdiv">
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>
        <i class="fab fa-node-js"></i>
        <i class="fab fa-react"></i>
        <i class="fab fa-aws"></i>
      </div>
    `)
  })
  $('#stack').mouseout(() => {
    $('#tech').show()
    $('#stackdiv').remove()
  })
  $('#resumeIcon').mouseenter(() => {
    $('#resumeIcon').hide()
    $('#resumeText').append(`
      <div id="resumeTextDiv">
        <a href="https://drive.google.com/open?id=1gtAjRko0TLO5CoZJkBvS2Xs1oa_FOl3B" target="_blank">Open Resume</a>
      </div>
    `)
  })
  $('#resumeText').mouseout(() => {
    $('#resumeIcon').show()
    $('#resumeTextDiv').remove()
  })
})

// function fizzBuzz(fizzBuzzArray) {
// fizzBuzzArray.map((element) => {
//   if (element % 15 === 0) {
//     return "fizzBuzz";
//   } else if (element % 5 === 0) {
//     return "buzz";
//   } else if (element % 3 === 0) {
//     return "fizz";
//   } else {
//     return element;
//   }
// });
// }
// return fizzBuzz(fizzBuzzArray);
