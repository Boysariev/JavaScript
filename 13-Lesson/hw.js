let weeks = ['english', 'S']
let date = new Date()
console.log(weeks[date.getDay()].slice(0,4)); // Sesh

//2
const moment = () => {
    const date = new Date();
    return {
      format(params) {
        if (params == "LT") {
          if (date.getHours() >= 6 && date.getHours() <= 12)
            return `${date.getHours()}:${date.getMinutes()} AM`;
          else return `${date.getHours()}:${date.getMinutes()} PM`;
        } else if (params === "LTS") 
      },
    };
  };
  console.log(moment().format("LTTT"));

// 3
const moment = () => {
    const date = new Date();
    return {
      format(params) {
        if (params == "LT") {
          if (date.getHours() >= 6 && date.getHours() <= 12)
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`;
          else return `${date.getHours()}:${date.getMinutes()} PM`;
        } else if (params === "LTS") 
      },
    };
  };
  console.log(moment().format("LTTT"));

// 4
const getDay =(symbol) => {
    let date = new Date();
    return `${date.getDate()}${symbol}${date.getMonth() + 1}${symbol}${date.getFullYear()}`
}
console.log(getDay('/')); // Today: 27/2/2023

// 5