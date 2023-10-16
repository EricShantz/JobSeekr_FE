export const formatApplicationDate = (data) => {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
      };
      
      const formattedDates = data.map((item)=>{
          const date = new Date(item.date_applied);
            const formattedDate =new Intl.DateTimeFormat('en-US', options).format(date);

            return {...item, date_applied : formattedDate}
    })

    return formattedDates
}