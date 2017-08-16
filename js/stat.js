'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Тень от прямоугольника
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 10, 420, 270);
  // Прямоугольник
  ctx.fillStyle = '#fff';
  ctx.fillRect(90, 0, 420, 270);
  // Тайтл
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 45);
  ctx.fillText('Список результатов:', 110, 60);

  // Находим максемальное время
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  // Гистограммы
  var histogramHeight = 150; // максимальная высота колонки
  var step = histogramHeight / max; // высота колонки
  var initialX = 110; // координаты по Х
  var initialY = 100; // координаты по Y
  var indent = 90; // оступ
  var barWidth = 40; // ширина колонки

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
