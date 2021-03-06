(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pane.template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"middle\" data-background=\"";
  foundHelper = helpers.background;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.background; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    <div class=\"top\">\n        <div class=\"padding\"></div>\n        <div class=\"city\">\n            <div><span>";
  foundHelper = helpers.place;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.place; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n        </div>\n    </div>\n    <div class=\"weather\">\n        <img src=\"img/climacons/";
  foundHelper = helpers.code;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ".svg\">\n    </div>\n    <div class=\"stats\">\n        <div class=\"left\">\n            <div><span>";
  foundHelper = helpers.temperature;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.temperature; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></div>\n        </div>\n        <div class=\"right\">\n            <div>\n                <div>\n                    <span>";
  foundHelper = helpers.windSpeed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.windSpeed; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span> <span>";
  foundHelper = helpers.windUnit;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.windUnit; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span><br>\n                    <span>";
  foundHelper = helpers.humidity;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.humidity; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " %</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"forecast\">\n        <div class=\"0\">\n            <span class=\"day\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.day;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n            <span class=\"code\"><img src=\"img/climacons/";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.code;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ".svg\"></span>\n            <span class=\"temp\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.high;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "&nbsp;&nbsp;<span>";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.low;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span></span>\n        </div>\n        <div class=\"1\">\n            <span class=\"day\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.day;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n            <span class=\"code\"><img src=\"img/climacons/";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.code;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ".svg\"></span>\n            <span class=\"temp\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.high;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "&nbsp;&nbsp;<span>";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.low;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span></span>\n        </div>\n        <div class=\"2\">\n            <span class=\"day\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.day;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n            <span class=\"code\"><img src=\"img/climacons/";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.code;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ".svg\"></span>\n            <span class=\"temp\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.high;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "&nbsp;&nbsp;<span>";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.low;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span></span>\n        </div>\n        <div class=\"3\">\n            <span class=\"day\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.day;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n            <span class=\"code\"><img src=\"img/climacons/";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.code;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ".svg\"></span>\n            <span class=\"temp\">";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.high;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "&nbsp;&nbsp;<span>";
  stack1 = depth0.week;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.low;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span></span>\n        </div>\n    </div>\n</div>\n";
  return buffer;});
})();