/* Script criado para alterar o background de acordo com a hora e o dia da semana */

// Define as constantes
const WORK_START_HOUR = 9;
const WORK_END_HOUR = 17;
const STUDY_START_HOUR = 18;
const STUDY_END_HOUR = 22;
const WEEKDAYS = {
  1: true, // Segunda-feira
  2: true, // Terça-feira
  3: true, // Quarta-feira
  4: true, // Quinta-feira
  5: true, // Sexta-feira
};

// Obtém a data e hora atual
const now = new Date();
const hour = now.getHours();
const dayOfWeek = now.getDay();

// Define o vídeo e a fonte
const video = document.querySelector('#video-viewport video');
const source = document.querySelector('#video-viewport source');

// Verifica se é um dia útil ou não
const isWeekday = WEEKDAYS[dayOfWeek];

if (isWeekday) {
  console.log("Durante a Semana");

  if (hour >= WORK_START_HOUR && hour <= WORK_END_HOUR) {
    // Trabalhando
    video.muted = true;
    video.autoplay = true;
    video.controls = false;
    video.load();
    video.play();
    source.src = "video/blank.mp4";
    console.log("Working");
    console.log(source.src);
  } else if (hour >= STUDY_START_HOUR && hour <= STUDY_END_HOUR) {
    // Estudando
    video.muted = true;
    video.autoplay = true;
    video.controls = false;
    video.load();
    video.play();
    source.src = "video/working.mp4";
    console.log("Studying");
    console.log(source.src);
  } else {
    // Dormindo
    video.muted = true;
    video.autoplay = true;
    video.controls = false;
    video.load();
    video.play();
    source.src = "video/working.mp4";
    console.log("Sleeping");
    console.log(source.src);
  }
} else {
  console.log("Durante o Fim de Semana");

  // Jogando
  video.muted = true;
  video.autoplay = true;
  video.controls = false;
  video.load();
  video.play();
  source.src = "video/blank.mp4";
  console.log("Playing");
  console.log(source.src);
}

/* Script criado para corrigir a resolução do background video de acordo com a resolução da janela */

var min_w = 300;  // largura mínima do vídeo permitida
var vid_w_orig;   // Resolução do vídeo original
var vid_h_orig;   // Resolução do vídeo original

// Instancia o jquery e evita conflitos
$(document).ready(function () { // jQuery( function($){
  vid_w_orig = parseInt($('.video-file').attr('width'));
  vid_h_orig = parseInt($('.video-file').attr('height'));

  $(window).resize(function () { resizeToCover(); });
  $(window).trigger('resize');
});

function resizeToCover() {
  // define a janela de visualização do vídeo para o tamanho da janela
  $('#video-viewport').width($(window).width());
  $('#video-viewport').height($(window).height());

  // usa o maior fator de escala horizontal/vertical
  var scale_h = $(window).width() / vid_w_orig;
  var scale_v = $(window).height() / vid_h_orig;
  var scale = scale_h > scale_v ? scale_h : scale_v;

  // não permite largura em escala < largura mínima do vídeo
  if (scale * vid_w_orig < min_w) { scale = min_w / vid_w_orig; };

  // agora dimensiona o vídeo
  $('.video-file').width(scale * vid_w_orig);
  $('.video-file').height(scale * vid_h_orig);

  // e centralize-o rolando a janela de visualização do vídeo
  $('#video-viewport').scrollLeft(($('.video-file').width() - $(window).width()) / 2);
  $('#video-viewport').scrollTop(($('.video-file').height() - $(window).height()) / 2);
};