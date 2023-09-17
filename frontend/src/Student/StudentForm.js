import React, { useState } from "react";
import Skills from "./Skills";

const StudentForm = ({setTab}) => {
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        skills: [],
        jobTitles: [],
        profile: "",
        resume: "",
    });

    const [defaultValue, setDefaultValue] = useState("");
    const [jobsTitleDefaultValue, setJobTitleDefaultValue] = useState("");
    const [image, setImage] = useState("");
    const [resumePDF, setResumePDF] = useState("");

    const skillsChangeHandler = (event) => {
        // console.log(event.target.value);
        let skills = studentData.skills;
        console.log(skills);
        let newSkill = event.target.value;
        skills = skills.filter((skill) => (skill!==newSkill));
        skills.push(newSkill);
        setStudentData((prevState) => ({
            ...prevState ,
            skills: [...skills],
        }));
        setDefaultValue("Select a skill");
    };

    const jobTitlesChangeHandler = (event) => {
        let jobTitles = studentData.jobTitles;
        let newTitle = event.target.value;
        jobTitles = jobTitles.filter((jobTitle) => (jobTitle!==newTitle));
        jobTitles.push(newTitle);
        setStudentData((prevState) => ({
            ...prevState ,
            jobTitles: [...jobTitles],
        }));
        setJobTitleDefaultValue("Select a job title")
    };

    const inputChangeHandler = (event) => {
        const {name, value} = event.target;
        setStudentData((prevState) => ({
            ...prevState,
            [name]: [value],
        }))
    };

    const profileChangeHandler = (event) => {
        const file = event.target.files[0];
        const image = URL.createObjectURL(file);
        if(event.target.name==="profile") {
          setImage(image);
        }
        else {
          setResumePDF(image);
        }

        setStudentData((prevState) => ({
            ...prevState,
            [event.target.name]: file,
        }))
    };

    const resetDataHandler = () => {
            // window.location.reload();
      setStudentData({firstName: "",
        lastName: "",
        skills: [],
        jobTitles: [],
        profile: "",
        resume: "",
      });
            // setTab("profile");
    };

  return (
    <div className=" w-full border px-4 shadow-xl sm:mx-4 sm:px-4 sm:py-4 md:mx-auto overflow-y-scroll bg-white">
        <h1 className="text-2xl text-gray-700 text-center"><strong>Complete your profile</strong></h1>
      <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium">Account Details</p>
          <p className="text-sm text-gray-600">Edit your account details</p>
        </div>
        <button onClick={resetDataHandler}
        className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
          Reset
        </button>
        <button className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
          Save
        </button>
      </div>
      <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
        <p className="shrink-0 w-32 font-medium">Name</p>
        <input
          placeholder="First Name"
          className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
          name="firstName"
          value={studentData.firstName}
          onChange={inputChangeHandler}
        />
        <input
          placeholder="Last Name"
          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          name="lastName"
          value={studentData.lastName}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="flex flex-col gap-4 border-b py-4">
        <div className=" flex flex-row gap-4">
        <p className="shrink-0 w-32 font-medium">Skills</p>
        <select
            // multiple={true}
          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          onChange={skillsChangeHandler}
          value={defaultValue}
        >
            <option hidden>Select a skill</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="cloud">Cloud</option>
            <option value="analytics">Analytics</option>
            <option value="react">React</option>
            <option value="nodejs">Nodejs</option>
            <option value="mysql">MySQL</option>
        </select>
        </div>
        <Skills skills={studentData.skills} setStudentData={setStudentData} studentData={studentData} field="skills" />
      </div>
      <div className="flex flex-col gap-4 border-b py-4">
        <div className=" flex flex-row gap-4">
        <p className="shrink-0 w-32 font-medium">Titles</p>
        <select
            // multiple={true}
          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          onChange={jobTitlesChangeHandler}
          value={jobsTitleDefaultValue}
        >
            <option hidden>Select a job title</option>
            <option value="software developer">Software Developer</option>
            <option value="software engineer">Software Engineer</option>
            <option value="manager">Manager</option>
        </select>
        </div>
        <Skills skills={studentData.jobTitles} setStudentData={setStudentData} studentData={studentData} field="jobTitles" />
      </div>
      <div className="flex flex-col gap-4 py-4  lg:flex-row border-b">
        <div className="shrink-0 w-32  sm:py-4">
          <p className="mb-auto font-medium">Resume</p>
          <p className="text-sm text-gray-600">Upload resume</p>
        </div>
        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center overflow-y-scroll">
          {studentData.resume && <div className="w-full h-full flex flex-col gap-2"><object
            data={resumePDF}
            className="w-full h-full"
            alt="resume"
            aria-label="reusme"
          ></object>
          <a href={resumePDF} target="blank" className="underline text-blue-600">Open in new tab</a></div>}
          {/* <p className="text-sm text-gray-600">
            Drop your desired image file here to start the upload
          </p> */}
          <div>
          <input
            type="file"
            className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
            name="resume"
            onChange={profileChangeHandler}
          />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-4  lg:flex-row">
        <div className="shrink-0 w-32  sm:py-4">
          <p className="mb-auto font-medium">Avatar</p>
          <p className="text-sm text-gray-600">Change your avatar</p>
        </div>
        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
          {studentData.profile && <img
            src={image}
            className="h-16 w-16 rounded-full"
            alt="profile"
          />}
          <p className="text-sm text-gray-600">
            Drop your desired image file here to start the upload
          </p>
          <input
            type="file"
            className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
            name="profile"
            onChange={profileChangeHandler}
          />
        </div>
      </div>
      <div className="flex justify-end py-4 sm:hidden">
        <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
          Reset
        </button>
        <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
          Save
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
