function generateSlots(availability) {
    const slots = [];
    const { days, TimeRanges } = availability;
  
    days.forEach(day => {
      TimeRanges.forEach(range => {
        const startTime = new Date(`1970-01-01T${range.start}:00Z`);
        const endTime = new Date(`1970-01-01T${range.end}:00Z`);
  
        while (startTime < endTime) {
          slots.push({
            day,
            time: startTime.toISOString().split("T")[1].substring(0, 5)
          });
          startTime.setMinutes(startTime.getMinutes() + 30); // Increment by 30 minutes
        }
      });
    });
  
    return slots;
  }
module.exports=generateSlots