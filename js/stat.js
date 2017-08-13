var renderStatistics = function (ctx, names, times) {
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
  // Цикл имён
  for (i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
  // Цикл времён
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  // Гистограммы
  var histogramWidth = 150; // максимальная высота колонки
  var step = histogramWidth / max; // высота колонки
  var initialX = 110; // координаты по Х
  var initialY = 100; // координаты по Y
  var indent = 90; // оступ
  var barWidth = 40; // ширина колонки

  for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillRect(initialX + indent * i, initialY + (150 - times[i] * step), barWidth, times[i] * step);

    ctx.fillText(names[i], initialX + indent * i, 265);
  }
};
