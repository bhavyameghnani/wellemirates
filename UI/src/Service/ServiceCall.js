import http from './http-common-servicecall'

class ServiceCall {

    userSignUp(userDetails) {
        return http.post("/userSignUp", userDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    userSignIn(userLoginDetails) {
        return http.post("/userSignIn", userLoginDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getUserDetails(empID) {
        return http.get("/employee/" + empID, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getUserHealthDetails(empID) {
        return http.get("/employee/health/" + empID, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getUserWorkDetails(empID) {
        return http.get("/employee/work/" + empID, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getUserCourseDetails(empID) {
        return http.get("/employee/course/" + empID, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
}

export default new ServiceCall();