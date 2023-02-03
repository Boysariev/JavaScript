let studentScore = 57;

if(studentScore >= 90) {
    console.log('You got A');
} else if ( studentScore < 90 && studentScore >= 80 ) {
    console.log('You got B');
} else if ( studentScore < 80 && studentScore >= 70) {
    console.log('You got C');
} else if ( studentScore < 70 && studentScore >= 60) {
    console.log('You got D');
} else {
    console.log('You got F, Loser!');
}

switch(studentScore) {
    case 50: 
      console.log();
}