export default function getCurrentWeekDates(): { [key: string]: string } {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek + 1); // Monday

  const weekDates: { [key: string]: string } = {};
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  days.forEach((day, index) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index);
    weekDates[`${day}Date`] = date.toISOString().split('T')[0];
  });

  return weekDates;
}

