import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddStudent = () => {


    var [Student, setStudent] = useState({});
    let params = useParams();

    const [student_data, setStudentData] = useState({});

    // useEffect(() => {
    //     if (params.id > 0) {
    //         fetch("" + params.id, {
    //             method: "GET"
    //         })
    //             .then((responce) => {
    //                 return responce.json();
    //             })
    //             .then((responce) => {
    //                 setData(responce);
    //             });
    //     }
    // }, []);
    var isAdd = true;
    if (params.id != null)
        isAdd = false;

    useEffect(() => {
        if (!isAdd) {
            const url = "https://6318d1c36b4c78d91b300058.mockapi.io/students/" + params.id;
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    console.log("res:::", json);
                    setStudent(json);
                } catch (error) {
                    console.log("error", error);
                }
            };
            fetchData();
        }
    }, []);

    return <>
        <div className="container" style={{ minHeight: "calc(100vh - 120px)" }}>
            <div className="row">
                <div className="col-md-12 p-3">
                    <div className="h1">
                        Enter Details of Student:
                    </div>
                    <hr />
                    <form class="row">
                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputEnrollment">Enrollment</label>
                            <input type="text" class="form-control" id="inputEnrollment" placeholder="Enter Enrollment Number"
                                value={student_data.enrollmentNumber}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, enrollmentNumber: e.target.value });
                                }}
                            />
                        </div>
                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputName">Name</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Enter Name"
                                value={student_data.name}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, name: e.target.value });
                                }} />
                        </div>
                        <div class="form-group px-3 py-3">
                            <label for="inputName">Address</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Enter Name"
                                value={student_data.Address}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, Address: e.target.value });
                                }} />
                        </div>

                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputEmail1">Email address</label>
                            <input type="email" class="form-control" id="inputEmail1" placeholder="Enter email"
                                value={student_data.email}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, email: e.target.value });
                                }} />
                        </div>

                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputImage">Image Url</label>
                            <input type="text" class="form-control" id="inputImage" placeholder="Enter Image Url"
                                value={student_data.image}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, image: e.target.value });
                                }} />
                        </div>

                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputMobile">Mobile Number</label>
                            <input type="text" class="form-control" id="inputMobile" placeholder="Enter Mobile Number"
                                value={student_data.mobile}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, mobile: e.target.value });
                                }} />
                        </div>

                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputParentMobile">Parents's Mobile Number</label>
                            <input type="text" class="form-control" id="inputParentMobile" placeholder="Enter Parent's Mobile Number"
                                value={student_data.parentMobile}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, parentMobile: e.target.value });
                                }} />
                        </div>

                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputDepartment">Department</label>
                            <input type="" class="form-control" id="inputDepartment" placeholder="Enter Department"
                                value={student_data.Department}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, Department: e.target.value });
                                }} />
                        </div>

                        <div class="form-group col-md-6 px-3 py-3">
                            <label for="inputDOB">DOB</label>
                            <input type="date" class="form-control" id="inputDOB" placeholder="Enter Date of Birth"
                                value={student_data.DOB}
                                onChange={(e) => {
                                    setStudentData({ ...student_data, DOB: e.target.value });
                                }} />
                        </div>
                        <div class="mx-4 my-2 px-4 py-2 btn btn-primary w-auto"
                            onClick={() => {
                                console.log(student_data);
                                fetch("https://6318d1c36b4c78d91b300058.mockapi.io/students", {
                                    method: "POST",
                                    body: JSON.stringify({ ...student_data, createdAt: new Date().toDateString() }),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }).then(() => {
                                    // navigate("/home");
                                    console.log("success");
                                });
                                //TODO : add student and redirect to home page.
                            }}>Submit</div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default AddStudent;