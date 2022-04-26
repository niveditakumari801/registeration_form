import  {useEffect, useState} from 'react'

const RegistrationForm = () => {
    const initialValue = {firstName:"", lastName:"", email:"", password:"", number:"", male:"", female:"", other:"", gender:"" }
    const [formValue, setFormValue] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
    

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setFormValue({...formValue, [name]: value });
        //console.log(formValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    }

    useEffect (() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValue);
        }
    }, [formErrors]);

    const validate = (values) => {
        let isValid = true;
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstName) {
            errors.firstName = "First Name is Required"
        }

        if(!values.lastName) {
            errors.lastName = "Last Name is Required"
        }

        if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }

        if(!values.password) {
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
              
                }else if((values.number).length !== 10){
              
                  isValid = false;
              
                  errors.number = "Please enter valid phone number.";
              
                }
              
              }


        
        if(!values.gender) {
            errors.gender = "Gender is Required"
        }
        return errors;
        
    }

    
  return (
<>
    <div className='form_start'>


   <form onSubmit={handleSubmit}>
   <h1>Registration Form</h1>
    <div className="form">
          <div className="form_body">
              <div className="firstname">
                  <label className="form__label" >First Name : </label>
                  <input className="form__input"
                   type="text" 
                   name="firstName"
                   
                   value={formValue.firstName} 
                   onChange = {handleChange}
                    placeholder="First Name" />
              </div>
              <p>{formErrors.firstName}</p>
              <div className="lastname">
                  <label className="form__label" >Last Name : </label>
                  <input  type="text" 
                  name="lastName"
                   
                   className="form__input" 
                   value={formValue.lastName} 
                   onChange  = {handleChange}
                    placeholder="LastName"/>
              </div>
              <p>{formErrors.lastName}</p>
              <div className="email">
                  <label className="form__label" >Email : </label>
                  <input  type="email"
                   
                   name='email'
                    className="form__input"
                     value={formValue.email}
                     onChange = {handleChange}
                      placeholder="Email"/>
              </div>
              <p>{formErrors.email}</p>

              <div className="password">
                  <label className="form__label" >Password : </label>
                  <input className="form__input"
                  name='password'
                   type="password"
                    
                      value={formValue.password}
                      onChange = {handleChange}  placeholder="Password"/>
              </div>
              <p>{formErrors.password}</p>


              <div className="number">
                  <label className="form__label" >Phone Number : </label>
                  <input className="form__input"
                  name='number'
                   type="number"
                     
                      value={formValue.number} 
                      onChange = {handleChange} placeholder="number"/>
              </div>
              <p>{formErrors.number}</p>


              <div className="gender">
              <label className="form__label" >Gender : </label>
              <input type="radio" value={formValue.male} name="gender"/> Male
        <input type="radio" value={formValue.female} name="gender"/> Female

        <p>{formErrors.gender}</p>
              {/* <select >
                <option name ='female' value={formValue.female}>female</option>
                <option name ='male' value={formValue.male}>male</option>
                <option name ='other' value={formValue.other}>other</option>
            </select> */}
              </div>
          </div>
          <div className="btn_div">
              <button className="btn">Submit</button>
          </div>
      </div>  
      </form>
      </div>
         
      </>
  )
}

export default RegistrationForm