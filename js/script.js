'use strict';

$ (function() {

  let $testItems = {
    testTitle: "Тест по программированию",
    questions: [
      {title: "С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?",
       answers: ["Storage", "localStorage", "cookies"],
       correctAnswer: ["localStorage"]
     },
      {title: "С помощью какого метода можно сохранить данные в локальное хранилище?",
      answers: ["saveItem()", "setItem()", "saveToLocalStorage()", "save()"],
      correctAnswer: ["setItem()"]
			},
      {title: "Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)?",
      answers: ["null", "undefined", "window"],
      correctAnswer: ["undefined"]
     }
    ]
};


// Local storage

  localStorage.setItem('aq', JSON.stringify($testItems));

  let $test = JSON.parse(localStorage.getItem('aq'));

  localStorage.clear;

// Template

  let $tmpl = _.template(document.getElementById('test-form').innerHTML);

  let $result = $tmpl($test);

  let $target = document.getElementById('wrapper');

  $target.innerHTML = $result;

// test logics

  function checkAnswers() {

    let $answers = $('[type=checkbox]:checked').length;
    let $correctlyAnswered = $('.correct-answer:checked').length;

    function countCorrectanswers() {
        let number = 0;
        for (let i=0; i<$test.questions.length; i++) {
        number += $test.questions[i].correctAnswer.length;
        }
        return number;
    };

    let $numberOfCorrectAnswers = countCorrectanswers();

    let scores = 0;
    if ($answers > $numberOfCorrectAnswers) {
      scores = Math.round(($correctlyAnswered / ($answers-$numberOfCorrectAnswers+1) / $numberOfCorrectAnswers) * 100) + '%';
    } else {
      scores = Math.round($correctlyAnswered / $numberOfCorrectAnswers * 100) + '%';
    }

    let $result = 'Результат Вашего теста ' + $correctlyAnswered + '. Общий бал ' + scores;
    let $modal = $('<div class="modal"><p>' + $result + '<p></div>');
    let $overlay = $('<div class="overlay"></div>')

    $overlay.one('click', hideModal);
    $modal.one('click', hideModal);

    function hideModal() {
        $('[type=checkbox]').prop('checked', false);
        $modal.remove();
        $overlay.remove();
    }

    let $body = $('body')

    $body.append($overlay);
    $body.append($modal);
}

  $('[type=submit]').on('click', checkAnswers);

});
