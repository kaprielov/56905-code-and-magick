'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(90, 0, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 45);
  ctx.fillText('Список результатов:', 110, 60);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;
  var initialX = 110;
  var initialY = 100;
  var indent = 90;
  var barWidth = 40;

  for (var j = 0; j < times.length; j++) {
    var proportion = times[j] * step;
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + indent * j, initialY + (histogramHeight - proportion), barWidth, proportion);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[j]), initialX + indent * j, initialY + (histogramHeight - (proportion + 15)));
    ctx.fillText(names[j], initialX + indent * j, 265);
  }
};
