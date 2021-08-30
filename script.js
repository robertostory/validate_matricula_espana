    const validate_enrollment = (value) => {
        let str = value.toUpperCase().replace('-', '');
        let new_enrollment = /^\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ]$/;
        let med_enrollment = /^[A-Z]{1,2}\d\d\d\d[A-Z]{1,2}$/;
        let old_enrollment = /^[A-Z]{1,2}\d\d\d\d\d\d$/;
        let motorcycle = /^C\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ]$/;
        let response = false
        if (new_enrollment.test(str) || med_enrollment.test(str) || old_enrollment.test(str) || motorcycle.test(str)) {
            return true;
        }
        return false;
    }
    validate_enrollment('9874ASD');
