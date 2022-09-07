import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddStudent = () => {


    var [Student, setStudent] = useState({});
    let params = useParams();
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
                        <div class="form-group col-md-6">
                            <label for="inputEnrollment">Enrollment:</label>
                            <input type="text" class="form-control" id="inputEnrollment" placeholder="Enter Enrollment Number:" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputName">Name:</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Enter Name" />
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputEmail1">Email address</label>
                            <input type="email" class="form-control" id="inputEmail1" placeholder="Enter email" />
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputImage">Image Url</label>
                            <input type="text" class="form-control" id="inputImage" placeholder="Enter Image Url" />
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputMobile">Mobile Number</label>
                            <input type="text" class="form-control" id="inputMobile" placeholder="Enter Mobile Number" />
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputParentMobile">Parents's Mobile Number</label>
                            <input type="text" class="form-control" id="inputParentMobile" placeholder="Enter Parent's Mobile Number" />
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputDepartment">Department</label>
                            <input type="" class="form-control" id="inputDepartment" placeholder="Enter Department" />
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputDOB">Department</label>
                            <input type="date" class="form-control" id="inputDOB" placeholder="Enter Date of Birth" />
                        </div>
                        <div class="mx-4 my-2 px-4 py-2 btn btn-primary w-auto"
                            onClick={() => {
                                console.log("Hello");
                                //TODO : add student and redirect to home page.
                            }}>Submit</div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default AddStudent;