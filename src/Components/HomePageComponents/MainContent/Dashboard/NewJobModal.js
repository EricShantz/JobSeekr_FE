import React, {useState} from "react";
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useUserContext } from '../../../../Utils/UserContext'
import { createUserApplication } from "../../../../API/applicationAPIs";
import { DisplaySomethingWentWrong, DisplayApplicationCreationSuccess } from "../../../../Utils/ToastMessages";
import { ToastContainer } from 'react-toastify';


import dayjs from 'dayjs';

const NewJobModal = ({ isOpen, closeModal, newApplicationCreationSuccess }) => {
    Modal.setAppElement('#root');
    const [companyName, setCompanyName] = useState("")
    const [companyNameError, setCompanyNameError] = useState(false)

    const [jobTitle, setJobTitle] = useState("")
    const [jobTitleError, setJobTitleError] = useState(false)

    const [compensation, setCompensation] = useState("")
    const [compensationError, setCompensationError] = useState(false)

    const [jobDescription, setJobDescription] = useState("")
    const [jobDescriptionError, setJobDescriptionError] = useState(false)

    const [linkToJobPosting, setLinkToJobPosting] = useState("")
    const [linkToJobPostingError, setLinkToJobPostingError] = useState(false)
    
    const [dateApplied, setDateApplied] = useState(dayjs());

    const [interviewDate, setInterviewDate] = useState(null);

    const [isFavorite, setIsFavorite] = useState(false);

    const { user } = useUserContext();

    const modalStyles = {
        content: {
            maxWidth: '70%',
            height: 'auto', 
            margin: 'auto', 
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
    }

    const handleApplicationDateChange = (newDate) => {
        setDateApplied(newDate);
    };

    const handleInterviewDateChange = (newDate) => {
        setInterviewDate(newDate);
    };

    const handleCheckboxChange = (event) => {
        setIsFavorite(event.target.checked);
    };

    const validateForm = () =>{
        let isValid = true;

        if (companyName === "") {
            setCompanyNameError(true)
            isValid = false;
        }
        
        if (jobTitle === "") {
          setJobTitleError(true)
          isValid = false;
        }

        return isValid
    }


    const handleSubmit = async() => {
        if(validateForm()){

            try{
            const newApplicationObj = {
                company_name: companyName,
                job_title: jobTitle,
                compensation: compensation,
                job_description: jobDescription,
                link_to_job_posting: linkToJobPosting,
                date_applied: dateApplied.format('YYYY-MM-DD HH:mm:ss'),
                interview_date: interviewDate ? dateApplied.format('YYYY-MM-DD HH:mm:ss') : null,
                is_favourite: isFavorite,
                application_status: "applied",
                user_id: user.user_id
            }

            let response = await createUserApplication(newApplicationObj)
            if(response.ok){
                newApplicationCreationSuccess()
                closeModal()
            } else{
                DisplaySomethingWentWrong()
            }
        }catch(err){
            DisplaySomethingWentWrong()
            console.error("something went wrong:", err)
        }
        }
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="New Job Application" 
        style={modalStyles}>

        <h2>Enter a new job application</h2>

        <div>
            <TextField
                className={`newJobModalInput`}
                id="outlined-error"
                label="Company Name *"
                error={companyNameError} 
                helperText={companyNameError ? 'Please input a valid company name' : ''} 
                FormHelperTextProps={{
                    style: { marginLeft: '0rem' }
                }}
                onChange={(event) => {
                    setCompanyName(event.target.value);
                    setCompanyNameError(false);
                }}
             />
            <TextField
                className={`newJobModalInput`}
                id="outlined-error"
                label="Job Title *"
                error={jobTitleError} 
                helperText={jobTitleError ? 'Please input a valid job title' : ''} 
                FormHelperTextProps={{
                    style: { marginLeft: '0rem' }
                }}
                onChange={(event) => {
                    setJobTitle(event.target.value);
                    setJobTitleError(false);
                }}
            />
            <TextField
                className={`newJobModalInput`}
                id="outlined"
                label="Compensation"
                onChange={(event) => {
                    setCompensation(event.target.value);
                }}
            />
            <TextField
                className={`newJobModalInput`}
                id="outlined"
                label="Job Description"
                onChange={(event) => {
                    setJobDescription(event.target.value);
                }}
            />
            <TextField
                className={`newJobModalInput`}
                id="outlined"
                label="Link to job posting"
                onChange={(event) => {
                    setLinkToJobPosting(event.target.value);
                }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Date Applied"
                  value={dateApplied}
                  onChange={handleApplicationDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Interview Date (optional)"
                  onChange={handleInterviewDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>

            <FormGroup>
                <FormControlLabel control={<Checkbox checked={isFavorite} onChange={handleCheckboxChange} />} label="Add to favourites"/>
            </FormGroup>
        </div>

            
           

        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        <Button variant="outlined" onClick={closeModal}>Cancel</Button>
        <ToastContainer />
        </Modal>
    );
};

export default NewJobModal;
