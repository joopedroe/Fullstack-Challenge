import moment from 'moment';

export default {
  formatDate: date => {
    if (!date) return null;
    if (date.includes('/'))
      if (date.includes('T')) {
        return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm');
      } else {
        return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
      }
    return moment(date).format('DD/MM/YYYY');
  }
};
