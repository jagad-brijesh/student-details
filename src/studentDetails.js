import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
    var [Student, setStudent] = useState({});

    let params = useParams();

    useEffect(() => {

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
    }, []);
    console.log(params);

    return <>
        <div>
            {Student.name}<br />
            {Student.email}<br />
            {Student.mobile}<br />
            {Student.parentMobile}<br />
            {Student.Department}<br />
            {Student.enrollmentNumber}<br />
            {Student.DOB}<br />
            {Student.image}<br />
        </div>
    </>;
}
export default StudentDetails;