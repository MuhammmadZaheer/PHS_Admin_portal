import React from 'react'
import './addEmployee.css'
import Side from '../components/Side'
import Header from '../components/Header'

const AddEmployee = () => {
  return (
    <>
       <Header />
      <Side/>  
    <div className='add-form container-fluid align-itenms-center'>
            <form className='form'>
                <div className='row'>
                    <div className='col'>
                        <div class="mb-3 mt-3">
                            <label for="name" class="form-label">First Name:</label>
                            <input type="text" class="form-control" id="fname" placeholder="Enter first name" name="fname" />
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="name" class="form-label">Last Name:</label>
                            <input type="text" class="form-control" id="lname" placeholder="Enter last name" name="lname" />
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="specialization" class="form-label">Your Specialization:</label>
                            <input type="text" class="form-control" id="lname" placeholder="Enter Specializations" name="lname" />
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div>
                            <label for="text" className='form-label'>Select Gender:</label>
                        </div>
                        <div className='row mb-3 form-check-radio ' >
                            <div className="form-check col"  >
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check col">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check col">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Other
                                </label>
                            </div>
                        </div>
                        {/* <div class="form-check mb-3">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div> */}
                        <button type="submit" class="btn btn-primary rounded-pill">Click To Add</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default AddEmployee