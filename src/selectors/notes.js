import moment from 'moment';

const getVisibleNotes = (notes, { text, startDate, endDate }) => {
  return notes
    .filter((note) => {
      const createdAtMoment = moment(note.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = note.noteTitle
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
    });
};
export default getVisibleNotes;
