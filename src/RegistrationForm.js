import { useEffect, useState } from 'react'
import Login from './Login';

const RegistrationForm = () => {
  //const initialValue = { firstName: "", lastName: "", email: "", password: "", number: "", gender: "", description: "", country: "" }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);



  // const handleChange = (e) => {

  //   const { name, value, type, checked } = e.target;
  //   setFormValue((state) => ({ ...formValue, 
  //     [name]: type === 'checkbox' ? checked : value }));
  //   //console.log(formValue);
  // }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !number || !description || !country || !gender) {
      setFlag(true);

    } else {
      setFlag(false);
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      localStorage.setItem("firstname", JSON.stringify(firstName));
      localStorage.setItem("lastname", JSON.stringify(lastName));
      localStorage.setItem("number", JSON.stringify(number));
      localStorage.setItem("gender", JSON.stringify(gender));
      localStorage.setItem("description", JSON.stringify(description));

      console.log("Saved in Local Storage");

      setLogin(!login)

    }

    setFormErrors(validate(email, password, firstName, lastName, number, gender, description));
    setIsSubmit(true);
  }

  function handleClick() {
    setLogin(!login)
  }

  useEffect(() => {

    // DATA = JSON.parse(localStorage.getItem('contact_form'));

    //     if (localStorage.getItem('contact_form')) {
    //       setFormValue({
    //             fname: DATA.firstName,
    //             lname: DATA.lastName,
    //             email: DATA.email,
    //             contact: DATA.number,
    //             message: DATA.description,
    //             gender: DATA.gender
    //         })
    //     } else {
    //       setFormValue({
    //             firstName: '',
    //             lastName:'',
    //             email: '',
    //             contact: '',
    //             message: '',
    //             gender:'',
    //         })
    //     }

    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
       console.log(email);

    }
  }, [formErrors,email,  isSubmit]);

  const validate = (values) => {
    let isValid = true;
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name is Required"
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required"
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    }
    else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.number) {

      var pattern = new RegExp(/^[0-9\b]+$/);

      if (!pattern.test(values.number)) {

        isValid = false;

        errors.number = "Please enter only number.";

      } else if ((values.number).length !== 10) {

        isValid = false;

        errors.number = "Please enter valid phone number.";

      }

    }

    if (!values.gender) {
      errors.gender = "Gender is Required"
      console.log(values.gender, "gennnderrrrrrrrrr")
    }

    if (!values.description) {
      errors.description = "Description is Required"

    }

    if (!values.country) {
      errors.country = "Please select Country"

    }
    return errors;

  }


  return (
    <>
      <div className='form_start'>

        {" "} {login ?
          <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div className="form">
              <div className="form_body">
                <div className="firstname">
                  <label className="form__label" >First Name : </label>
                  <input className="form__input"
                    type="text"
                    name="firstName"

                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name" />
                </div>
                <p>{formErrors.firstName}</p>
                <div className="lastname">
                  <label className="form__label" >Last Name : </label>
                  <input type="text"
                    name="lastName"

                    className="form__input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="LastName" />
                </div>
                <p>{formErrors.lastName}</p>
                <div className="email">
                  <label className="form__label" >Email : </label>
                  <input type="email"

                    name='email'
                    className="form__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
                </div>
                <p>{formErrors.email}</p>

                <div className="password">
                  <label className="form__label" >Password : </label>
                  <input className="form__input"
                    name='password'
                    type="password"

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </div>
                <p>{formErrors.password}</p>


                <div className="number">
                  <label className="form__label" >Phone Number : </label>
                  <input className="form__input"
                    name='number'
                    type="number"

                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="number" />
                </div>
                <p>{formErrors.number}</p>


                <div className="gender">
                  <label className="form__label" >Gender : </label>

                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  /> Male

                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  /> Female

                  <input
                    type="radio"
                    value="Other"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  /> Other

                  <p>{formErrors.gender}</p>

                  <div className="country">
                    <label className="form__label" >Country : </label>
                    <select
                      onChange={(e) => setCountry(e.target.value)}
                      name="country" value={country}>
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="england">England</option>
                    </select>
                  </div>
                  <p>{formErrors.country}</p>
                  <div className="description">
                    <label className="form__label" >Description : </label>

                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      name="description"
                      value={description} />
                  </div>
                  <p>{formErrors.description}</p>
                </div>
              </div>
              <div className="btn_div">
                <button className="btn">Submit</button>

              </div>
              <p className="forgot-password text-right" onClick={handleClick}>
                Already registered {" "}log in?
              </p>
            </div>
          </form>
          : (<Login />
          )}

      </div>




    </>
  )
}

export default RegistrationForm