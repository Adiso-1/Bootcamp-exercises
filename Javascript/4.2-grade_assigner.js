function gradeReturn (grade) {
    if (grade >= 0 && grade <= 64) {
        console.log('F');
    } else if (grade > 64 && grade <= 69) {
        console.log('D');
    } else if (grade > 69 && grade <= 79) {
        console.log('C');
    } else if (grade > 79 && grade <= 89) {
        console.log('B');
    } else if (grade > 89 && grade <= 100) {
        console.log('A');
    } else {
        console.log('Not a valid grade');
    }
}