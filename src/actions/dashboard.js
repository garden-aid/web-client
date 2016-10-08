
export const HOURS_UPDATE = 'HOURS_UPDATE';

export const updateHours = hours => dispatch => dispatch({
  type: HOURS_UPDATE,
  hours: parseInt(hours, 10),
});
