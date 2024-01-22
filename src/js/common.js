// document.addEventListener ("DOMContentLoaded", function () {
// window.scrollTo(0,
// document.documentElement.scrollHeight / 2
// );
// }) ;

$('.nav_fold_btn').click(function () {
  $('body').toggleClass('nav_fold');
});

// var btn = document.getElementsByClassName("btn");

// function handleClick(event) {
//   console.log(event.target);
//   console.log(event.target.classList);

//   if (event.target.classList[0] === "clicked") {
//     event.target.classList.remove("clicked");
//   } else {
//     for (var i = 0; i < btn.length; i++) {
//       btn[i].classList.remove("clicked");
//     }

//     event.target.classList.add("clicked");
//   }
// }

// function init() {
//   for (var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", handleClick);
//   }
// }

// init();

// var checkNum;
// function check(num){
// var obj = $('input:radio[name="buttons"]');
// if(checkNum==num){
// obj.eq(num).attr('checked',false);
// checkNum = null;
// }else{
// checkNum = num;
// }
// }

var form_btn = document.getElementsByClassName('form_btn');

function handleClick(event) {
  console.log(event.target);

  console.log(event.target.classList);

  if (event.target.classList[1] === 'clicked') {
    event.target.classList.remove('clicked');
  } else {
    for (var i = 0; i < form_btn.length; i++) {
      form_btn[i].classList.remove('clicked');
    }

    event.target.classList.add('clicked');
  }
}

function init() {
  for (var i = 0; i < form_btn.length; i++) {
    form_btn[i].addEventListener('click', handleClick);
  }
}

init();

$(document).ready(function () {
  $('.cctv_btn').click(function () {
    var modal = $(this).attr('data-modal-btn');

    $('.modal[data-modal=' + modal + ']').addClass('open');
  });

  $('.modal_close').click(function () {
    $(this).parents('.modal').removeClass('open');
  });
});
$(document).ready(function () {
  $('.module_add_btn').click(function () {
    var modal = $(this).attr('data-modal-btn');

    $('.modal[data-modal=' + modal + ']').addClass('open');
  });

  $('.modal_close').click(function () {
    $(this).parents('.modal').removeClass('open');
  });
});
var T001 = ['T001'];
var T002 = ['T002'];
var T003 = ['T003'];

var value;

function handleOnChange(e) {
  var main_table = document.getElementById('main_table');
  while (main_table.hasChildNodes()) {
    main_table.removeChild(main_table.firstChild);
  }

  value = e.value;
  var selectedList;
  if (value == 'T001') selectedList = T001;
  else if (value == 'T002') selectedList = T002;
  else selectedList = T003;

  for (var i = 0; i < selectedList.length; i++) {
    const newDiv = document.createElement('div');
    document.getElementById('main_table').appendChild(newDiv);
    newDiv.innerText = selectedList[i];
  }
}

var baseCamp = 0;

const userAdd = () => {
  var trCnt = document.getElementsByTagName('tr').length;
  var inner = '';
  console.log(trCnt);
  if (baseCamp != 0) {
    trCnt = baseCamp;
  }
  if (trCnt == 11) {
    $('#no1').hide();
  }
  if (trCnt <= 11) {
    inner += '<tr id = "no' + trCnt + '">';
    inner += '    <td align ="center">' + trCnt + '</td>';
    inner += `    <td align ="center"><input type="text" class = "mng" id="userNM"></td>`;
    inner += '    <td align ="center"></td>';
    inner += `    <td align ="center"><input type="text" class = "mng" id="userNM"></td>`;
    inner +=
      '    <td align ="center"><button type="button" class="completeBtn" style="color : #000; width:100px; border:none;" onClick="onClickComplete()"><img src="../styles/img/icons/check.svg"/></button></td>';
    inner +=
      '    <td align ="center"><button type="button" class="completeBtn" style="color :  #000; width:100px; border:none;" onClick="onClickComplete()"><img src="../styles/img/icons/delete.svg"/></button><span>';
    inner += `</tr>`;
  }

  $('#tbHead').after(inner);
};

function onClickCancle(trCnt) {
  var row = document.querySelectorAll('.updateRow');
  $('#no' + trCnt).remove();

  if (trCnt == 11) {
    $('#no1').show();
  }
  if (row.length > 0) {
    $('.updateRow').show();
    $('tr').removeClass('updateRow');
  }
}

function onClickUpdate() {
  var targetBtn = event.target;
  var parentTr = targetBtn.parentNode.parentNode;
  var tdNode = parentTr.childNodes;
  var tdArr = new Array();

  for (var i = 0; i < tdNode.length; i++) {
    tdArr.push(tdNode[i].textContent);
  }

  var row = document.querySelectorAll('.updateRow');
  if (row.length == 0) {
    parentTr.className = 'updateRow';
    $('.updateRow').hide();

    baseCamp = tdArr[1];
    userAdd();
  } else {
    alert('수정 중인 사용자 정보가 있습니다.');
  }
}
function modify_and_save(itag) {
  const tr = itag.closest('tr');
  const firstcell = tr.children[0];
  const secondcell = tr.children[1];
  const thirdcell = tr.children[2];

  if (firstcell.contentEditable === 'true') {
    firstcell.contentEditable = 'false';
    secondcell.contentEditable = 'false';
    thirdcell.contentEditable = 'false';
    itag.innerText = '수정';
    itag.classList.add('fa-edit');
    itag.classList.remove('fa-save');
  } else {
    firstcell.contentEditable = 'true';
    secondcell.contentEditable = 'true';
    thirdcell.contentEditable = 'true';
    itag.innerText = '저장';
    itag.classList.remove('fa-edit');
    itag.classList.add('fa-save');
    firstcell.focus();
  }
}
$(document).ready(function () {
  $('.form_input').each(function () {
    $(this)
      .find('.form_control')
      .on('keyup focus', function () {
        $(this).closest('.form_input').addClass('active');

        if ($(this).val().length == 0) {
          $(this).closest('.form_input').removeClass('active');
        } else {
          $(this).closest('.form_input').addClass('active');
        }
      });

    $(this)
      .find('.clearBtn')
      .on('click', function () {
        $(this).siblings('.form_control').val('');
        $(this).closest('.form_input').removeClass('active');
        return false;
      });
  });
});

$('.datepicker_input').click(function () {
  $(this).siblings('.date-view').toggleClass('active');
});

$('.date-view .dropdown-btn').click(function () {
  $(this).closest('.dropdown').toggleClass('on');
});

function selectAll(selectAll) {
  const checkboxes = document.getElementsByName('check');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
