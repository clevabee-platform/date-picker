import { h } from "@stencil/core";
import { DatePickerDay } from "./date-picker-day";
import { getViewOfMonth, inRange, isEqual } from "./date-utils";
function chunk(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
function mapWithOffset(array, startingOffset, mapFn) {
  return array.map((_, i) => {
    const adjustedIndex = (i + startingOffset) % array.length;
    return mapFn(array[adjustedIndex]);
  });
}
export const DatePickerMonth = ({ selectedDate, focusedDate, labelledById, localization, firstDayOfWeek, min, max, highlightedDays, dateFormatter, onDateSelect, onKeyboardNavigation, focusedDayRef, onMouseDown, onFocusIn, }) => {
  const today = new Date();
  const days = getViewOfMonth(focusedDate, firstDayOfWeek);
  return (h("table", { class: "duet-date__table", role: "grid", "aria-labelledby": labelledById, 
    // @ts-ignore
    onFocusin: onFocusIn, onMouseDown: onMouseDown },
    h("thead", null,
      h("tr", null, mapWithOffset(localization.dayNames, firstDayOfWeek, dayName => (h("th", { class: "duet-date__table-header", scope: "col" },
        h("span", { "aria-hidden": "true" }, dayName.substr(0, 2)),
        h("span", { class: "duet-date__vhidden" }, dayName)))))),
    h("tbody", null, chunk(days, 7).map(week => (h("tr", { class: "duet-date__row" }, week.map(day => (h("td", { class: "duet-date__cell", role: "gridcell", "aria-selected": isEqual(day, selectedDate) ? "true" : undefined },
      h(DatePickerDay, { day: day, today: today, isHighlighted: highlightedDays === null || highlightedDays === void 0 ? void 0 : highlightedDays.some(date => isEqual(new Date(date), day)), focusedDay: focusedDate, inRange: inRange(day, min, max), onDaySelect: onDateSelect, dateFormatter: dateFormatter, onKeyboardNavigation: onKeyboardNavigation, focusedDayRef: focusedDayRef }))))))))));
};
