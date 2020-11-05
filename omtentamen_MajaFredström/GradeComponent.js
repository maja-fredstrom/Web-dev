let grade_component = {
    template: '<span>{{grade}}</span>',
    data: function () {
        return {}
    },
    computed: {
        grade: function () {
            let grade = (7.5 / this.max_point * this.point - 1.5);
            if (grade < 0) {
                return 0;
            } else if ( grade > 5) {
                return 5;
            } else {
                return grade.toFixed(2);
            }
        },
    },
    props: {
        "point": Number,
        "max_point": Number
    }
}
