import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const AllStudents = () => {
    var [Students, setStudents] = useState([]);
    var navigate = useNavigate();
    useEffect(() => {
        const url = "https://6318d1c36b4c78d91b300058.mockapi.io/students";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("res:::", json);
                setStudents(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    var temp = Students.map(fObj => {

        return <>

            <div class="mx-4 my-2 card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "20rem" }}>

                <img src={fObj.image} class="mt-4 mx-auto card-img profile" style={{ width: "15rem" }} />


                <div class="card-body">
                    <h5 class="card-title"> {fObj.name}</h5>
                    <p class="mb-2 text-muted email">{fObj.email}</p>
                    <Link to={"/students/" + fObj.id} className="btn btn-dark w-75">
                        Details
                    </Link>

                    <div class="row mx-5 my-2">
                        <div class="col-md-6 pr-3">
                            <div className="btn btn-outline-primary btn-md" onClick={() => {
                                navigate('../editstudent/' + fObj.id);
                            }}>Edit</div>
                        </div>
                        <div class="col-md-6 ">
                            <div className="btn btn-outline-danger btn-md" onClick={() => {
                                fetch(
                                    "https://6318d1c36b4c78d91b300058.mockapi.io/students/" +
                                    fObj.id,
                                    {
                                        method: "DELETE"
                                    }
                                ).then((responce) => {
                                    alert("User Deleted");
                                    const url = "https://6318d1c36b4c78d91b300058.mockapi.io/students";
                                    const fetchData = async () => {
                                        try {
                                            const response = await fetch(url);
                                            const json = await response.json();
                                            console.log("res:::", json);
                                            setStudents(json);
                                        } catch (error) {
                                            console.log("error", error);
                                        }
                                    };
                                    fetchData();
                                    return responce.json();
                                });
                            }}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    })

    return (
        <div className="container-fluid">
            <div class="row body content">
                {temp}
            </div>
        </div>
    )
};

export default AllStudents;